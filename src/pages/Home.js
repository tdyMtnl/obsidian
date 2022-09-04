
import Botao from '../components/Botao';
import Menu from '../components/Menu';


const Home = () => {

    
  
    return (
          <div className="AppStyle">
            <div className="Principal">
              <a href='/cartas'><Botao>Cartas</Botao></a>
              <a href='/personagens'><Botao>Personagens</Botao></a>
            </div>
            <div className="Menu">
              <Menu/>
          </div>
        </div>
  
    );
  }
  
  export default Home;
  