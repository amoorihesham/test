import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./productcard.css";

function ProductCard({ product, products }) {
  return (
    <Fragment>
      <div className="card overflow-hidden">
        <img src={product.image} className="card-top-img" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text mt-4 text-black-50">{product.description}</p>

          <div className="options d-flex align-items-center justify-content-between mt-4">
            <Link to={`/products/${product.id}`} className="btn btn-primary">
              Detail
            </Link>
            <span className="fs-5 text-success fw-bold">{product.price}$</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductCard;
