import { useSelector } from "react-redux";
import { getIngredientGroupData } from "../services/ingredients/selectors";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import { FC } from 'react';

const Constructor: FC = () => {
    const ingredients = useSelector(getIngredientGroupData);

    return (
        <div className="h-100 pt-10 flex">
            <DndProvider backend={HTML5Backend}>
                <div className="col">
                    <BurgerIngredients data={ingredients} />
                </div>
                <div className="col mt-25">
                    <BurgerConstructor />
                </div>
            </DndProvider>
        </div>
    );
}

export default Constructor;