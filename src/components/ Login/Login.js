import React, { useState } from "react";
import Uno from "../../assets/imagenes/img/img-auto1.jpg";
import Dos from "../../assets/imagenes/img/img-auto2.jpg";
import Tres from "../../assets/imagenes/img/img-auto3.jpg";
import "../ Login/Login.css";
//! para utilizar la validacion y autenticar de firebase
import { app } from "../firebase/firebaseConfing";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [registro, setRegistro] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if (registro) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
    } else {
      await signInWithEmailAndPassword(auth, correo, contraseña);
    }
  };

  return (
    <>
      <div className="row container p-4 ">
        {/* esta parte sera donde se desarrollara el slide */}
        <div className="col-md-6 mb-2 p-2">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Uno} alt="" className="tamaño-img" />
              </div>
              <div className="carousel-item">
                <img src={Dos} alt="" className="tamaño-img" />
              </div>
              <div class="carousel-item">
                <img src={Tres} alt="" className="tamaño-img" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* en esta seccion sera nuestro formulario */}
        <div className="col-md-6 mt-5 p-5 ">
          <div className="mt-5 ms-5">
            <h1>{registro ? `Registrate` : `Iniciar Sesión`}</h1>
            <form onSubmit={handlerSubmit}>
              <div className="mb-3">
                <label className="form-label">Email Address: </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresar Email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresar password"
                  id="password"
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {registro ? `Registrate` : `Inicia Sesión`}
              </button>
            </form>

            <div className="from-group">
              <button
                className="btn btn-secondary mt-4 form-control"
                onClick={() => setRegistro(!registro)}
              >
                {registro
                  ? `ya tienes una cuenta? Inicia Sesión`
                  : `no tienes cuenta? Registrate`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
