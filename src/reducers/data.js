/* Importaciones */
import { fromJS } from "immutable";
import schema from "../schemas/index";
// estado inicial de mi reducer
const initialState = fromJS({
    "entities": schema.result
});
// manejador de acciones de mi reducer
const data = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'SEARCH_SKILL': 
            return state.set('search_skill', action.payload.query);
        default: 
            return state;
    }
};
// exportacion de los datos del estado 
export default data;