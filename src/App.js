import './App.css';
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Personagem from './components/Personagem';



function App() {

  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('https://obsidian-cardgame.herokuapp.com/api/personagens/')
    .then(resposta => resposta.json())
    .then(dados => {
      setPersonagens(dados)
    })
  }, [])

  return (
    
      <div className="AppStyle">
        <div className="Principal">
          {personagens.map(personagem => 
          (<Personagem 
          key={personagem.id} nome={personagem.nome} 
          titulo={personagem.titulo} 
          raca={personagem.raca} 
          origem={personagem.origem} 
          resumo={personagem.resumo} 
          aparencia={personagem.aparencia} 
          imagem={personagem.imagem}
          />))}
        </div>
        <div className="Menu">
          <Menu/>
      </div>
    </div>
  );
}

export default App;
