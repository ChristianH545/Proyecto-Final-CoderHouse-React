import { createContext } from "react";
import { useState } from "react";

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
    if (isInCart(item.id)) {
      let index = itemCart.findIndex((i) => i.id === item.id);

      let cloneCart = [...itemCart];
      cloneCart[index].qty += quantity;

      setCartTotal(cartTotal + calc(item.price, quantity));
      setItemCart(cloneCart);
      setTotalItemCart(totalItemCart + quantity);
    } else {
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
