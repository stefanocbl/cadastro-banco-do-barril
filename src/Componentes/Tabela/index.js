import "./Tabela.css";
import { Cliente } from "../Cliente";

export const Tabela = ({ aoAddTable }) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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
      </tbody>
    </table>
  );
};
