import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {contactRenderer} from './reducers/contactReducer';

export const store=createStore(contactRenderer,applyMiddleware(thunk));