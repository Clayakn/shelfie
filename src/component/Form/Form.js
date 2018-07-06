import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props); 
            this.state={
                imageUrl: '',
                name: '',
                price: 0,
                products: props.products,
                selectProductId: props.selectProduct.id
            }
    }

    changeUrl = (imageAddress) => {
        this.setState({
            imageUrl: imageAddress
        })
    }

    changeName = (newName) => {
        this.setState({
            name: newName
        })
    }
    
    changePrice = (newPrice) => {
        this.setState({
            price: newPrice
        })
    }

    cancel = () => {
        this.setState({
            imageUrl: '',
            name: '',
            price: 0
        })
    }

    addInventory = (imageUrl, name, price) => {
        axios.post('/api/products', {imageUrl, name, price}).then( response => {
            // this.setState({
            //     products: response.data
            // })
        })
            this.cancel();
            this.props.getProducts();
    }

    // componentDidUpdate(id){

    // }

    render(){
        return (
            <div className='container'>
                <div className="form">
                    <div className='imageContainer'>
                     <img className="imagePreview" src={this.state.imageUrl ? this.state.imageUrl : 'https://www.unesale.com/ProductImages/Large/notfound.png'} alt='Preview of Picture'/>
                    </div>
                    <p>Image URL:</p>
                    <input className="formInput" placeholder="Insert Image Url Here" onChange={e => this.changeUrl(e.target.value)} value={this.state.imageUrl}></input>
                    <p>Product Name:</p>
                    <input className="formInput" placeholder="Insert Product Name Here" onChange={e => this.changeName(e.target.value)} value={this.state.name}></input>
                    <p>Price:</p>
                    <input className="formInput" placeholder="Insert Price Here" onChange={e => this.changePrice(e.target.value)} value={this.state.price}></input>
                    <div className="form_button_box">
                        <button className="form_button" onClick={() => this.cancel()}>Cancel</button> 
                        <button className="form_button" onClick={() => this.addInventory(this.state.imageUrl, this.state.name, this.state.price)}>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}
