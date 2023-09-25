import { TDispatch } from '../../types';
import { TIngredientGroup } from '../../types/ingredient';
import { TIngredientResponse } from '../../types/response';
import { get } from '../../utils/api';
import { group } from '../../utils/group';

export const GET_INGREDIENTS_REQUEST = 'INGREDIENTS/GET';
export const GET_INGREDIENTS_SUCCESS = 'INGREDIENTS/SUCCESS';
export const GET_INGREDIENTS_FAIL = 'INGREDIENTS/FAIL';

export const getIngredients = () => (dispath: TDispatch) => {
    dispath({ type: GET_INGREDIENTS_REQUEST });

    get('/ingredients')
        .then((data: TIngredientResponse) => {
            const menu: TIngredientGroup = group(data.data, 'type');
            dispath({ type: GET_INGREDIENTS_SUCCESS, payload: menu });
        })
        .catch(error => {
            dispath({ type: GET_INGREDIENTS_FAIL });
        })
};