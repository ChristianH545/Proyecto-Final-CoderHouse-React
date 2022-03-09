import { useState } from "react/cjs/react.development";

export default function ItemCount({ stock }) {
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
    //SI EL CONTADOR ES MAYOR QUE EL STOCK RESTAMOS
    if (count < stock) setCount(count - 1);
  }
  return (
    <>
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
    </>
  );
}
