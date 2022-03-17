import NavBar from "./layout/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; //firebase/ firestore import
import db from "./components/firebase/firebaseConfing";

function App() {
  useEffect(() => {
    //!CREACION DE UNA VARIBLE PARA UTILIZAR EL "firebase"
    const obtenerDatos = async () => {
      const itemProducts = await getDocs(collection(db, "detalles"));
      itemProducts.forEach((documento) => {
        console.log(documento.data());
      });
    };
    obtenerDatos();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <HeroContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
