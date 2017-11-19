import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { requestReducer } from './reducers/reqReducer'
import { shareReducer } from './reducers/SharesReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    requestReducer: requestReducer,
    shares: shareReducer
})

const middleware = compose(
    applyMiddleware(thunk, logger())
);

const store = createStore(
    rootReducer,
    middleware
);

export default store;
