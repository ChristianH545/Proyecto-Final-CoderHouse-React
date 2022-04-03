import React, { useState } from "react";
import Login from "../components/ Login/Login";
import CartContainer from "../components/CartContainer/CartContainer";
import NavBar from "../layout/NavBar/NavBar";
import { app } from "../components/firebase/firebaseConfing";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
//hooks
const LoginRegistro = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  return (
    <>
      <NavBar />
      <h1>Inicio de Sesión/Registrate</h1>
      {usuario ? <CartContainer correoUsuario={usuario.email} /> : <Login />}
    </>
  );
};

export default LoginRegistro;
