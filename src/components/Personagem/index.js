import './Personagem.css'

const Personagem = ({nome, imagem, titulo, raca, origem, resumo, aparencia}) => {
    return(
        <div className='personagem'>
            <div className='imagen-container'>
                <img src={imagem} alt={aparencia}/>
            </div>
            <div className='conteudo'>
                <p className='nome'>
                    <strong>Nome: {nome}</strong>
                </p>
                <p className='titulo'>
                    Título(s): <strong>{titulo}</strong>
                </p>
                <p className='raca'>
                    Raça: {raca}
                </p>
                <p className='origem'>
                    Origem: {origem}
                </p>
                <p className='resumo'>
                    {resumo}
                </p>

            </div>
        </div>
    )
}

export default Personagem