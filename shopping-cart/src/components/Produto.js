import React from 'react';
import { Button } from '@material-ui/core';

class Produto extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={this.props.imagem}/>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.descricao}</p>
                <Button color="primary">Adicionar ao carrinho</Button>
                <h4><small>R$</small>{this.props.preco}</h4>
            </div>
        );
    }
}

export default Produto;