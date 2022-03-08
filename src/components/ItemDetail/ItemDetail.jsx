import React from "react";
import styled from "styled-components";

//!nuestro componente stateless

const ItemDetail = ({ item }) => {
  return (
    <>
      <StyleItemDetail id="container">
        <div className="card-wrapper">
          <div class="card-photo-block">
            <img src={item.logo} className="card-product-logo" alt="Logo" />
            <img
              src={item.img}
              className="card-product-image"
              alt="Productimage"
            />
          </div>

          <div className="card-detail">
            <h1 className="title">Fujifilm X-T10</h1>
            <h2 className="subtitle">Mirrorless Digital Camera</h2>

            <div className="features-title">Features</div>

            <ul className="list">
              <li>16.3 MP APS-C X-Trans CMOS II Sensor</li>
              <li>0.39" 2,360k-Dot 0.62x OLED Viewfinder</li>
              <li>3.0" 920k-Dot Tilting LCD Monitor</li>
              <li>Full HD 1080p Video Recording at 60 fps</li>
              <li>Built-In Wi-Fi Connectivity</li>
            </ul>

            <div className="details">
              <span>In Stock</span>
              <span>Free Shipping</span>
              <span>Reviews</span>
            </div>

            <div className="quantity">Quantity</div>
            <div className="counter">
              <button id="minus" className="counter-button">
                -
              </button>
              <div id="quantity-cell" className="counter-button"></div>
              <button id="plus" class="counter-button">
                +
              </button>
            </div>

            <div className="price-wrapper">
              <span id="item-price" className="price"></span>
              <span className="old-price">Old Price: $799</span>
            </div>
            <button id="add-to-cart" className="button">
              Add to Cart
            </button>
            <button className="button-wish-list">Add to Wish List</button>
          </div>
        </div>

        <div className="cart">
          <div className="cart-img-wrapper">
            <img
              className="cart-img"
              src="https://i.postimg.cc/py3X5Xzk/shopping-cart.png"
              alt="Shipping Cart Icon"
            />
          </div>

          <div className="cart-text">
            <div id="cart-empty"> Compra Seguro </div>
            <div id="cart-with-items">
              В корзине:{" "}
              <span id="cart-total-items" className="cart-items"></span>
              товаров на сумму{" "}
              <span id="cart-total-price" className="cart-price"></span>
            </div>
          </div>

          <div className="clear-cart">Очистить корзину</div>
        </div>
      </StyleItemDetail>
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
    height: 700px;
    background-color: #ffffff;
    padding-top: 75px;
    padding-bottom: 75px;
    padding-left: 75px;
    padding-right: 40px;
    box-sizing: border-box;

    /* тень */
    -webkit-box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
    box-shadow: -22px 1px 28px -17px rgba(0, 0, 0, 0.6);
  }

  .title {
    color: #000000;
    font-size: 34px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .subtitle {
    color: #3a4d5c;
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .features-title {
    color: #7c8d9c;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.33px;
    margin-bottom: 20px;
  }

  .list {
    color: #7c8d9c;
    font-size: 13px;
    line-height: 28px;
    margin-top: 0px;
    margin-bottom: 40px;
    padding-left: 15px;
    list-style-type: none;
  }

  .list li {
    position: relative;
  }

  .list li::before {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: #00c217;

    position: absolute;
    left: -15px;
    top: 12px;
  }

  .details {
    color: #7c8d9c;
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
    color: #7c8d9c;
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
  }

  #minus,
  #plus {
    width: 40px;
    height: 37px;
    border: 1px solid #7c8d9c;
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
    color: #3a4d5c;
    font-size: 37px;
  }

  .old-price {
    color: #7c8d9c;
    font-size: 13px;
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
    display: none;
  }

  .cart-items,
  .cart-price {
    color: #1683d3;
  }

  .clear-cart {
    margin-left: auto;

    color: #ecb9b9;
    border-bottom: 1px dotted #ecb9b9;
    cursor: pointer;

    display: none;
  }
`;
