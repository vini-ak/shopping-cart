import React from 'react';
import './Home.css';
import Produto from './Produto';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : 0,
            preco : 0,
        };

        this.addToCart = this.addToCart.bind(this);
        this.produtos = this.produtos.bind(this);
        console.log(props);
    }


    addToCart() {
        this.setState((state) => ({
            items : ++state.items
        }))
    }

    produtos() {
        try {
            //this.props.produtos.map((produto) => (
             //   <Produto titulo={produto.titulo} imagem={produto.imagem} preco={produto.preco} descricao={produto.descricao} />
            //));
            console.log(this.props.produtos);
        } catch(e) {
            console.log('espeando o response...');
        }
    }

    render() {
        return (
            <div className="container"> 
                {this.props.produtos.map((produto) => (
                    <Produto titulo ={produto.titulo} preco={produto.preco} imagem={produto.imagem} onClick={this.props.addCart} />
                ))}
            </div>
        );
    }
}

export default connect(null, { addCart })(Home); 