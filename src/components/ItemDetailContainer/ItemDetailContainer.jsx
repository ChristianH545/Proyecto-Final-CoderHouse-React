import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from "styled-components";
import NavBar from "../../layout/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfing";
import Login from "../ Login/Login";
import CartContainer from "../CartContainer/CartContainer";
import { app } from "../firebase/firebaseConfing";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

const ItemDetailContainer = () => {
  const { id, model } = useParams();
  console.log(id, model, "id del useParams");

  //!el manejo del estado de react
  const [usuario, setUsuario] = useState(null);
  const [items, setItems] = useState([]);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  useEffect(() => {
    //!CREACION DE UNA VARIBLE PARA UTILIZAR EL "firebase"
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
      {usuario ? <CartContainer correoUsuario={usuario.email} /> : <Login />}
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
