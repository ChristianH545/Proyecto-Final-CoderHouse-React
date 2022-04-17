import styled from "styled-components";

//*style de nuestro contenedor section
const StyleCart = styled.section`
  .cart {
    display: flex;
    align-items: center;

    width: 1005px;
    background-color: #ffffff;
    padding: 30px 20px;
    margin-top: 35px;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
  }

  .cart-img {
    width: 48px;
    height: auto;

    margin-right: 35px;
  }

  .cart-text {
    font-size: 22px;
    font-weight: 600;
  }

  #cart-with-items {
    display: ;
  }

  .cart-items,
  .cart-price {
    color: #1683d3;
  }

  .clear-cart {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #1251d1;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .button-terminar-compra {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #1251d1;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .ir-shop {
    margin-left: auto;
    width: 200px;
    height: 45px;
    background-color: #229954;
    margin-right: 20px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
  .remove-cart {
    margin-left: auto;
    width: 150px;
    height: 45px;
    background-color: #e74c3c;
    margin-right: 10px;
    margin-left: -10px;
    color: #ffffff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }
`;

export default StyleCart;
