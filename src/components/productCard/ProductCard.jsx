import React from "react";
import styled from "styled-components"; // importo la dependencia de mi package.Json "styled-components" para manejar los style

const ProductCard = ({ product }) => {
  return (
    <StyleProductCard>
      <div className="product-card__img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-card__detail">
        <h2> {product.maker} </h2>
        <h3>Modelo:{product.model}</h3>
        <h4>Año: {product.year}</h4>
        <p>{product.description}</p>
        <span>
          {product.signo} {product.price} {product.divisa}
        </span>
        <div>
          <button className="btn-compra">Comprar</button>
        </div>
      </div>
    </StyleProductCard>
  );
};

export default ProductCard;

//!Estilos para ProductCard

const StyleProductCard = styled.article`
  width: 320px;
  height: 620px;

  &__img {
    width: 100%;
    height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__detail {
    text-align: center;
    h2 {
      font-size: 1.4rem;
      text-transform: capitalize;
      padding: 10px 0;
    }
    span {
    }
  }

  .btn-compra {
    color: white;
    background-color: rgb(41, 103, 204);
  }
`;
