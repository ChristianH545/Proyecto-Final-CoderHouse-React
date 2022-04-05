import React from "react";
import StyleProductCard from "./style";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <StyleProductCard>
      <div class="box">
        <img src={product.img} alt="" className="img-cars" />
        <span className="text-maker cars ">{product.maker}</span>
        <span className="text-model cars ">
          <b>{product.model}</b>
        </span>
        <Link
          to={`/item/${product.id}/${product.model}`}
          className="btn btn-primary"
        >
          Detalles
        </Link>
      </div>
    </StyleProductCard>
  );
};

export default ProductCard;
