import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Loading from './components/Loding';
import './i18n';
// creating the store, connecting to the reducer and applying middleware with thunk
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// Wraping App.js into Provider component to make data from the store avaliable throughout all application
ReactDOM.render(
  <div>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </div>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
