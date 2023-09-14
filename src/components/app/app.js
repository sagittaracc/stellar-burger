import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientsSelector } from '../../services/ingredients/selectors';
import { useEffect } from 'react';
import { getIngredients } from '../../services/ingredients/actions';
import Logout from '../../pages/profile/logout';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;
    const dispatch = useDispatch();
    const [loaded,] = useSelector(ingredientsSelector);

    useEffect(() => {
        dispatch(getIngredients());
    }, [])

    return (
        <>
            {
                loaded &&
                <Routes location={background || location}>
                    <Route path='/' element={<Main />}>
                        <Route index element={<Constructor />} />
                        <Route path='login' element={<ProtectedRoute anonymous component={<Login />} />} />
                        <Route path='register' element={<ProtectedRoute anonymous component={<Register />} />} />
                        <Route path='forgot-password' element={<ProtectedRoute anonymous component={<ForgotPassword />} />} />
                        <Route path='reset-password' element={<ProtectedRoute anonymous component={<ResetPassword />} />} />
                        <Route path='profile/*' element={<ProtectedRoute component={<Profile />} />}>
                            <Route index element={<Credentials />} />
                            <Route path='orders' element={<Orders />} />
                            <Route path='logout' element={<Logout />} />
                        </Route>
                        <Route path='ingredients/:id' element={<Ingredient />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            }
            {
                background && loaded &&
                <Routes>
                    <Route path='/ingredients/:id' element={
                        <Modal header="Детали ингредиента" onClose={() => navigate(-1)}>
                            <Ingredient />
                        </Modal>
                    } />
                </Routes>
            }
        </>
    );
}

export default App;