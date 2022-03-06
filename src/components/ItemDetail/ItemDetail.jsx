import React from "react";
//!nuestro componente stateless

const ItemDetail = ({ item }) => {
  return (
    <>
      <div>
        <p>{item.category}</p>
        <p>{item.maker}</p>
        <p>{item.year}</p>
        <p>{item.description}</p>
        <p>precio {item.price}</p>
        <img src={item.img} alt="" />
      </div>
    </>
  );
};

export default ItemDetail;
