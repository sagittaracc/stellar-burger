import React, { useState, useReducer } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import { group } from '../../utils/group';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { IngredientsContext } from '../../services/ingredientsContext';
import { get } from '../../utils/api';

function App() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    const [bun, setBun] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    React.useEffect(() => {
        get('/ingredients')
            .then(data => {
                setLoading(false);
                const menu = group(data.data, 'type');
                setData(menu);

                // MOCK: Выбрали флюоресцентную булку и все соусы и начинки
                setBun(menu.bun[1]);
                setIngredients(menu.sauce.concat(menu.main));
            })
            .catch(error => {
                setError(true);
            })
    }, []);

    return (
        <>
            {
                !loading && !error && data &&
                <>
                    <div className="App-header container-fluid">
                        <div className="container">
                            <AppHeader />
                        </div>
                    </div>
                    <IngredientsContext.Provider value={{ bun, ingredients }}>
                        <div className="pt-10 App-content container flex">
                            <div className="col">
                                <BurgerIngredients data={data} />
                            </div>
                            <div className="col mt-25">
                                <BurgerConstructor />
                            </div>
                        </div>
                    </IngredientsContext.Provider>
                </>
            }
        </>
    );
}

export default App;
