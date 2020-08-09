import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Produto from './components/Produto';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';

class App extends React.Component {
	constructor(props) {
		super(props);

        this.state = {
            produtos: {},
            loading: true
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
    	return(
            <Provider store={store}>
                <div className="App">
                    <Navbar />
                    <h1>Produtos</h1>
                    {this.state.loading ? <p className="loading">Loading...</p> : <Home produtos={this.state.produtos} />}
                </div>
            </Provider>
        );
    }
}

export default App;