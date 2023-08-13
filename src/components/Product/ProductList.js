import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button.js';
import classes from './ProductsList.module.css';

const ProductsList = (props) => {

  const sum = () => {
    let total = 0;
    for (let i = 0; i < props.products.length; i++) {
      total += +props.products[i].price
    }
    return total;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.id} - {product.name} - {product.price}
            <Button onClick={() => props.onDeleteProduct(product.id)}>Delete Product</Button>
          </li>
        ))}
      </ul>
      <h2>Total value worth of products:{sum()} </h2>
    </Card>
  );
}

export default ProductsList;