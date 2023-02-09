import Botao from "../Botao";
import { Cadastro } from "../Cadastro";
import "./Formulario.css";
import { useState } from "react";
// import { Button } from "react-bootstrap";

export const Formulario = () => {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [renda, setRenda] = useState("");

  return (
    <section className="formulario-container">
      <form className="formulario">
        <h2>Preencha os dados:</h2>
        <Cadastro label="CPF" tipo="number" placeholder="Digite o CPF" />
        <Cadastro label="Nome" tipo="text" placeholder="Digite o nome" />
        <Cadastro label="Data de Nascimento" tipo="date" />
        <Cadastro label="Renda" tipo="number" placeholder="Digite a renda" />

        <Botao texto={"Salvar"} type={"submit"}></Botao>
        {/* <Button variant="primary">Salvar</Button> */}
      </form>
    </section>
  );
};
