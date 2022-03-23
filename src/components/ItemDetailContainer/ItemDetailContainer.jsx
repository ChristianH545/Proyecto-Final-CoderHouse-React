import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from "styled-components";
import NavBar from "../../layout/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfing";

const ItemDetailContainer = () => {
  //!este seria backend haciendo un llamado a la API
  // const url = "https://run.mocky.io/v3/5d193438-2a15-424c-b1db-f3c8faf9266e";
  const { id, model } = useParams();
  console.log(id, model, "id del useParams");

  //!el manejo del estado de react
  const [items, setItems] = useState([]);

  useEffect(() => {
    //!CREACION DE UNA VARIBLE PARA UTILIZAR EL "firebase"
    const getDetail = async () => {
      try {
        const listProducts = await getDocs(collection(db, "producto"));
        const docs = [];
        listProducts.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });

          console.log(doc.id, "id doc");
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
    //!fetch es un metodo que trabaja con promise
    //  fetch(url)
    //    .then((resp) => resp.json())
    //  .then((results) => {
    // //     //     // console.log(results);
    //  const idInt = parseInt(id);
    // //     //     //! como resp es un Json los que viene es un string
    //      const itemFound = results.find((r) => r.id === idInt); //* .find es un metodo de Array que nos permite encontrar el match del id del item que buscamos
    // //     //     //     //* con el id que traemos de la url, este método retorna un objeto, por lo que podemos utilizarlo así
    //     setItems(itemFound);
    //    })
    //    .catch((err) => console.log(err + "este esel error"));
  }, [id, model]);
  console.table(items.id, "contenido del items");
  return (
    <>
      <NavBar />
      {/* este seria el padre contenedor para los style  */}
      <StyleItemDetailContainer>
        <div key={items.id}>
          <ItemDetail item={items} />
        </div>
      </StyleItemDetailContainer>
    </>
  );
};

export default ItemDetailContainer;
//*style de nuestro contenedor padre
const StyleItemDetailContainer = styled.div`
  font-weight: 400;
  background-color: #efefef;
`;
