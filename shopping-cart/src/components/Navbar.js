import React from 'react';

function Navbar() {
    return (
            <header>
                <div className="overlay"></div>
                <nav>
                <h2>Shopping Cart</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#" className="basket-sharp">
                    <ion-icon name="basket-sharp"></ion-icon>
                    Cart
                    </a></li>
                </ul>
                </nav>
            </header>
    );
}

export default Navbar;