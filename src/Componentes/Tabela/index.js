import "./Tabela.css";
import { Cliente } from "../Cliente";

<<<<<<< HEAD
export const Tabela = ({ aoAddTable }) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
=======
export const Tabela = () => {
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
  return (
    <table>
      <thead>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Renda</th>
          <th>Justificativa</th>
        </tr>
      </thead>
      <tbody>
<<<<<<< HEAD
        {aoAddTable.map((cliente) => (
          <Cliente
            key={getRandomIntInclusive(0, 999)}
            cpf={cliente.cpf}
            nome={cliente.nome}
            nascimento={cliente.nascimento}
            renda={cliente.renda}
            justificativa={cliente.justificativa}
          />
        ))}
=======
        <Cliente
        // cpf={}
        // nome={}
        // dataNascimento={}
        // renda={}
        />
        <Cliente></Cliente>
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
      </tbody>
    </table>
  );
};
