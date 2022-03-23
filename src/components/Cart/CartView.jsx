import React from "react";
import styled from "styled-components";

//!este seria nuestro Components de Presentacion

const CartView = ({ cart }) => {
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
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <hr />
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={cart.img}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                {/* <a href="#">Lorem Ipsum dolor</a> */}
                                <div className="product-info">
                                  <div>
                                    Display: <span class="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span class="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span class="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <hr />
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={cart.img}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                {/* <a href="#">Lorem Ipsum dolor</a> */}
                                <div className="product-info">
                                  <div>
                                    Display:{" "}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        {" "}
                        <hr />
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={cart.img}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                {/* <a href="#">Lorem Ipsum dolor</a> */}
                                <div className="product-info">
                                  <div>
                                    Display:{" "}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item">
                    <span className="text">Subtotal</span>
                    <span className="price">$360</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Discount</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span class="text">Shipping</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Total</span>
                    <span className="price">$360</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyleCart>
    </>
  );
};
export default CartView;
//*style de nuestro contenedor section
const StyleCart = styled.section``;
