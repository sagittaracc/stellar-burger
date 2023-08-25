import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { getIngredients } from '../../services/ingredients/actions';
import { ingredientsData } from '../../services/ingredients/selectors';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App()
{
    const [hasData, data] = useSelector(ingredientsData);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(getIngredients());
    }, [])

    return (
        <>
            {
                hasData &&
                <>
                    <div className={`${styles.header} container-fluid`}>
                        <div className="container">
                            <AppHeader />
                        </div>
                    </div>
                    <main className={`${styles.content} pt-10 container flex`}>
                        <DndProvider backend={HTML5Backend}>
                            <div className="col">
                                <BurgerIngredients data={data} />
                            </div>
                            <div className="col mt-25">
                                <BurgerConstructor />
                            </div>
                        </DndProvider>
                    </main>
                </>
            }
        </>
    );
}

export default App;