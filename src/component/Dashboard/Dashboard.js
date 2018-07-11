import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';


export default class Dashboard extends Component {
    render(){
        const { displayProducts } = this.props;
        
        return (
            <div>
                 {displayProducts.map((product, i) => <div key={i}><Product {...product} deleteProduct={this.props.deleteProduct} 
                 setEdit={this.props.setEdit}/></div>)}
            </div>
        )
    }
}