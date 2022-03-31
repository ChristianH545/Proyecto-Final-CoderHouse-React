import React from "react";
import styled from "styled-components";
import { useContext } from "react"; //!SE IMPORTA PARA UTILZAR EL useContex EN hooks
import CartContext from "../context/CartContext"; //!SE ENLAZA NUESTRA CARPETA DONDE ESTA LA FUNCTION DEL useContext
import CartWidget from "./CartWidget";
//!este seria nuestro Components de Presentacion
import { Link } from "react-router-dom";
const CartView = () => {
  const { itemCart } = useContext(CartContext);

  return (
    <>
      <StyleCart className="shopping-cart dark">
        <div className="container">
          <div className="block-heading">
            <h2>Shopping Cart</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div clasNames="content">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="items">
                  {itemCart.length ? (
                    itemCart.map((product) => {
                      return (
                        <div key={product.id}>
                          <div className="product" product={product}>
                            <div className="row">
                              <div className="col-md-3">
                                {" "}
                                <hr />
                                <img
                                  src={product.img}
                                  className="img-fluid mx-auto d-block image"
                                  alt=""
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="info">
                                  <div className="row">
                                    <div className="col-md-5 product-name">
                                      <div className="product-name">
                                        {product.model}
                                        <div className="product-info">
                                          <div>
                                            Description:{" "}
                                            <span class="description">
                                              {product.description}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4 quantity">
                                      <label for="quantity">Quantity:</label>
                                      <input
                                        id="quantity"
                                        type="number"
                                        value={product.quantity}
                                        className="form-control quantity-input"
                                      />
                                    </div>
                                    <div className="col-md-3 price">
                                      <span>{product.price} c/u</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      <h2>NO TIENES COMPRAS EN TU CARRO </h2>
                      <Link to="/shop">
                        <button className="ir-shop"> IR AL SHOP</button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <CartWidget />
          </div>
        </div>
      </StyleCart>
    </>
  );
};
export default CartView;
//*style de nuestro contenedor section
const StyleCart = styled.section`
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
