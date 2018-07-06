import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css';


export default class Dashboard extends Component {
    constructor(){
        super();
            this.state={
                products: []
            }
    }

    deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`).then(response => {
            this.props.getProducts();
        })
    }
    
    render(){
        console.log('props.products', this.props.products)
        return (
            <div>
                 {this.props.products.map(product => {
                return (
                    <div className="productColumn">
                        <div key={product.id} className='productBox'>
                            <img className="imageDisplay"src={product.image_url} alt='Product Picture'/>
                            <div className="productInfo">
                                <h3>{product.product_name}</h3>
                                <p>{product.price}</p>
                                <button>Edit</button>
                                <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
                <Product/>
            </div>
        )
    }
}