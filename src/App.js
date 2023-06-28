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
    </div>
  );
}

export default App;
