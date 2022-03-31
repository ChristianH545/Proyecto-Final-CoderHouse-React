import React from "react";
import styled from "styled-components"; //!nuestro componente stateless
import ItemCount from "../ItemCount/ItemCount"; //!LA CONEXION QUE TENEMOS CON ItemCount
import { useContext } from "react"; //!SE IMPORTA PARA UTILZAR EL useContex EN hooks
import CartContext from "../context/CartContext"; //!SE ENLAZA NUESTRA CARPETA DONDE ESTA LA FUNCTION DEL useContext
import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

const ItemDetail = ({ item, totalItemCart }) => {
  const { addItem } = useContext(CartContext);

  const [isInCart, setIsInCart] = useState(false);

  //CREAMOS UNA FUNCTION QUE VA A RECIBIR  UNA CANTIDAD DE NUESTRO STOCK
  function addToCart(quantity) {
    addItem(item, quantity);
    setIsInCart(true);
  }

  return (
    <>
      <StyleItemDetail id="container">
        <div className="card-wrapper">
          <div class="card-photo-block">
            <img src={item.logo} className="card-product-logo" alt="Logo" />
            <img
              src={item.imgDetail}
              className="card-product-image"
              alt="Productimage"
            />
          </div>

          <div className="card-detail">
            <h1 className="title">{item.model}</h1>
            <h2 className="subtitle">{item.maker}</h2>

            <div className="descripcion-title">Descripción</div>

            <div className="description-products">
              <p>{item.description}</p>
            </div>
            {/* //*SERIA EL BOTON DE isInCart = TERMINAR COMPRA LE PASAREMOS UN link */}

            {isInCart ? (
              <Link to={`/Cart/${item.model}`}>
                <button className="button-terminar-compra" type="button">
                  Terminar Compra{" "}
                </button>{" "}
              </Link>
            ) : (
              <ItemCount addToCart={addToCart} stock={item.stock} />
            )}
          </div>
        </div>
        <CartWidget />
      </StyleItemDetail>
      <hr />
    </>
  );
};

export default ItemDetail;

//*style del Componente de presentacion
const StyleItemDetail = styled.div`
  .card-wrapper {
    width: 1005px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;

    display: flex;
  }

  .card-photo-block {
    width: 465px;
    height: 610px;
    background-color: #ffd617;

    margin-top: 45px;

    position: relative;
  }

  .card-product-logo {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 272px;
    height: auto;
  }

  .card-product-image {
    position: absolute;
    top: 85px;
    left: -200px;
    top: 180px;
    width: 672px;
    height: auto;
  }

  .card-detail {
    position: relative;
    z-index: 1;

    width: 540px;
    height: 840px;
    background-color: #1b2631;
    padding-top: 75px;
    padding-bottom: 75px;
    padding-left: 75px;
    padding-right: 40px;
    box-sizing: border-box;

    /* sombra */
    -webkit-box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
    box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
  }

  .title {
    color: #fdfefe;
    font-size: 34px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .subtitle {
    color: #f4d03f;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .descripcion-title {
    color: #fdfefe;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.33px;
    margin-bottom: 20px;
  }

  .description-products {
    text-align: justify;
    color: #fdfefe;
    font-size: 13px;
    line-height: 28px;
    margin-top: 0px;
    margin-bottom: 40px;
    padding-left: 2px;
    list-style-type: none;
  }

  .details {
    font-weight: 00;
    color: #f39c12;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.28px;
    margin-bottom: 30px;
    margin-bottom: 30px;
  }

  .details span {
    margin-right: 20px;
  }

  .quantity {
    font-weight: 600;
    color: #ffd617;
    font-size: 11px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .counter {
    display: flex;
    margin-left: 1px;
    margin-bottom: 30px;
  }

  .counter-button {
    width: 40px;
    height: 35px;
    border: 1px solid #7c8d9c;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1px;
    color: #ffffff;
  }

  #menos,
  #mas {
    width: 40px;
    height: 35px;
    border: 2px solid #ffffff;
    background-color: #ffffff;
    color: black;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    cursor: pointer;
  }

  .price-wrapper {
    margin-bottom: 30px;
  }

  .price {
    color: #fdfefe;
    font-size: 37px;
  }

  .button {
    width: 200px;
    height: 45px;
    background-color: #1251d1;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }

  .button-wish-list {
    width: 200px;
    height: 45px;
    border: 1px solid #7c8d9c;
    background-color: #ffffff;
    color: #7c8d9c;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    cursor: pointer;
  }

  .cart {
    display: flex;
    align-items: center;

    width: 1005px;
    background-color: #ffffff;
    padding: 30px 20px;
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
  }

  .cart-img {
    width: 48px;
    height: auto;

    margin-right: 35px;
  }

  .cart-text {
    font-size: 22px;
    font-weight: 600;
  }

  #cart-with-items {
    display: ;
  }

  .cart-items,
  .cart-price {
    color: #1683d3;
  }

  .clear-cart {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #1251d1;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .button-terminar-compra {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #1251d1;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .ir-shop {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #229954;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .remove-cart {
    margin-left: auto;
    width: 150px;
    height: 45px;
    background-color: #e74c3c;
    margin-right: 10px;
    margin-left: -10px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
`;
