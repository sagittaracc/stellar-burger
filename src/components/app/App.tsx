import React, { useState } from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import { STELLAR_BURGER_API } from '../../constants/api';
import { group } from '../../utils/group';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    React.useEffect(() => {
        fetch(`${STELLAR_BURGER_API}/ingredients`)
            .then(response => {
                // TODO: Можно лучше: имеет смысл вынести в отдельную функцию проверку res.ok и сам запрос вместе с ним. В компоненте останется, только устанавливать все в state
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error();
                }
            })
            .then(data => {
                setLoading(false);
                setData(group(data.data, 'type'));
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
                    <div className="pt-10 App-content container flex">
                        <div className="col">
                            <BurgerIngredients data={data} />
                        </div>
                        <div className="col">
                            <BurgerConstructor data={data} />
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default App;
