import React from 'react';
import './Product.css';

export default function Product(props) {
    const { id, product_name, image_url, price } = props;
    return (
      <div className="productBox">
        <img className="imageDisplay" src={image_url} alt='Product Picture'/>
        <div className="productInfo">
          <p>{product_name}</p>
          <p>{price}</p>
        </div>
        <button className='dashboard_button' onClick={() => props.deleteProduct(id)}>Delete</button>
        <button className='dashboard_button' onClick={() => props.setEdit(id)}>Edit</button>
      </div>
    )
  }