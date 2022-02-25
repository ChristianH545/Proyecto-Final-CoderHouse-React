import React, { useEffect, useState } from "react";
import styled from "styled-components"; // importo la dependencia de mi package.Json "styled-components" para manejar los style
import ProductCard from "../productCard/ProductCard";

const ItemListContainer = () => {
  const url = "https://run.mocky.io/v3/ef9f3b9b-e0fa-4286-9fa2-8a343c1d67a4";

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await fetch(url); //esperamos a que se cumpla la promesa
      const data = await resp.json(); //esperamos a que se parse la respuesta
      setProducts(data); //seteamos nuestro state de productos
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /*uso de fetch con async/await*/
    getProducts();

    /*uso de fetch API con promesas --descomentar y comentar "getProducts()' para probar--*/
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => setProducts(data))
    //     .catch(err=> console.log(err));
  }, []);

  return (
    <StyleItemListContainer className="products-container">
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

const StyleItemListContainer = styled.section`
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1024px;
    margin: 60px auto;
    gap: 30px;
  }
`;
