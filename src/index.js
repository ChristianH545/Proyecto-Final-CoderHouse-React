import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //para trabajar de manera rapida
//Todo: rutas de Routes react DOM
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Home from "./pages/Home";
import Components404 from "./components/view/Components404/Components404";
import { CartContextProvider } from "./components/context/CartContext";
import CartContainer from "./components/Container/CartContainer/CartContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import LoginContainer from "./components/Container/LoginContainer/LoginContainer";

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user" element={<User />} />
        <Route
          exact
          path="/item/:id/:model"
          element={<ItemDetailContainer />}
        />
        <Route exact path="/cart/:model" element={<CartContainer />} />
        <Route exact path="/login/:model" element={<LoginContainer />} />

        <Route component={Components404} />
      </Routes>
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
