import { get } from '../../utils/api';
import { group } from '../../utils/group';

export const GET_INGREDIENTS_REQUEST = 'INGREDIENTS/GET';
export const GET_INGREDIENTS_SUCCESS = 'INGREDIENTS/SUCCESS';
export const GET_INGREDIENTS_FAIL = 'INGREDIENTS/FAIL';

export const getIngredients = () => (dispath) => {
    dispath({ type: GET_INGREDIENTS_REQUEST });

    get('/ingredients')
        .then(data => {
            const menu = group(data.data, 'type');
            dispath({ type: GET_INGREDIENTS_SUCCESS, payload: menu });
        })
        .catch(error => {
            dispath({ type: GET_INGREDIENTS_FAIL });
        })
};