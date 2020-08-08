import React from 'react';
import { Button } from '@material-ui/core';

function Navbar() {
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
                    </Button>
                </ul>
                </nav>
            </header>
    );
}

export default Navbar;