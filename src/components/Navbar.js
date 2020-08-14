import React, {useEffect} from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';


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
                    <Link to="/"><Button color="primary">Home</Button></Link>
                    <Link to='/about'><Button color="primary">About</Button></Link>
                    <Link to='/cart'>
                        <Button color="primary">
                            <ion-icon name="basket-sharp"></ion-icon>
                            Cart
                            (<span>{props.cartProps.items}</span>)
                        </Button>
                    </Link>                    
                </ul>
                </nav>
            </header>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);