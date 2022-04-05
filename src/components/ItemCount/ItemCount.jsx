import { useState } from "react";

export default function ItemCount({ stock, addToCart }) {
  const [count, setCount] = useState(1);

  //*CREAMOS UNA FUNCIONPARA SUMAR
  function sumar() {
    if (count < stock) {
      //SI EL CONTADOR ES MENOR QUE EL STOCK SUMAMOS
      setCount(count + 1);
    }
  }
  //*CREAMOS UNA FUNCTION PARA RESTAR
  function restar() {
    if (count > 1) setCount(count - 1);
  }
  return (
    <>
      <div className="details">
        <span>
          In Stock {""} {stock} Unidades
        </span>
        <hr />
      </div>

      <div className="quantity">Quantity</div>
      <div className="counter">
        <button onClick={restar} id="menos" className="counter-button">
          -
        </button>

        <div id="quantity-cell" className="counter-button">
          {count}
        </div>

        <button onClick={sumar} id="mas" class="counter-button">
          +
        </button>
      </div>
      <div className="price-wrapper">
        <span id="item-price" className="price">
          {count.signo} {count.price} {count.divisa}
        </span>
      </div>

      <button
        onClick={() => addToCart(count)}
        id="add-to-cart"
        className="button"
      >
        Add to Cart
      </button>
      <button className="button-wish-list">Add to Wish List</button>
    </>
  );
}
