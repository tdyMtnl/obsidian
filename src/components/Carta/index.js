import './Carta.css'

const Carta = ({nome, raca, custo , forca, resistencia, descricao, imagem}) => {
    return(
        <div className='Carta'>
            
            <div className='imagen-container'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='conteudo'>
                <p className='nome'>
                    <strong>{nome}</strong>
                </p>
                <p className='raca'>
                    <strong>{raca}</strong>
                </p>
                <p className='custo'>
                    {custo}
                </p>
                <p className='forca'>
                    {forca}
                </p>
                <p className='resistencia'>
                    {resistencia}
                </p>
                <p className='descricao'>
                    {descricao}
                </p>

            </div>
        </div>
    )
}

export default Carta