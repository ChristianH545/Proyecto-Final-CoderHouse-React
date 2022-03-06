import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from "styled-components";

const ItemDetailContainer = () => {
  //!este seria backend haciendo un llamado a la API
  const url = "https://run.mocky.io/v3/d10a45e6-1e78-4833-a721-b7502245e0c3";
  const { id } = useParams();
  console.log(id);

  //!el manejo del estado de react
  const [items, setItems] = useState([]);

  useEffect(() => {
    //!fetch es un metodo que trabaja con promise
    fetch(url)
      .then((resp) => resp.json())
      .then((results) => {
        console.log(results);

        const idInt = parseInt(id); //! como resp es un Json los que viene es un string
        const itemFound = results.find((r) => r.id === idInt); //* .find es un metodo de Array que nos permite encontrar el match del id del item que buscamos
        //* con el id que traemos de la url, este método retorna un objeto, por lo que podemos utilizarlo así
        setItems(itemFound);
      })
      .catch((err) => console.log(err + "este esel error"));
  }, [id]);

  return (
    <>
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
  background: #dfc2f2;
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
  background-attachment: fixed;
  background-size: cover;
`;
