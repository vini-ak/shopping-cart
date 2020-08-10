import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Produto from './components/Produto';
import Cart from './components/Cart';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}


    render() {
    	return(
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/cart' component={Cart} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;