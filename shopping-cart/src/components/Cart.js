import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity';
import { Card, Button } from '@material-ui/core';
import './Cart.css';


function Cart( {cartProps, productQuantity } ) {
	let produtosInCart = [];

	Object.keys(cartProps.produtos).forEach(item => {
		if(cartProps.produtos[item].inCart) {
			produtosInCart.push(cartProps.produtos[item]);
		}
	});

	produtosInCart = produtosInCart.map( (produto, index) => {
		return (
			<Fragment key={index}>
				<Card className="container-cart">
					<img src={produto.imagem} />
					<div className="item-info">
						<h4>{produto.titulo}</h4>
						<h2><small>R$</small>{produto.preco}</h2>
					</div>
					<div className="item-options">
						<div className="quantity-controller">
							<ion-icon name="caret-back" onClick={() => productQuantity('decrease', produto.id)} className="arrow"></ion-icon>
							<p>x{produto.quantidade}</p>
							<ion-icon name="caret-forward" onClick={() => productQuantity('increase', produto.id)} className="arrow"></ion-icon>
						</div>
						<Button color="secondary">Remover</Button>
					</div>
				</Card>
			</Fragment>
		);
	})

	console.log(produtosInCart);
	return (

		<div> 
			<h2 className="total">Total: R$ {cartProps.cartCost}</h2>
			{produtosInCart}
		</div>
	)
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity })(Cart);