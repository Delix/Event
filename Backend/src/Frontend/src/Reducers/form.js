import {GET_NO,POST_SEND} from '../actions/types.js';


const initialState = {
    Form :"",
    persons: [],
    Status:"" 
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_NO:  
        return {
          ...state,
          persons: action.payload
          
          }
          case POST_SEND:
          return {
            ...state,
            status: action.payload
          }
      
        default:
            return state;

    }
}
