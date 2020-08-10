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
            produtos: {},
            loading: true
        };

        this.produtos = this.produtos.bind(this);
        console.log(props);
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

    componentDidMount() {
        fetch('https://foodsgo.glitch.me/produtos',  {method: 'get'})
        .then(res => res.json())
        .then((data) => {
            this.setState({ produtos: data, loading: false})
            console.log(this.state.produtos)
        })
        .catch(console.log('esperando avioes'));
    }

    render() {
        return (
            <div className="container"> 
                {this.state.loading ? <p className="loading">Loading...</p> : this.state.produtos.map((produto) => (
                    <Produto titulo ={produto.titulo} preco={produto.preco} imagem={produto.imagem} onClick={this.props.addCart} />
                ))}
            </div>
        );
    }
}

export default connect(null, { addCart })(Home); 