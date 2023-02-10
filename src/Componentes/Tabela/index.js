import "./Tabela.css";
import { Cliente } from "../Cliente";

export const Tabela = () => {
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
        <Cliente
        // cpf={}
        // nome={}
        // dataNascimento={}
        // renda={}
        />
        <Cliente></Cliente>
      </tbody>
    </table>
  );
};
