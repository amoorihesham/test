import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pagesStyles/productdetailspage.css";

function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const apiURL = `https://fakestoreapi.com/products/${params.productId}`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <Fragment>
      <div className="pt-5">
        <div className="container">
          <h2>
            Product {params.productId} {`(${product.title})`} Details
          </h2>
          <div className="details-box mt-5">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center">
                <div className="col-xxl-4">
                  <div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className=" offset-1 col-xxl-7">
                  <h5 className="text-bg-white p-3 border rounded mb-4">
                    <span className="d-flex w-75 text-white justify-content-between align-items-center bg-danger p-1 ">
                      <span>{product.title}</span>
                    </span>
                  </h5>
                  <h5 className="text-bg-white p-3 border rounded mb-4">
                    <span className="d-flex w-25 text-white justify-content-between align-items-center bg-danger p-1 ">
                      Price:<span>{product.price}$</span>
                    </span>
                  </h5>
                  <h5 className="text-bg-white p-3 border rounded mb-4">
                    <span className="cate-span">#{product.category}</span>
                  </h5>
                  <p className="bg-secondary p-3 border rounded mb-4">
                    <span className="bg-secondary text-white-50"> {product.description}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductDetailsPage;
