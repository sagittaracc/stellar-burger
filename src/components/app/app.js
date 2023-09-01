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
import ProtectedRoute from '../protected-route/protected-route';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Constructor />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='forgot-password' element={<ForgotPassword />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                    <Route path='profile/*' element={<ProtectedRoute><Profile /></ProtectedRoute>}>
                        <Route index element={<ProtectedRoute><Credentials /></ProtectedRoute>} />
                        <Route path='orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                    </Route>
                    <Route path='ingredients/:id' element={<Ingredient />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;