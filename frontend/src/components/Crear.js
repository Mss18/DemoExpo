import React from "react";
import { useForm } from "react-hook-form";
import { UsuarioForm } from "./UsuarioForm";

export const Crear = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Rexistrar usuario</h3>
        <UsuarioForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
