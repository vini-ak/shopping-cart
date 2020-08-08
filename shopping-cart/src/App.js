import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			produtos : {}
		};

		this.extrairJSON = this.extrairJSON.bind(this);
	}

	extrairJSON() {
        fetch('http://localhost:3001/produtos')
        .then(res => res.json(), {method: 'get'})
        .then((data) => {
            this.setState({ produtos: data});
        })
        .catch(console.log)
    }

    render() {
    	this.extrairJSON();
    	return(
    		<div className="App">
    			<Navbar />
    			<Home produtos={this.state.produtos} />
    		</div>
    		
    	);
    }
}

export default App;