import React from "react";
import NavBar from "../layout/NavBar/NavBar";

const Bloq = () => {
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
            <form>
              <div className="card card-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control mb-3"
                    placeholder="Ingrese el Nombre del Usuario"
                  />
                  <input
                    type="text"
                    name="edad"
                    className="form-control mb-3"
                    placeholder="Ingrese la Edad"
                  />
                  <input
                    type="text"
                    name="profesion"
                    className="form-control mb-3"
                    placeholder="Ingrese la Profesión"
                  />
                </div>
                {/* seccion del button */}
                <button className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
          {/* esta seria la seccion de la lista de usuario  */}
          <div className="col-md-8">
            <h2 className="text-center mb-5">Lista de Usuario</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloq;
