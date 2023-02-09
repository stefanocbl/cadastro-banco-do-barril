import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Banner } from "./Componentes/Banner";
import { Formulario } from "./Componentes/Formulario";
import { Tabela } from './Componentes/Tabela';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Tabela />
    </div>
  );
}

export default App;
