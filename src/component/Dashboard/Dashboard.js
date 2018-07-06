import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state={
                products: props.products
            }
    }

    render(){
        console.log('this.state.products', this.state.products)
        return (
            <div>
            <Product/>
            </div>
        )
    }
}