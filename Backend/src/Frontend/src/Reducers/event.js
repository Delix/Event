import { NEW_EVENT, GET_EVENTS,GET_AEVENTS } from '../actions/types.js';

const initialState = {
    Events :[],
    DivEvents:[],
    Event :""
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case GET_EVENTS:  
        return {
          ...state,
          Events: action.payload
          
        }

        case GET_AEVENTS:
            return {
                ...state,
                 DivEvents: state.Events.filter(event  =>{
                  return event ?  event.division === action.id :event
                })
            }
     /*  case GET_AEVENT:
           
       
       
      // map(event => event.id === action.id ? Event : event)

*/
        case NEW_EVENT:
            return{
             state   
            }

        default:
            return state;

    }
}
