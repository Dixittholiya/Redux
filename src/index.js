import  React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react-router
import {BrowserRouter} from "react-router-dom" 
//
// redux
import store from './redux/Index';
import { Provider } from 'react-redux'
//
// redux-persist
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './redux/Index'
//
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
