import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "./App.css";
import { Banner } from "./Componentes/Banner";
import { Formulario } from "./Componentes/Formulario";
import { Tabela } from './Componentes/Tabela';

function App() {
  const [clientes, setClientes] = useState([])
  const aoNovoClienteAdicionado = (cliente) => {  
    setClientes([...clientes, cliente])
    
    console.log(cliente);
    console.log(clientes);
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario aoClienteCadastrado={cliente => aoNovoClienteAdicionado(cliente)} />
      <Tabela />
    </div>
  );
}

export default App;
