import React, { useState } from "react";
import Login from "../Login";
import CartContainer from "../../CartContainer/CartContainer";
import { app } from "../../firebase/firebaseConfing";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
//hooks
const LoginContainer = () => {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  return (
    <>{usuario ? <CartContainer correoUsuario={usuario.email} /> : <Login />}</>
  );
};

export default LoginContainer;
