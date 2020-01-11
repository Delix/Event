import {AUTH_FAIL,AUTH_LOGOUT,AUTH_START, AUTH_SUCCESS} from '../actions/types'
import {updateObject} from '../Utili'

const initialState = {
  error:null,
  token: null,
  loading:false
}

export default function(state = initialState,action ){

    switch(action.type)
    {
        case AUTH_START:  
        return updateObject(
          state,{
            loading:true
          })

          case AUTH_SUCCESS:  
          return updateObject(
            state,{
              token:action.payload,
              loading:false
            })
            case AUTH_LOGOUT:  
            return updateObject(
              state,{
                token:null
              })
              case AUTH_FAIL:  
              return updateObject(
                state,{
                  error:action.payload,
                  loading:false
                })

        default:
            return {...state};

    }
}