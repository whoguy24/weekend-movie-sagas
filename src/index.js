///////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////
///////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';

/// Import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Import Redux Logger
import logger from 'redux-logger';

// Import Saga Middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Import Axios
import axios from 'axios';

///////////////////////////////////////////////
///// SAGAS LOGIC /////////////////////////////
///////////////////////////////////////////////

// Create Root Saga Generators
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
}

// Fetch Movies from the Database
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

///////////////////////////////////////////////
///// REDUX LOGIC /////////////////////////////
///////////////////////////////////////////////

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

///////////////////////////////////////////////
///// RENDER DOM //////////////////////////////
///////////////////////////////////////////////

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux Store
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Render DOM
ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);