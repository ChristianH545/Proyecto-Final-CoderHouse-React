import React, { useContext } from "react";
//  import { useParams } from "react-router-dom";
import StyleCartContainer from "./style";
import NavBar from "../../../layout/NavBar/NavBar";
import CartView from "../../view/Cart/CartView";
import CartContext from "../../context/CartContext";
import { app } from "../../firebase/firebaseConfing";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

const CartContainer = ({ correoUsuario }) => {
  //  const { model } = useParams();

  const { itemCart } = useContext(CartContext);
  const product = itemCart;
  return (
    <>
      <NavBar />
      <div className="container col align-items-end ">
        <p>
          Bienvenido, <strong>{correoUsuario}</strong> haz iniciado sesión,{" "}
          <strong> ahora podras realizar la compra que desees.</strong> Gracias
          por Registrarte...
        </p>
        <div className="d-md-flex justify-content-md-end mb-2 mt-1">
          <button className="btn btn-primary " onClick={() => signOut(auth)}>
            Cerrar Sesión
          </button>
        </div>
        <hr />
      </div>
      <StyleCartContainer>
        <CartView product={product} />
      </StyleCartContainer>
    </>
  );
};

export default CartContainer;
