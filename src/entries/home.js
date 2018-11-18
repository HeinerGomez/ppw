/* Importaciones */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from '../reducers/index'; 
import { Map as map } from 'immutable';
import { Provider } from 'react-redux';
// establezco el store
const store = createStore(
    reducer, // reducer - redux
    map(), // estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
);
console.log("el estado: ", store.getState());
// obtengo un contenedor de la pagina principal
const homeContainer = document.getElementById('home-container');
// renderizo el contenido 
render(<Provider store={store}>
    <h1>Heiner Gómez</h1>
</Provider>, homeContainer);