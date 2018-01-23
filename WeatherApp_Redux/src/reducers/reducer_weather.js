import { FETCH_WEATHER } from '../actions/index';

export default function ( state = [], action ) {
    switch( action.type ) {
        case FETCH_WEATHER:
            console.log( 'state: ', state );
            return state.concat( [ action.payload.data ] ); // or [action.payload.data, ...state]
    }
    return state;
}