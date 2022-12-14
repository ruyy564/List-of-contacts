import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
