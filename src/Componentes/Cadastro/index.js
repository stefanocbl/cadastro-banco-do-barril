import "./Cadastro.css";

export const Cadastro = ({ label, tipo, placeholder, valor, valorIput, obrigatorio }) => {
  return (
    <div className="cadastro">
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={valorIput}
        required={obrigatorio}
      />
    </div>
  );
};
