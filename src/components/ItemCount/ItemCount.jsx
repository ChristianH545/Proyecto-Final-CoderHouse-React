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
    //SI EL CONTADOR ES MAYOR QUE 1 RESTAMOS
    if (count > 1) setCount(count - 1);
  }
  return (
    <>
      {/* LUEGO COPIAMOS Y PEGAMOS  LO CREADO EN ItemDetail CON SUS className Y SUS CARACTERISTICAS UNICAS ASI PODRAS MEDIANTE EL STYLES COMPONENTS ASINARLE SUS ESTILOS SIN ROMPER LO TRABAJADO CON ANTERIORIDA DESDE EL ItemDetail (eso cuando los style ya los trabajaste alli)*/}

      {/* AQUI INCLUIMOS EL STOCK QUE SE MOSTRARA EN ItemDetail */}
      <div className="details">
        <span>
          In Stock {""} {stock} Unidades
        </span>
        <hr />
      </div>
      {/* SOLO ES UN TEXTO quantity con stylos incluidos */}
      <div className="quantity">Quantity</div>

      {/* SECCION DE LOS BOTONES Y CONTADOR PARA ItemDetail */}

      {/* BOTON MENOS */}
      <div className="counter">
        <button onClick={restar} id="menos" className="counter-button">
          -
        </button>
        {/* CONTADOR */}
        <div id="quantity-cell" className="counter-button">
          {count}
        </div>
        {/* BOTON DE MÁS */}
        <button onClick={sumar} id="mas" class="counter-button">
          +
        </button>
      </div>
      <div className="price-wrapper">
        <span id="item-price" className="price">
          {count.signo} {count.price} {count.divisa}
        </span>
      </div>
      {/* SON LOS BUTTON  PARA AGREGAR AL CART */}
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
