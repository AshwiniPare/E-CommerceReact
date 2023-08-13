import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddProduct.module.css';
import ErrorModal from '../UI/ErrorModal';

const ProductForm = props => {
    const [productId, setProductId] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productName, setProductName] = useState('');

    const productIdHandler = (event) => {
        setProductId(event.target.value);
    }

    const productPriceHandler = (event) => {
        setProductPrice(event.target.value);
    }

    const productNameHandler = (event) => {
        setProductName(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onAddProduct(productId, productPrice, productName);

        setProductId('');
        setProductName('');
        setProductPrice('');
    }

    return (
        <div>
            <Card className={classes.input}>
                <h2>Add Product</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="productId">Product Id:</label>
                        <input type="text"
                            id="productId"
                            value={productId}
                            onChange={productIdHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="productPrice">Product Price:</label>
                        <input type="text"
                            id="productPrice"
                            value={productPrice}
                            onChange={productPriceHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="productName">Product Name:</label>
                        <input type="text"
                            id="productName"
                            value={productName}
                            onChange={productNameHandler}
                        />
                    </div>
                    <Button type="submit">Add Product</Button>
                </form>
            </Card>
        </div>
    );
}

export default ProductForm;