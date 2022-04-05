import React, { useState, useEffect } from "react";
import NavBar from "../layout/NavBar/NavBar";
import { app } from "../components/firebase/firebaseConfing";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
const db = getFirestore(app);
const User = () => {
  const valorInicial = {
    nombre: "",
    edad: "",
    profesion: "",
  };
  // Variables de Estado
  const [user, setUser] = useState(valorInicial);
  const [lista, setLista] = useState([]);
  const [subId, setSubId] = useState("");

  // Function para Capturar Inputs
  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //la funcion a cumplir es actulizar y guardar datos
  const guardarDatos = async (e) => {
    e.preventDefault();
    if (subId === "") {
      try {
        await addDoc(collection(db, "usuarios"), {
          ...user,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await setDoc(doc(db, "usuarios", subId), {
        ...user,
      });
    }
    setUser({ ...valorInicial });
    setSubId("");
  };

  // Function para Renderizar Lista de usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);
  //Fuction para Eliminar Usuario
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
  };
  //Fuction para actulizar User
  const getOne = async (id) => {
    try {
      const docRef = doc(db, "usuarios", id);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  //creamos una condicional en hooks del UseEffect
  useEffect(() => {
    if (subId !== "") {
      getOne(subId);
    }
  }, [subId]);

  return (
    <>
      <NavBar />
      <p>
        {" "}
        <strong>Bloq</strong>{" "}
      </p>
      ;{/* comezando el formulario */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center mb-3">Ingresar Usuarios</h3>
            {/* Sección del formulario */}
            <form onSubmit={guardarDatos}>
              <div className="card card-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control mb-3"
                    placeholder="Ingrese el Nombre del Usuario"
                    onChange={capturarInputs}
                    value={user.nombre}
                  />
                  <input
                    type="text"
                    name="edad"
                    className="form-control mb-3"
                    placeholder="Ingrese la Edad"
                    onChange={capturarInputs}
                    value={user.edad}
                  />
                  <input
                    type="text"
                    name="profesion"
                    className="form-control mb-3"
                    placeholder="Ingrese la Profesión"
                    onChange={capturarInputs}
                    value={user.profesion}
                  />
                </div>
                {/* seccion del button */}
                <button className="btn btn-primary">
                  {subId === "" ? "Guardar" : "Actualizar"}
                </button>
              </div>
            </form>
          </div>
          {/* esta seria la seccion de la lista de usuario  */}
          <div className="col-md-8">
            <h2 className="text-center mb-5">Lista de Usuario</h2>
            <div className="container card">
              <div className="card-body">
                {lista.map((list) => (
                  <div key={list.id}>
                    <p>Nombre: {list.nombre}</p>
                    <p>Edad: {list.edad}</p>
                    <p>Profesión: {list.profesion}</p>
                    {/* seccion del button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(list.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-success m-1"
                      onClick={() => setSubId(list.id)}
                    >
                      Actualizar
                    </button>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
