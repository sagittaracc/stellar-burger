import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import { groupData } from './utils/groupData';

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
            <div className="container">
                <BurgerIngridients ingridients={ingridients} />
            </div>
        </>
    );
}

export default App;
