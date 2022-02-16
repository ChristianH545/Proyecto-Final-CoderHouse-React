import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <h2>
          Tuauto <span>Importado</span>
        </h2>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav;
