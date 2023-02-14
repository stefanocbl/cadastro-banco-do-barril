import Botao from "../Botao";
import { Cadastro } from "../Cadastro";
import "./Formulario.css";
import { useState } from "react";
// import { Button } from "react-bootstrap";

export const Formulario = ({ aoClienteCadastrado }) => {
  const [cpf, setCpf] = useState("00012345678");
  const [nome, setNome] = useState("Stefano");
  const [nascimento, setNascimento] = useState("");
  const [renda, setRenda] = useState("2000");
  const [justificativa, setJustificativa] = useState("Não há");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    aoClienteCadastrado({
      cpf,
      nome,
      nascimento,
      renda,
      justificativa,
    })
  };

  return (
    <section className="formulario-container">
      <form className="formulario">
        <h2>Preencha os dados:</h2>
        <Cadastro
          label="CPF"
          tipo="number"
          placeholder="Digite o CPF"
          valor={cpf}
          valorIput={(evento) => setCpf(evento.target.value)}
        />
        <Cadastro
          label="Nome"
          tipo="text"
          placeholder="Digite o nome"
          valor={nome}
          valorIput={(evento) => setNome(evento.target.value)}
        />
        <Cadastro
          label="Data de Nascimento"
          tipo="date"
          valor={nascimento}
          valorIput={(evento) => setNascimento(evento.target.value)}
        />
        <Cadastro
          label="Renda"
          tipo="number"
          placeholder="Digite a renda"
          valor={renda}
          valorIput={(evento) => setRenda(evento.target.value)}
        />
        {
          <Cadastro
            label="Jutifique"
            tipo="text"
            placeholder="Justificativa de renda"
            valor={justificativa}
            valorIput={(evento) => setJustificativa(evento.target.value)}
          />
        }
        <Botao
          texto={"Salvar"}
          tipo={"submit"}
          aoSubmeter={handleSubmit}
        ></Botao>
      </form>
    </section>
  );
};
