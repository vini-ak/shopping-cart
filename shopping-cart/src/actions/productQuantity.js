import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

export const productQuantity = (action, produtoId) => {
	return(dispatch) => {
		console.log("Produto ID: ", produtoId);
		console.log("Ação: ", action);

		dispatch({
			type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
			payload: produtoId
		})
	}
}