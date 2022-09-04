import React from "react";
import './Menu.css';

export default function Menu(){
    
    return (
        <aside className="MenuItens">
 
                <a href="/"><li className="menu__home"><img src="/imagens/house.svg"></img></li></a>
                <a href="/cartas"><li className="menu__cartas"><img src="/imagens/archive.svg"></img></li></a>
                <a href="#"><li className="menu__perfil"><img src="/imagens/clock.svg"></img></li></a>
                <a href="/personagens"><li className="menu__historico"><img src="/imagens/person.svg"></img></li></a>
            
        </aside>
    )
}

