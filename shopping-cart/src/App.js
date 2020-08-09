import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Produto from './components/Produto';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

	}

    state = {
        produtos : {},
        loading: true
    };

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
    	return(
    		<div className="App">
    			<Navbar />
                <h1>Produtos</h1>
                {this.state.loading ? <p>Loading...</p> : this.state.produtos.map((produto) => (
                    <Produto titulo ={produto.titulo} descricao={produto.descricao} preco={produto.preco} imagem={produto.imagem} />
                ))}
    			
    		</div>
    	);
    }
}

export default App;