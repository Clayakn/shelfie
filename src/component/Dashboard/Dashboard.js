import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state={
                products: [],
                price: '', 
                toggle: false
            }
    }

    deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`).then(response => {
            this.props.getProducts();
        })
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
              toggle: !prevState.toggle
            }
        })
      }
    changePrice = (val) => {
        this.setState({
            price: val
        })
    }
    edit = (id) => {
        let { price } = this.state; 
        let {updateProduct} = this.props;
          updateProduct(id, price)
        this.setState({
            toggle: false
        })
    }
 

    render(){
        return (
            <div>
                 {this.props.products.map(product => {
                return (
                    <div className="productColumn" key={product.id}>
                        <div className='productBox'>
                            <img className="imageDisplay"src={product.image_url} alt='Product Picture'/>
                            <div className="productInfo">
                                <h3>{product.product_name}</h3>
                                {this.state.toggle ?  <div><input value={this.state.price}  placeholder="change price" onChange={(e) => this.changePrice(e.target.value)}></input></div> : <p>{product.price}</p>}
                                {this.state.toggle ?  <button onClick={() => this.edit(product.id)}>Save</button> :  <button onClick={() => this.toggle()}>Edit</button>}
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