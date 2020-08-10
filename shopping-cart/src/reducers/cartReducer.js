import { ADD_PRODUCT_CART, GET_NUMBERS_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/types';

const initialState = {
	items: 0,
	cartCost: 0,
	produtos: {}
}

fetch('https://foodsgo.glitch.me/produtos')
.then(res => res.json())
.then(data => {
	data.map(produto => {
		produto['inCart'] = false;
		produto['quantidade'] = 0;
		initialState.produtos[produto.id] = produto;
	})
	console.log(initialState.produtos);

})


/*
const initialState =  {
	basketNumbers: 0
}

*/

export default (state = initialState, action) => {
	let productSelected = '';

	switch(action.type) {
		case ADD_PRODUCT_CART:
			productSelected = { ...state.produtos[action.payload]}
			console.log(productSelected.titulo);
			productSelected.quantidade += 1;
			productSelected.inCart = true;
			return {
				...state,
				items: ++state.items,
				cartCost: state.cartCost + state.produtos[action.payload].preco,
				produtos: {
					...state.produtos,
					[action.payload]: productSelected
				}
			}

		case GET_NUMBERS_CART:
			return {
				...state
			}

		case INCREASE_QUANTITY:
			productSelected = {...state.produtos[action.payload]};
			++productSelected.quantidade;

			return {
				...state,
				cartCost: state.cartCost + state.produtos[action.payload].preco,
				produtos: {
					...state.produtos,
					[action.payload]: productSelected
				}
			}

		case DECREASE_QUANTITY:
			return {
				...state
			}
		default:
			return state;
	}
}