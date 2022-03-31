import { createContext } from "react";
import { useState } from "react";

//ESTA SERÁ NUESTRA FUNCION DE  "createContext()" ES = "CartContext"
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  //!HOOKS useState
  const [itemCart, setItemCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalItemCart, setTotalItemCart] = useState(0);
  //! VARIABLE
  const calc = (price, quantity) => {
    return price * quantity;
  };
  function isInCart(id) {
    return itemCart.some((product) => product.id === id);
  }
  //* FUNCION addItem
  function addItem(item, quantity) {
    // Paso 2: En el caso exista el producto se recorre nuevamente el arreglo para identificar el index
    if (isInCart(item.id)) {
      let index = itemCart.findIndex((i) => i.id === item.id);
      //Paso 3: Clonar carrito y ubicarse en el index encontrado para sumar cantidad
      let cloneCart = [...itemCart];
      cloneCart[index].qty += quantity;
      //Paso 4: Actualizar total, carrito y cantidades totales
      setCartTotal(cartTotal + calc(item.price, quantity));
      setItemCart(cloneCart);
      setTotalItemCart(totalItemCart + quantity);
    } else {
      // paso 5: en el caso no exista el producto se agregar 'qty' como nueva prop y se actualiza el estado del carrito, total y cantidades
      const newItemCart = { ...item, quantity: quantity };
      console.log("New item in Cart: ", newItemCart);
      setItemCart([...itemCart, newItemCart]);
      setCartTotal(cartTotal + calc(newItemCart.price, newItemCart.quantity));
      setTotalItemCart(totalItemCart + newItemCart.quantity);
    }
  }

  //*  FUNCTION  removerItem (id)

  const removeItem = (id) =>
    setItemCart(itemCart.filter((item) => item.id === id));
  //* FUNCTION clearCart
  const clearCart = () => {
    setItemCart([]);
    setCartTotal(0);
    setTotalItemCart(0);
  };
  //* FUNCION isItemInCart

  // const isItemInCart = (id) => {
  //   return itemCart.some((everyitem) => everyitem.id === id);
  // };

  return (
    <>
      <CartContext.Provider
        value={{
          addItem,
          itemCart,
          clearCart,
          removeItem,
          cartTotal,
          totalItemCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContext;
