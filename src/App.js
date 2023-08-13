import React, { useState, useEffect } from 'react';

import ProductForm from './components/Product/ProductForm';
import ProductsList from './components/Product/ProductList';

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    console.log(storedProducts);
    setProductsList(JSON.parse(storedProducts) || []);
  }, []);

  const addProductHandler = (pId, pPrice, pName) => {
    const newProduct = { id: pId, name: pName, price: pPrice };

    // Update localStorage
    const updatedProductsList = [...productsList, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProductsList));
    //console.log("from storage: "+ localStorage.getItem("products"));
    // Update state
    setProductsList((prevProductsList) => [
      ...prevProductsList,
      newProduct,
    ]);
  };

  const deleteProductHandler = (id) => {
    // Filter out the product with the specified id
    const updatedProductsList = productsList.filter(product => product.id !== id);

    // Update localStorage
    localStorage.setItem("products", JSON.stringify(updatedProductsList));

    // Update state
    setProductsList(updatedProductsList);
  };
  return (
    <div>
      <ProductForm onAddProduct={addProductHandler} />
      <ProductsList products={productsList} onDeleteProduct={deleteProductHandler} />
    </div>
  );
}

export default App;
