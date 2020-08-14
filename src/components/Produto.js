import React from 'react';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';

class Produto extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card className="product">
                <img src={this.props.imagem}/>
                <h3>{this.props.titulo}</h3>
                <div>
                    <h2><small>R$</small>{this.props.preco}</h2>
                    <Button onClick={() => this.props.onClick(this.props.id)} variant="contained" color="primary" className="add-to-cart">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Adicionar ao carrinho
                    </Button>
                </div>
                
            </Card>
        );
    }
}

export default Produto;