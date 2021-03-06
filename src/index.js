import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers';
import App from './App';


const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        rootReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
)