import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import { Provider } from "react-redux";
import { moviesReducer } from "./redux/listMovies/reducers.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import * as bootstrap from 'bootstrap'; */
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(moviesReducer, applyMiddleware(thunk)) 

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}> 
        <App />
         </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);