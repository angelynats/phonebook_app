import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import ReduxThunk from 'redux-thunk';

import contactReducer from './contact/contactReducer';
import sessionReducer from './session/sessionReducer';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

const enhancer = applyMiddleware(ReduxThunk);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
