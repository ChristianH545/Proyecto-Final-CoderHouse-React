import { createContext } from "react";
import { useState } from "react";

//ESTA SERÁ NUESTRA FUNCION DE  "createContext()" ES = "CartContext"
const CartContext = createContext();

export function CartContextProvider({ children }) {
  //!HOOKS
  const [itemCart, setItemsCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [totalItemCart, setTotalItemCart] = useState(0);

  /**TODO:
   * addItem -> Agregar item al carrito
   * removerItem (id) -> Remover item del carrito
   * isItemInCart(id) -> Validar que (id) item este en el Carrito
   * clearCart -> Vaciar Carrito
   * *countItemsInCart -> Contar item en el Carrito
   */

  const add = (value, multiplier) => {
    return value * multiplier;
  };
  //*  FUNCTION  removerItem (id)

  const removeItem = (item) => {
    if (isItemInCart(item.id)) {
      let index = itemCart.findIndex((i) => i.id === item.id);
      let copyCart = [...itemCart];
      setCartTotal(cartTotal - add(item.price, item.quantity));
      setTotalItemCart(totalItemCart - item.quantity);
      copyCart.splice(index, 1);
      setItemsCart(copyCart);
    }
  };
  //* FUNCTION clearCart
  function clearCart() {
    setItemsCart([]);
    setCartTotal(0);
    setTotalItemCart(0);
  }
  //* FUNCION addItem
  function addItem(item, quantity) {
    //!PREGUNTAMOS A item SI TIENE UN id
    if (isItemInCart(item.id)) {
      let index = itemCart.findIndex((i) => i.id === item.id);
      let copyCart = [...itemCart];
      copyCart[index].quantity += quantity;
      setCartTotal(cartTotal + add(item.price, quantity));
      setTotalItemCart(totalItemCart + quantity);
      setItemsCart(copyCart);
    } else {
      const itemToAdd = { ...item, quantity };
      setItemsCart([...itemCart, itemToAdd]);
      setCartTotal(cartTotal + add(item.price, item.quantity));
      setTotalItemCart(totalItemCart + item.quantity);
    }
  }
  //* FUNCION isItemInCart

  function isItemInCart(id) {
    return itemCart.some((everyitem) => everyitem.id === id);
  }

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
