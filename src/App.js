import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import { Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super(); 
      this.state={
        products:[],
        id: '',
        imageUrl: '',
        price: '',
        productName: '',
        doEdit: false
      }
  }

  // Axios Get (Read)
  componentDidMount(){
    axios.get('/api/products').then(response => {
      this.setState({
        products: response.data
      })
    })
  }

  // Axios Get (Read) to pass down to Dashboard
  getProducts = () => {
    axios.get('/api/products').then(response => {
      this.setState({
        products: response.data
      })
    })
  }

  handleImageChange = (val) => {
    this.setState({imageUrl: val});
  }
  handleNameChange = (val) => {
    this.setState({productName: val});
  }
  handlePriceChange = (val) => {
    this.setState({price: val});
  }

  cancel = () => {
    this.setState({
        imageUrl: '',
        productName: '',
        price: 0,
        doEdit: false
    })
  }

  setEdit = (id) => {
    const filteredProduct = this.state.products.filter(product => product.id === id)[0];

      this.setState({
        id: filteredProduct.id,
        productName: filteredProduct.product_name,
        price: filteredProduct.price,
        imageUrl: filteredProduct.image_url,
        doEdit: true
      });
  }

  editProduct = () => {
  const { id, doEdit, imageUrl, productName, price } = this.state; 
  if(doEdit) {
      axios.put(`/api/products/${id}`, { imageUrl, productName, price })
      .then(response => {
          this.cancel();
          this.getProducts();
      }).catch(error => console.log('Update Product Axios Error------------', error));
  } 
}

deleteProduct = (id) => {
  axios.delete(`/api/products/${id}`).then(response => {
      this.getProducts();
  }).catch(error => console.log('deleteProduct Axios Error--------', error))
}

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <Header />
        <nav className='navBar'>
          <Link to="/"> Dashboard </Link>
          <Link  to='/add'>Form</Link>
        </nav>
        <Switch>
          <Route 
            exact path='/' 
            render={() => <Dashboard 
            displayProducts={this.state.products} 
            setEdit={this.setEdit} 
            deleteProduct={this.deleteProduct} />}
          />
          <Route 
            path='/add/:id' 
            render={({location}) => <Form 
            productName={this.state.productName} price={this.state.price} imageUrl={this.state.imageUrl} cancel={this.cancel} 
            doEdit={this.state.doEdit} getProducts={this.getProducts} handleNameChange={this.handleNameChange} handlePriceChange={this.handlePriceChange} 
            handleImageChange={this.handleImageChange} editProduct={this.editProduct} location={location}/>}
          />
        </Switch>
        <div className="main">
          <div className="mainContainer">
          </div>
    
        </div>
      </div>
    );
  }
}

export default App;
