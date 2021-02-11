import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import contactReducer from './contact/contactReducer';
import sessionReducer from './session/sessionReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  session: sessionReducer,
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
