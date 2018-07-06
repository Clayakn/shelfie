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
        products:[]
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

  render() {
    console.log('this.state.products in App.js', this.state.products)
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.products}/>
        {this.state.products.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.product_name}</h3>
                        <p>{product.price}</p>
                        <img className="imageDisplay"src={product.image_url} alt='Product Picture'/>
                    </div>
                )
            })}
        <Form products={this.state.products} />
      </div>
    );
  }
}

export default App;
