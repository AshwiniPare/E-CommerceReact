import React, {useState} from 'react';

const productForm = props => {
    const submitHandler = (event) => {
        event.preventDefault();
      //  localStorage.setItem('')
    }
    return (
        <div>
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
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text"
                        id="productName"
                        value={productName}
                        onChange={productNameHandler}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default productForm;