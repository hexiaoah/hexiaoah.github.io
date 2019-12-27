import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Route from './route'
import './index.css';
import store from './store'

ReactDOM.render(
    <Provider store = {store}>
        <Route></Route>
    </Provider>, 
    document.getElementById('root'));

