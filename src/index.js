import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App/App';
import apiInstance from './utils/apiInstance/apiInstance';
import setInterceptorsToApiInstance from './utils/apiInstance/setInterceptorsToApiInstance';

setInterceptorsToApiInstance(apiInstance);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/phonebook_app">
      <Route component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
