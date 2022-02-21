import React from "react";
import styled from "styled-components";

const ItemListContainer = (props) => {
  return (
    <>
      <ItemStyle>
        <div>
          <h2> {props.greeting}</h2>
        </div>
      </ItemStyle>
    </>
  );
};

export default ItemListContainer;

const ItemStyle = styled.div`
  h2 {
    color: red;
    font-size: xx-large;
    text-align: center;
    position: relative;
    top: 14rem;
    font-weight: bold;
  }
`;
