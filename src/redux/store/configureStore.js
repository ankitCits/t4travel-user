import { createStore, combineReducers } from 'redux';

import userDataReducer from '../reducers/userDataReducer';

import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const rootReducer = combineReducers(

    { pageList: userDataReducer }

);

const configureStore = () => {

    return createStore(rootReducer, applyMiddleware(thunk));

}

export default configureStore;