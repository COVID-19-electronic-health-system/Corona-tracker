import React, { Suspense } from 'react';
import theme from 'helpers/Theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from 'helpers/serviceWorker';
import rootReducer from 'redux/reducers/rootReducer';
import App from 'components/App';
import Loading from 'layout/Loding';
import 'helpers/i18n';
// creating the store, connecting to the reducer and applying middleware with thunk
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// Wraping App.jsx into Provider component to make data from the store avaliable throughout all application
// Also wraping the App.jsx with ThemeProvider and CssBaseline to applay Material-UI theme settings
ReactDOM.render(
  <div>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </Suspense>
  </div>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
