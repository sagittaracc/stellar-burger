import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsUrl } from '../constants/api';
import { wsFeedActions } from './feed/actions';
import { wsProfileOrdersActions } from './profile-orders/actions';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            socketMiddleware(`${wsUrl}/orders/all`, wsFeedActions),
            socketMiddleware(`${wsUrl}/orders`, wsProfileOrdersActions, false)
        )
    )
);

export default store;