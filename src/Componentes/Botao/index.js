<<<<<<< HEAD
import "./Botao.css";

const Botao = ({ texto, tipo, aoSubmeter }) => {
  return (
    <button type={tipo} className="botao" onClick={aoSubmeter}>
      {texto}
    </button>
  );
};

export default Botao;
=======
import './Botao.css'

const Botao = ({ texto, tipo, aoSubmeter }) => {
    return <button type={tipo} className="botao" 
    onClick={aoSubmeter}>
        {texto}
    </button>
}

export default Botao
>>>>>>> add43242bf7b2c770c7ac8d355f7789b9699f0f5
