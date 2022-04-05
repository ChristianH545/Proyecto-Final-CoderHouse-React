import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import StyleItemDetailContainer from "./style";
import NavBar from "../../layout/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfing";

const ItemDetailContainer = () => {
  const { id, model } = useParams();
  console.log(id, model, "id del useParams");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const listProducts = await getDocs(collection(db, "producto"));
        const docs = [];
        listProducts.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        const idInt = String(id);
        const itemFound = docs.find((r) => r.id === idInt);
        const modelInt = String(model);
        const itemFoundModel = docs.find((r) => r.model === modelInt);

        setItems(itemFound, itemFoundModel);
        console.log(docs, "docs");
      } catch (error) {
        console.log(error, "error de firebase");
      }
    };
    getDetail();
  }, [id, model]);
  console.table(items.id, "contenido del items");
  return (
    <>
      <NavBar />
      <StyleItemDetailContainer>
        <div key={items.id}>
          <ItemDetail item={items} />
        </div>
      </StyleItemDetailContainer>
    </>
  );
};

export default ItemDetailContainer;
