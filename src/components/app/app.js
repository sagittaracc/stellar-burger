import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from '../../pages/forgot-password';
import ResetPassword from '../../pages/reset-password';
import Profile from '../../pages/profile/profile';
import Ingredient from '../../pages/ingredient';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { Link } from 'react-router-dom';
import Credentials from '../../pages/profile/credentials';

function App() {
    return (
        <BrowserRouter>
            <div className={`${styles.header} container-fluid`}>
                <div className="container">
                    <AppHeader />
                </div>
            </div>
            <main className={`${styles.content} container`}>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/reset-password' element={<ResetPassword />} />
                    <Route path='/profile/*' element={<Profile />}>
                        <Route path='' element={<Credentials />} />
                        <Route path='orders' element={<p>Orders</p>} />
                    </Route>
                    <Route path='/ingredients/:id' element={<Ingredient />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;