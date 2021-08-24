import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { Editar } from "./components/Editar";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-ligth">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/crear" className="nav-link">
              Rexistrar usuario
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Usuarios
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Listado} />
        <Route path="/editar/:id" component={Editar} />
        <Route path="/crear" component={Crear} />
      </Switch>
    </div>
  );
}

export default App;
