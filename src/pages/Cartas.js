import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Carta from '../components/Carta';


const Cartas = () => {

    const [cartas, setCartas] = useState([])
  
    useEffect(() => {
      fetch('https://obsidian-cardgame.herokuapp.com/api/cartas/')
      .then(resposta => resposta.json())
      .then(dados => {
        setCartas(dados)
      })
    }, [])
  
    return (
          <div className="AppStyle">
            <div className="Principal">
              {cartas.map(carta => 
              (<Carta 
              key={carta.id} nome={carta.nome} 
              raca={carta.raca}
              custo={carta.custo}  
              forca={carta.forca} 
              resistencia={carta.resistencia} 
              descricao={carta.descricao} 
              imagem={carta.imagem}
              />))}
            </div>
            <div className="Menu">
              <Menu/>
          </div>
        </div>
  
    );
  }
  
  export default Cartas;
  