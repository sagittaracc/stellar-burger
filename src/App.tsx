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
        <div className="App" style={{width: "80%", margin: "auto"}}>
            <AppHeader />
            <BurgerIngridients ingridients={ingridients} />
        </div>
    );
}

export default App;
