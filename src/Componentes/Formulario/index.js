import Botao from "../Botao";
import { Cadastro } from "../Cadastro";
import "./Formulario.css";
import { useState } from "react";
// import { Button } from "react-bootstrap";

<<<<<<< HEAD
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

=======
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

>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
  return (
    <section className="formulario-container">
      <form className="formulario">
        <h2>Preencha os dados:</h2>
        <Cadastro
          label="CPF"
          tipo="number"
          placeholder="Digite o CPF"
<<<<<<< HEAD
          valor={cliente.cpf}
          valorIput={handleCpf}
          obrigatorio={'required'}
=======
          valor={cpf}
          valorIput={(evento) => setCpf(evento.target.value)}
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
        />
        <Cadastro
          label="Nome"
          tipo="text"
          placeholder="Digite o nome"
<<<<<<< HEAD
          valor={cliente.nome}
          valorIput={handleNome}
          obrigatorio={handleRequired}
=======
          valor={nome}
          valorIput={(evento) => setNome(evento.target.value)}
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
        />
        <Cadastro
          label="Data de Nascimento"
          tipo="date"
<<<<<<< HEAD
          valor={cliente.nascimento}
          valorIput={handleNascimento}
          obrigatorio={handleRequired}
=======
          valor={nascimento}
          valorIput={(evento) => setNascimento(evento.target.value)}
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
        />
        <Cadastro
          label="Renda"
          tipo="number"
          placeholder="Digite a renda"
<<<<<<< HEAD
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
=======
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
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
      </form>
    </section>
  );
};
