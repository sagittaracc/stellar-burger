import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsUrl } from '../constants/api';
import { WSStoreActions } from '../types';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            socketMiddleware(`${wsUrl}/orders/all`, WSStoreActions)
        )
    )
);

export default store;