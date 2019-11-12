import {GET_SOCIAL} from '../actions/types.js';


const initialState = {
    socials :[],
   
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_SOCIAL:  
        return {
          ...state,
          socials: action.payload
          
          }
        default:
            return state;

    }
}
