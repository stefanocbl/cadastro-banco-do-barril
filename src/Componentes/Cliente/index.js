import "./Cliente.css";

<<<<<<< HEAD
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
=======
export const Cliente = () => {
  return (
      <tr>
        <td>{"123.456.789-00"}</td>
        <td>{"Bruce Weyne"}</td>
        <td>{"01-06-1981"}</td>
        <td>{"R$120.000"}</td>
        <td>{}</td>
      </tr>
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
  );
};
