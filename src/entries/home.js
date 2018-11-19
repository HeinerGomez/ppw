/* Importaciones */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from '../reducers/index'; 
import { Map as map } from 'immutable';
import { Provider } from 'react-redux';
import Home from '../pages/containers/home';
// establezco el store
const store = createStore(
    reducer, // reducer - redux
    map(), // estado inicial
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
);
// console.log("el estado: ", store.getState().get('data').get('entities').get('personalInformation').get('lastName'));
// obtengo un contenedor de la pagina principal
const homeContainer = document.getElementById('home-container');
// renderizo el contenido 
render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    homeContainer
);