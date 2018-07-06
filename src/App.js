import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super(); 
      this.state={
        products:[],
        price: '',
        id: ''
      }
    this.getProducts = this.getProducts.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
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

  // Axios Put (Update)
  updateProduct = (id, price) => {
    axios.put(`/api/products/${id}`, { price }).then(response => {
      this.setState({
        products: response.data
      })
      this.getProducts();
    }
    )
  }
  changePrice = (val) => {
    this.setState({
      price: val
    })
  }
  giveID = (val) => {
    this.setState({
      id: val
    })
  }

  render() {
  
    console.log('this.state.products', this.state.products)
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div className="mainContainer">
            <Dashboard products={this.state.products} getProducts={() => this.getProducts()} updateProduct={  this.updateProduct}/>
            <Form selectProduct={this.state.selectProduct} products={this.state.products} getProducts={() => this.getProducts()}/>
    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
