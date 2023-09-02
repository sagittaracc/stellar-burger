import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from '../../pages/forgot-password';
import ResetPassword from '../../pages/reset-password';
import Profile from '../../pages/profile/profile';
import Ingredient from '../../pages/ingredient';
import Credentials from '../../pages/profile/credentials';
import Constructor from '../../pages/constructor';
import NotFound from '../../pages/not-found';
import Orders from '../../pages/profile/orders';
import { ProtectedRoute } from '../protected-route/protected-route';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Constructor />} />
                    <Route path='login' element={<ProtectedRoute anonymous component={<Login />} />} />
                    <Route path='register' element={<ProtectedRoute anonymous component={<Register />} />} />
                    <Route path='forgot-password' element={<ProtectedRoute anonymous component={<ForgotPassword />} />} />
                    <Route path='reset-password' element={<ProtectedRoute anonymous component={<ResetPassword />} />} />
                    <Route path='profile/*' element={<ProtectedRoute component={<Profile />} />}>
                        <Route index element={<Credentials />} />
                        <Route path='orders' element={<Orders />} />
                    </Route>
                    <Route path='ingredients/:id' element={<Ingredient />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;