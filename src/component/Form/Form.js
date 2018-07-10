import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {

    addInventory = () => {
        console.log('this.props',this.props)
        const {imageUrl, productName, price} = this.props;
        axios.post('/api/products', {imageUrl, productName, price}).then( response => {
            this.props.cancel();
            this.props.getProducts();
        }).catch(error => console.log('Axios Post Error--------', error))
    }

    render(){
        const { id, imageUrl, productName, price, doEdit } = this.props;
        return (
            <div className='container'>
                <div className="form">
                    <div className='imageContainer'>
                     <img className="imagePreview" src={imageUrl ? imageUrl : 'https://www.unesale.com/ProductImages/Large/notfound.png'} alt='Preview of Picture'/>
                    </div>
                    <p>Image URL:</p>
                    <input className="formInput" placeholder="Insert Image Url Here" onChange={e => this.props.handleImageChange(e.target.value)} value={imageUrl}></input>
                    <p>Product Name:</p>
                    <input className="formInput" placeholder="Insert Product Name Here" onChange={e => this.props.handleNameChange(e.target.value)} value={productName}></input>
                    <p>Price:</p>
                    <input className="formInput" placeholder="Insert Price Here" onChange={e => this.props.handlePriceChange(e.target.value)} value={price}></input>
                    <div className="form_button_box">
                        <button className="form_button" onClick={() => this.props.cancel()}>Cancel</button> 
                        <button className="form_button" onClick={e => doEdit ? this.props.editProduct(id) : this.addInventory()}>{doEdit ? 'Save' : 'Add To Inventory'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
