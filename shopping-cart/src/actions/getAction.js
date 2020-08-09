import { GET_NUMBERS_CART } from './types';

export const getNumbers = () => {
	return (dispatch) => {
		console.log("Getting all Basket Numbers");
		dispatch({
			type: GET_NUMBERS_CART
		});
	}
}