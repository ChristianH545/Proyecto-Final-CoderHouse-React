import React, { useEffect, useState } from "react";
import StyleItemListContainer from "./style";
import ProductCard from "../productCard/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfing";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "producto"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
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
