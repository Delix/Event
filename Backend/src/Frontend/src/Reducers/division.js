import { GET_DIVISIONS } from '../actions/types.js';


const initialState = {
    division :[]
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_DIVISIONS:  
        return {
          ...state,
          division:action.payload
        }

        default:
            return state;

    }
}