import { NEW_EVENT, GET_EVENTS,GET_AEVENT,GET_DIVEVENTS } from '../actions/types.js';

const initialState = {
    Events :[],
    DivEvents:[],
    Event : 1,
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_EVENTS:  
        return {
          ...state,
          Events: action.payload
          
        }

        case GET_DIVEVENTS:
            return {
              
                ...state,
                  DivEvents:action.payload
            }
      case GET_AEVENT:
        return {
          ...state,
           Event:action.payload


        }
       
       
      // map(event => event.id === action.id ? Event : event)


       

        default:
            return state;

    }
}
