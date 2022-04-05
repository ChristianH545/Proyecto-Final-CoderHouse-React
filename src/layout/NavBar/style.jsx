import styled from "styled-components";

const StyleNav = styled.nav`
  h1 {
    text-indent: 7rem;
    font-size: 1.5rem;
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  h1:hover {
    color: orange;
    background: white;
  }

  padding: 2rem;
  background-color: #1b2631;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  a:hover {
    color: orange;
    background: white;
  }

  img {
    position: absolute;
    width: 100px;
    weight: 100px;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      margin-inline-end: 1em;
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1.5rem;
        color: white;
        display: inline;
        border: 2px solid black;
      }
      a:hover {
        color: orange;
        background: white;
      }
      .Iconshop {
        position: absolute;
        width: 2rem;
        height: 2rem;
        left: 60.5rem;
      }

      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    a:hover {
      color: orange;
      background: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 0% 0%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export default StyleNav;
