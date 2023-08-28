import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from '../../pages/forgot-password';
import ResetPassword from '../../pages/reset-password';
import Profile from '../../pages/profile';
import Ingredient from '../../pages/ingredient';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

function App() {
    return (
        <>
            <div className={`${styles.header} container-fluid`}>
                <div className="container">
                    <AppHeader />
                </div>
            </div>
            <main className={`${styles.content} container`}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/forgot-password' element={<ForgotPassword />} />
                        <Route path='/reset-password' element={<ResetPassword />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/ingredients/:id' element={<Ingredient />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default App;