import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //para trabajar de manera rapida
//Todo: rutas de Routes react DOM
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Item from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Components404 from "./components/Components404/Components404";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
      </Route>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/item/:id" element={<Item />} />

      <Route component={Components404} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
