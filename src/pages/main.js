import styles from './main.module.css';
import AppHeader from '../components/app-header/app-header';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIngredients } from '../services/ingredients/actions';
import { ingredientsSelector } from '../services/ingredients/selectors';

const Main = () => {
    const dispatch = useDispatch();
    const [loaded, ] = useSelector(ingredientsSelector);

    useEffect(() => {
        dispatch(getIngredients());
    }, [])

    return (
        <>
            <div className={`${styles.header} container-fluid`}>
                <div className="container">
                    <AppHeader />
                </div>
            </div>
            {
                loaded &&
                <main className={`${styles.content} container`}>
                    <Outlet />
                </main>
            }
        </>
    );
}

export default Main;