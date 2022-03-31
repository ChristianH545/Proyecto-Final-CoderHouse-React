import React from "react";
import { useContext } from "react"; //!SE IMPORTA PARA UTILZAR EL useContex EN hooks
import CartContext from "../context/CartContext"; //!SE ENLAZA NUESTRA CARPETA DONDE ESTA LA FUNCTION DEL useContext
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { clearCart, cartTotal, totalItemCart, removeItem } =
    useContext(CartContext);

  return (
    <>
      {/* ESTE SERIA EL CONTADOR DEL CART DE LA IMG */}

      <div className="cart">
        {totalItemCart}
        <div className="cart-img-wrapper">
          <img
            className="cart-img"
            src="https://i.postimg.cc/py3X5Xzk/shopping-cart.png"
            alt="Shipping Cart Icon"
          />
        </div>
        <div className="cart-text">
          <div id="cart-empty"></div>
          <div id="cart-with-items">
            Cart With Items:{totalItemCart}
            <hr />
            <span id="cart-total-price" className="cart-price">
              Total Price: {cartTotal}
            </span>
          </div>
        </div>
        {/* ESTE PUEDE SER EL BUTTON PARA ELIMIDAR LOS PRODUCTO ASIGNADO AL CART */}
        <button onClick={clearCart} className="clear-cart">
          {" "}
          Clear Cart{" "}
        </button>
        <button onClick={removeItem} className="remove-cart">
          {" "}
          Remove Items{" "}
        </button>
        <Link to="/shop">
          <button className="ir-shop"> Seguir Comprando</button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
