import React, { useState, useEffect } from "react";
import { UsuarioForm } from "./UsuarioForm";

export const Editar = () => {
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    setUsuario({
      nome: "foo",
      apelido: "bar",
      anoNacemento: "1234",
    });
  }, []);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return usuario ? (
    <div className="container">
      <div className="mt-3">
        <h3>Editar usuario</h3>
        <UsuarioForm usuario={usuario} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Cargando...</div>
  );
};
