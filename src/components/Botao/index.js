import React from 'react';
 import "./Botao.css"

class Botao extends React.Component {

    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type} className="botao">
                {this.props.children}
            </button>
        )
    }
}

export default Botao;