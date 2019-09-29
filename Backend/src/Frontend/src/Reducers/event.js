import { NEW_EVENT, GET_EVENTS } from '../actions/types.js';

const initialState = {
    events :[]
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_EVENTS:  
        return {
          ...state,
          events:action.payload
        }
        case NEW_EVENT:
            return{
             state   
            }

        default:
            return state;

    }
}
