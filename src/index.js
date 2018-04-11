import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registrationReducer from './reducer/registrationReducer'
import './index.css';
import App from './App';

const store = createStore(
    registrationReducer   
);
store.subscribe(() => {
    console.log(store.getState());    
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, document.getElementById('root'));


