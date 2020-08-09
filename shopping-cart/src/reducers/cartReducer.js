import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from '../actions/types';

const initialState = {
	items: 0
}

/*
const initialState =  {
	basketNumbers: 0
}

*/

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_PRODUCT_CART:
			return {
				items: ++state.items
			}

		case GET_NUMBERS_CART:
			return {
				...state
			}
		default:
			return state;
	}
}