import React, { useState } from "react";
import NavBar from "./layout/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Shop from "../src/pages/Shop";
import Login from ".././src/components/ Login/Login";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [usuario, setusuario] = useState(null);
  return (
    <div className="App">
      {usuario ? <Shop /> : <Login />}
      <NavBar />
      <Outlet />
      <HeroContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
