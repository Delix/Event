import { GET_CONTACT } from '../actions/types.js';


const initialState = {
    contact :[]
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_CONTACT:  
        return {
          ...state,
          contact:action.payload
        }

        default:
            return {...state};

    }
}