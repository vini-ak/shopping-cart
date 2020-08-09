import { ADD_PRODUCT_CART } from './types';

export const addCart = () => {
	return (dispatch) => {
		console.log("Adding to basket");
		dispatch({
			type: ADD_PRODUCT_CART
		});
	}
}