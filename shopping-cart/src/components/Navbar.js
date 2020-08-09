import React, {useEffect} from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';


function Navbar(props) {

    useEffect(() => {
        getNumbers();
    }, []);
    return (
            <header>
                <div className="overlay"></div>
                <nav>
                <h2>Shopping Cart</h2>
                <ul>
                    <Button color="primary">Home</Button>
                    <Button color="primary">Home</Button>
                    <Button color="primary">
                        <ion-icon name="basket-sharp"></ion-icon>
                        Cart
                        (<span>{props.cartProps.items}</span>)
                    </Button>
                </ul>
                </nav>
            </header>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);