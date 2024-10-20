import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Catalog from './pages/Catalog';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Ruta para la página de Login */}
          <Route path="/login" component={Login} />

          {/* Ruta para la página del Catálogo de productos */}
          <Route path="/catalog" component={Catalog} />

          {/* Ruta para el Panel Administrativo de trabajadores */}
          <Route path="/admin" component={AdminPanel} />

          {/* Ruta predeterminada si no se especifica ninguna */}
          <Route exact path="/">
            <h1>Bienvenido a Matiz Vizion</h1>
            <p>Esta es la página principal. Navega a /login, /catalog, o /admin.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;