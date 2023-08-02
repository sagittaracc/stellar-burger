import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import { groupData } from './utils/groupData';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {

    const [ingridients, setIngridients] = useState({});

    React.useEffect(() => {
        fetch("https://norma.nomoreparties.space/api/ingredients")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setIngridients(groupData(data.data, 'type'));
            })
    }, []);

    return (
        <>
            <div className="App-header container-fluid">
                <div className="container">
                    <AppHeader />
                </div>
            </div>
            <div className="pt-10 App-content container flex">
                <div className="col">
                    <BurgerIngridients ingridients={ingridients} />
                </div>
                <div className="col">
                    <BurgerConstructor />
                </div>
            </div>
        </>
    );
}

export default App;
