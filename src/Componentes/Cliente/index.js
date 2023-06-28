import "./Cliente.css";

export const Cliente = ({
  key,
  cpf,
  nome,
  nascimento,
  renda,
  justificativa,
}) => {
  return (
    <tr key={key}>
      <td>{cpf}</td>
      <td>{nome}</td>
      <td>{nascimento}</td>
      <td>{`R$ ${renda}`}</td>
      <td>{justificativa}</td>
    </tr>
  );
};
