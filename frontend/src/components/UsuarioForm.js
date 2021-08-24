import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

export const UsuarioForm = ({ usuario }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { nome: usuario ? usuario.nome : "" },
  });
  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/");
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="text">Nome:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="nome"
          id="nome"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Apelido:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="apelido"
          id="apelido"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Ano de nacemento:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="anoNacemento"
          id="anoNacemento"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Gardar
        </button>
      </div>
    </form>
  );
};
