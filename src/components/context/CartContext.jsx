import { createContext } from "react";
import { useState } from "react";

//ESTA SERÁ NUESTRA FUNCION DE  "createContext()" ES = "CartContext"
const CartContext = createContext();

export function CartContextProvider({ children }) {
  //creamos el estado con el snipper UseSta
  const [itemCart, setItemsCart] = useState([]);

  /**TODO:
   * addItem -> Agregar item al carrito
   * *removerItem (id) -> Remover item del carrito
   * isItemInCart(id) -> Validar que (id) item este en el Carrito
   * clearCart -> Vaciar Carrito
   * *countItemsInCart -> Contar item en el Carrito
   */

  //TODO: tutor pero tengo un problema y me gustaria que me orientara ejemplo de donde sale amount creo que ese es el error que me presenta e codigo. podria explicarme? por favor para entenderla
  //* CREAMOS UNA FUNCTION LLAMADA removerItem (id)

  //     function removerItem(id, amount) {

  //     const itemEncontrado = itemCart.find((item) => item.id === id);

  // 	if (itemEncontrado?.quantity > 1 && itemEncontrado.quantity > amount {

  //       let copyCart = [...itemCart];

  //       let index = itemCart.findIndex((i) => i.id === item.id);

  // 	  copyCart[index].quantity -= amount;

  // 	  setItemCart(copyCart);

  //     } else if (itemEncontrado !== undefined) {

  //       setItemCart(itemCart.filter((item) => item.id !== id));

  //    }

  // }

  //*AHORA VAMOS A CREAR FUNCTION clearCart PARA LIMPIAR NUESTRO
  function clearCart() {
    setItemsCart([]);
  }
  //*CREAMOS NUESTRA FUNCION addItem
  function addItem(item, quantity) {
    //!PREGUNTAMOS A item SI TIENE UN id
    if (isItemInCart(item.id)) {
      let index = itemCart.findIndex((i) => i.id === item.id);
      let copyCart = [...itemCart];
      copyCart[index].quantity += quantity;
      setItemsCart(copyCart);
    } else {
      //*DESARMAMOS TODAS LAS PROPIEDADES DE Item, quantity AGREGAR EN CANTIDAD Y, LO ENCERRAMOS EN UN OBJETO Y CON EL OPERADOR EXPRESS "..." NOS ASEGURAMOS DE QUE  REPLICAMOS LA INFORMACION  YA ALMACENADA Y GUARDAMOS EN EL quantity
      const itemToAdd = { ...item, quantity };

      //*primero seteamos y copiamos con el operador express "..." para crear una copia de ese objeto o array creando uno nuevo y con la informacion que tenia nuestro itemCart
      setItemsCart([...itemCart, itemToAdd]);
    }
  }

  //*CREAMOS NUESTRA FUNCION isItemInCart esta funcion va iterar nuestro array en busca de algo especifico en este caso trabajaremos con some()
  function isItemInCart(id) {
    return itemCart.some((cadaitem) => cadaitem.id === id);
  }

  return (
    <>
      <CartContext.Provider value={{ addItem, itemCart, clearCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContext;
