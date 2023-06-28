import Botao from "../Botao";
import { Cadastro } from "../Cadastro";
import "./Formulario.css";
import { useState } from "react";
// import { Button } from "react-bootstrap";

export const Formulario = ({ aoClienteCadastrado, aoAddTable }) => {
  const [cliente, setCliente] = useState({
    cpf: '',
    nome: '',
    nascimento: '',
    renda: '',
    justificativa: '',
  });

  const handleCpf = (e) => {
    setCliente({
      ...cliente,
      cpf: e.target.value,
    });
  };

  const handleNome = (e) => {
    setCliente({
      ...cliente,
      nome: e.target.value,
    });
  };

  const handleNascimento = (e) => {
    setCliente({
      ...cliente,
      nascimento: e.target.value,
    });
  };

  const handleRenda = (e) => {
    setCliente({
      ...cliente,
      renda: e.target.value,
    });
  };

  const handleJustificativa = (e) => {
    setCliente({
      ...cliente,
      justificativa: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    aoClienteCadastrado(cliente);

    // console.log(cliente);
  };

  const handleRequired = (e) => {
    return e.target.value === '' ? true : false
  }

  return (
    <section className="formulario-container">
      <form className="formulario">
        <h2>Preencha os dados:</h2>
        <Cadastro
          label="CPF"
          tipo="number"
          placeholder="Digite o CPF"
          valor={cliente.cpf}
          valorIput={handleCpf}
          obrigatorio={'required'}
        />
        <Cadastro
          label="Nome"
          tipo="text"
          placeholder="Digite o nome"
          valor={cliente.nome}
          valorIput={handleNome}
          obrigatorio={handleRequired}
        />
        <Cadastro
          label="Data de Nascimento"
          tipo="date"
          valor={cliente.nascimento}
          valorIput={handleNascimento}
          obrigatorio={handleRequired}
        />
        <Cadastro
          label="Renda"
          tipo="number"
          placeholder="Digite a renda"
          valor={cliente.renda}
          valorIput={handleRenda}
          obrigatorio={handleRequired}
        />
        <Cadastro
          label="Jutificativa"
          tipo="text"
          placeholder="Por que salário menor que mínimo?"
          valor={cliente.justificativa}
          valorIput={handleJustificativa}
          obrigatorio={handleRequired}
        />
        <Botao texto={"Incluir"} tipo={"submit"} aoSubmeter={handleSubmit} />
      </form>
    </section>
  );
};
