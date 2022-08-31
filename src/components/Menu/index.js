import React from "react";
import style from './Menu.css';

export default function Menu(){
    
    return (
        <aside className="MenuItens">
 
                <a href="#"><li className="menu__home"></li></a>
                <a href="#"><li className="menu__cartas"></li></a>
                <a href="#"><li className="menu__perfil"></li></a>
                <a href="#"><li className="menu__historico"></li></a>
            
        </aside>
    )
}

