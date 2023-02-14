import './Botao.css'

const Botao = ({ texto, tipo, aoSubmeter }) => {
    return <button type={tipo} className="botao" 
    onClick={aoSubmeter}>
        {texto}
    </button>
}

export default Botao