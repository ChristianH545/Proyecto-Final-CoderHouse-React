import React, { useContext } from "react";
import StyleCart from "../Cart/style";
import CartContext from "../../context/CartContext";
import CartWidget from "./CartWidget";
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
