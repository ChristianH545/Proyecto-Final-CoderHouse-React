import React from "react";
import styled from "styled-components"; // importo la dependencia de mi package.Json "styled-components" para manejar los style
import { Link } from "react-router-dom"; //Todo: rutas de react-router-dom

const ProductCard = ({ product }) => {
  return (
    <StyleProductCard>
      <div className="">
        <img className="card-img-top" src={product.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{product.model} </h5>
          <h6> Fabricante: {product.maker}</h6>
          <Link to="/Shop" className="btn btn-primary">
            Detalles
          </Link>
        </div>
      </div>
    </StyleProductCard>
  );
};

export default ProductCard;

//!Estilos para ProductCard

const StyleProductCard = styled.article`
  box-sizing: border-box;
  border: 2px solid black;
  float: left;
  width: 18rem;
`;

//   .product-card__img {
//     width: 100%;
//     height: 200px;

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       padding: 10px;
//     }
//   }

//   .product-card__detail {
//     word-wrap: break-word;
//     padding: 10px;
//     background-color: #ddf;
//   }

//   h2 {
//     font-size: 2rem;
//     text-transform: capitalize;
//     padding: 10px;
//   }

//   span {
//     font-weight: bold;
//   }
//   p {
//     text-align: justify;
//     text-transform: none;
//     font-style: italic;
//     resize: horizontal;
//     overflow: auto;

//     padding-top: 10px;
//   }

//   h3 {
//     font-weight: bold;
//     font-size: 1.4rem;
//   }

//   h4 {
//     font-weight: bold;
//     font-style: italic;
//   }

//   .btn-compra {
//     color: white;
//     background-color: rgb(41, 103, 204);
//     padding: 10px;
//     border-top: 5px;
//     position: sticky;
//   }
// `;
