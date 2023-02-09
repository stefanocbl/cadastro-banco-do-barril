import "./Cadastro.css";

export const Cadastro = ({ label, tipo, placeholder, valor }) => {

  const pegarValor = (evento) => {
    console.log(evento.target.value);
  };

  return (
    <div className="cadastro">
      <label>{label}</label>
      <input
        value={valor}
        type={tipo}
        placeholder={placeholder}
        onChange={pegarValor}
      />
    </div>
  );
};
