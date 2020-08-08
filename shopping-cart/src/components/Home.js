import React from 'react';
import Produto from './Produto';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            produtos : {}
        }
        this.extrairJSON =  this.extrairJSON.bind(this);
    }

    extrairJSON() {
        
        fetch('https://foodsgo.glitch.me/produtos', {method: 'get'})
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.setState(() => ({
                produtos: json
            }));
        })
        .then(() => {
            console.log(this.state.produtos);
        })

    }


    render() {
        return (
            <div>
                {this.extrairJSON()}
            </div>
        );
    }
}

export default Home; 