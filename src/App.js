<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Banner } from "./Componentes/Banner";
import { Formulario } from "./Componentes/Formulario";
import { Tabela } from "./Componentes/Tabela";

function App() {
  const [tabelaDados, setTabelaDados] = useState([]);

  const handleAddCliente = (cliente) => {
    setTabelaDados([...tabelaDados, cliente]);
  };

  return (
    <div className="App">
      <Banner />
      <Tabela aoAddTable={tabelaDados} />
      <Formulario
        aoClienteCadastrado={(cliente) => handleAddCliente(cliente)}
      />
=======
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
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
    </div>
  );
}

export default App;
