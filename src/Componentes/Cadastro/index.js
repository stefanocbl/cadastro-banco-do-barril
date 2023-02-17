import "./Cadastro.css";

<<<<<<< HEAD
export const Cadastro = ({ label, tipo, placeholder, valor, valorIput, obrigatorio }) => {
=======
export const Cadastro = ({ label, tipo, placeholder, valor, valorIput }) => {

  

>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
  return (
    <div className="cadastro">
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={valorIput}
<<<<<<< HEAD
        required={obrigatorio}
=======
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
      />
    </div>
  );
};
