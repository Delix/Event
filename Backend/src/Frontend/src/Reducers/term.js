import { GET_TERM } from '../actions/types.js';


const initialState = {
    terms :[]
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_TERM:  
        return {
          ...state,
          terms:action.payload
        }

        default:
            return {...state};

    }
}