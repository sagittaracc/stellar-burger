import styles from './main.module.css';
import AppHeader from '../components/app-header/app-header';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getIngredients } from '../services/ingredients/actions';

const Main = () => {
    const dispatch = useDispatch();

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
            <main className={`${styles.content} container`}>
                <Outlet />
            </main>
        </>
    );
}

export default Main;