import { ADD_PRODUCT_CART, GET_NUMBERS_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_PRODUCT } from '../actions/types';

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
	items: 0
}

*/

export default (state = initialState, action) => {
	let productSelected = '';
	productSelected = {...state.produtos[action.payload]};

	switch(action.type) {
		case ADD_PRODUCT_CART:
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
			++productSelected.quantidade;

			return {
				...state,
				items: ++state.items,
				cartCost: state.cartCost + state.produtos[action.payload].preco,
				produtos: {
					...state.produtos,
					[action.payload]: productSelected
				}
			}

		case DECREASE_QUANTITY:
			
			if(productSelected.quantidade == 0) {
				return {
					...state
				}
			} else if (productSelected.quantidade > 0) {
				--productSelected.quantidade;

				return {
					...state,
					items: --state.items,
					cartCost: state.cartCost - state.produtos[action.payload].preco,
					produtos: {
						...state.produtos,
						[action.payload]: productSelected
					}
				}
			}
			
		case REMOVE_PRODUCT:
			let valorRemovido = productSelected.preco * productSelected.quantidade;
			let quantidadeRemovida = productSelected.quantidade
			productSelected.quantidade = 0;
			productSelected.inCart = false;

			return {
				...state,
				items: state.items - quantidadeRemovida,
				cartCost: state.cartCost - valorRemovido,
				produtos: {
					...state.produtos,
					[action.payload]: productSelected
				}
			}

		default:
			return state;
	}
}