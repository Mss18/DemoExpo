import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Listado = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { text: "foo", id: 0 },
      { text: "bar", id: 1 },
      { text: "bazz", id: 2 },
    ]);
  });

  return (
    <div className="container">
      Listado
      <div className="mt-3">
        <h3>Lista de Usuarios</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
              <th>Ano de nacemento</th>
            </tr>
          </thead>
          <tbody>
            {items.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>
                  <Link to={`/editar/${usuario.id}`}>Editar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
