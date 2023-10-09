import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsUrl } from '../constants/api';
import { feedStoreActions } from '../types/feed';
import { ProfileOrdersActions } from './profile-orders/actions';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            socketMiddleware(`${wsUrl}/orders/all`, feedStoreActions),
            socketMiddleware(`${wsUrl}/orders`, ProfileOrdersActions, false)
        )
    )
);

export default store;