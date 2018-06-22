import React from 'react';
import noImage from './../../No_image.png';

function Product(props) {
  let { name, price, image} = props.item
  if (image = null) {
      return noImage;
  }
    return (
        <div>
           <p>{image}</p>
           <p>{name}</p>
           <p>${price}</p>
        </div>
    );
}

export default Product;

// props.item = the products table made in SQL