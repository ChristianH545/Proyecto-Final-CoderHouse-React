import React, { useState } from "react"; //importando el estado "useState" (referencia al ciclo de vida)
import StyleNav from "./style";
import { BgDiv } from "./style";
import BurguerButton from "./BurguerButton";
import imagenes from "../../assets/imagenes/Imagenes";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <StyleNav>
        <Link to="/">
          <img src={imagenes.img2} alt="" />
          <h1>
            Tu @uto <span>Importado</span>
          </h1>
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="/Shop" activeClassName="selected">
            <BiShoppingBag className="Iconshop" />
            Shop
          </NavLink>
          <NavLink activeClassName="active" to="/About">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/Contact">
            Contact
          </NavLink>
          <NavLink activeClassName="active" to="/user">
            User
          </NavLink>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </StyleNav>
    </>
  );
};

export default NavBar;
