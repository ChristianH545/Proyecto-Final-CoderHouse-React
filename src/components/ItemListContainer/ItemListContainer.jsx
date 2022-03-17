import React, { useEffect, useState } from "react";
import styled from "styled-components"; // importo la dependencia de mi package.Json "styled-components" para manejar los style
import ProductCard from "../productCard/ProductCard";

const ItemListContainer = () => {
  const url = "https://run.mocky.io/v3/d10a45e6-1e78-4833-a721-b7502245e0c3";

  const [products, setProducts] = useState([]);

  //*realizando una promesa

  // const getProducts = () => {
  //   const prodPromise = new Promise((res, rej) => {
  //     res(url);
  //   });
  //   prodPromise.then((data) =>
  //     setProducts(data)
  //       .then((resp) => resp.json())
  //       .then((err) => console.log(err))
  //   );
  // };
  //!realizando un async
  // const getProducts = async () => {
  //   try {
  //     const resp = await fetch(url); //esperamos a que se cumpla la promesa
  //     const data = await resp.json(); //esperamos a que se parse la respuesta
  //     setProducts(data); //seteamos nuestro state de productos
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    //!para la promesa
    //  getProducts();

    /*uso de fetch con async/await*/
    // getProducts();

    //uso de fetch API con promesas --descomentar y comentar "getProducts()' para probar--*/

    //EJECUTAMOS LA FUNCION
    //Todo: fetch
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyleItemListContainer>
      {products.length ? (
        products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })
      ) : (
        <p>Cargando productos...</p>
      )}
    </StyleItemListContainer>
  );
};

export default ItemListContainer;

//!Estilos para ProductCard

const StyleItemListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1348px;
  margin: 50px auto;
  gap: 30px;
`;
