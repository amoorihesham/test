import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const productUICard = products.map((product) => {
    return (
      <div className="col-xxl-4" key={product.id}>
        <ProductCard product={product} products={products}/>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="content-area pt-5">
        <h1>Test Debloy</h1>
        <div className="container">
          <div className="row g-4">{productUICard}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
