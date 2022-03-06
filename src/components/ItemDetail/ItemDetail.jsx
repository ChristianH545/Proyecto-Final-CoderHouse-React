import React from "react";
import styled from "styled-components";
//!nuestro componente stateless

const ItemDetail = ({ item }) => {
  return (
    <>
      <StyleItemDetail id="container">
        {/* <!-- Start	Product details --> */}
        <div className="product-details">
          {/* <!-- 	Product Name --> */}
          <h1>{item.maker}</h1>
          {/* <!-- 		<span classNmae="hint new">New</span> -->
<!-- 		<span classNmae="hint free-shipping">Free Shipping</span> --> */}
          {/* <!-- 		the Product rating --> */}
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
          Name
          {/* <!-- The most important information about the product --> */}
          <p className="information">{item.description}</p>
          {/* <!-- 		Control --> */}
          <div className="control">
            {/* <!-- Start Button buying --> */}
            <button className="btn">
              {/* <!-- 		the Price --> */}
              <span className="price">{item.price}</span>
              {/* <!-- 		shopping cart icon--> */}
              <span className="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              {/* <!-- 		Buy Now / ADD to Cart--> */}
              <span className="buy">Buy Now</span>
            </button>
            {/* <!-- End Button buying --> */}
          </div>
        </div>

        {/* <!-- 	End	Product details   --> */}

        {/* <!-- 	Start product image & Information --> */}

        <div className="product-image">
          <img src={item.img} alt="" />

          {/* <!-- 	product Information--> */}
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>Sun Needs: </strong>Full Sun
              </li>
              <li>
                <strong>Soil Needs: </strong>Damp
              </li>
              <li>
                <strong>Zones: </strong>9 - 11
              </li>
              <li>
                <strong>Height: </strong>2 - 3 feet
              </li>
              <li>
                <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
              </li>
              <li>
                <strong>Features: </strong>Tolerates heat
              </li>
            </ul>
          </div>
        </div>
        {/* <!--  End product image  --> */}
      </StyleItemDetail>
    </>
  );
};

export default ItemDetail;

//*style del Componente de presentacion
const StyleItemDetail = styled.div`
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: 700px;

  .product-details h1 {
    font-family: "Old Standard TT", serif;
    display: inline-block;
    position: relative;
    font-size: 34px;
    color: #344055;
    margin: 0;
  }

  .product-details h1:before {
    position: absolute;
    content: "";
    right: 0%;
    top: 0%;
    transform: translate(25px, -15px);
    font-family: "Farsan", cursive;
    display: inline-block;
    background: #ffa69e;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    color: #fff;
    margin: 0;
    animation: chan-sh 6s ease infinite;

    .product-details > p {
      font-family: "Farsan", cursive;
      text-align: center;
      font-size: 20px;
      color: #7d7d7d;
    }

    .btn {
      transform: translateY(0px);
      transition: 0.3s linear;
      background: #49c608;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      outline: none;
      border: none;
      color: #eee;
      padding: 0;
      margin: 0;
    }

    .btn span {
      font-family: "Farsan", cursive;
      transition: transform 0.3s;
      display: inline-block;
      padding: 10px 20px;
      font-size: 1.2em;
      margin: 0;
    }
    btn .price,
    .shopping-cart {
      background: #333;
      border: 0;
      margin: 0;
    }
    .btn .price {
      transform: translateX(-10%);
      padding-right: 15px;
    }
    .btn .shopping-cart {
      transform: translateX(-100%);
      position: absolute;
      background: #333;
      z-index: 1;
      left: 0;
      top: 0;
    }
    .product-image {
      transition: all 0.3s ease-out;
      display: inline-block;
      position: relative;
      overflow: hidden;
      height: 100%;
      float: right;
      width: 50%;
      display: inline-block;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      background: rgba(27, 26, 26, 0.9);
      font-family: "Farsan", cursive;
      transition: all 0.3s ease-out;
      transform: translateX(-100%);
      position: absolute;
      line-height: 1.9;
      text-align: left;
      font-size: 120%;
      cursor: no-drop;
      color: #fff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    }
    .info h2 {
      text-align: center;
    }
    .product-image:hover .info {
      transform: translateX(0);
    }

    .info ul li {
      transition: 0.3s ease;
    }
    .info ul li:hover {
      transform: translateX(50px) scale(1.3);
    }

    .product-image:hover img {
      transition: all 0.3s ease-out;
    }
    .product-image:hover img {
      transform: scale(1.2, 1.2);
    }
  }
`;
