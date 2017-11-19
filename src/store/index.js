import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import { requestReducer } from './reducers/reqReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    requestReducer: requestReducer
})

const middleware = compose(
    applyMiddleware(thunk, logger())
);

const store = createStore(
    rootReducer,
    middleware
);

export default store;