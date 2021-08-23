import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado'
import { Editar } from './components/Editar'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-ligth">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/crear" className="nav-link">Rexistro</Link>
          </li>
          <li className="navbar-item">
            <Link to="/listar" className="nav-link">Usuarios</Link>
          </li>          
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Formulario} />
        <Route path="/listar/" component={Listado} />        
        <Route path="/crear" component={Formulario} />
        <Route path="/editar" component={Editar} />
      </Switch>
    </div>
  );
}

export default App;
