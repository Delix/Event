import axios from 'axios';
import {AUTH_FAIL,AUTH_LOGOUT,AUTH_START, AUTH_SUCCESS} from './types'


export const checkAuthtoken = expireTime => 
{

            setTimeout(() => {authlogout();}, expireTime * 1000);

}
export const Autosignup = () => dispatch =>
{
    const token = localStorage.getItem("token")
    if(token === undefined)
    {
        authlogout()
    }
    else
    {
      const expireDate = new Date(localStorage.getItem('ExpireTime'))
        if(expireDate <= new Date())
        {
            authlogout()
        }
        else
        {
          authsuccess(token)
          checkAuthtoken((expireDate - new Date().getTime)/1000)
        }

    }


}
export const authstart = () => dispatch => 
{

    dispatch({

        type:AUTH_START
    });
    
  
}


export const  authsuccess =  token => dispatch => {

    dispatch(
        {
            type:AUTH_SUCCESS,
            payload:token
        }
    )
  
}


export const authfail = error => dispatch => {

    dispatch(
        {
            type:AUTH_FAIL,
            payload:error
        }
    )
    
  
}

export const authlogout = () => dispatch => {
   
    localStorage.removeItem('token');
    localStorage.removeItem('ExpireTime');
    
    dispatch(
        {
          type:AUTH_LOGOUT
        }
    )
  
}


export const authlogin = Login => dispatch =>
 {
    authstart(); 
    axios.post('/api/Contact',login)
    .then(res => {
            const token = res.data.key;
            const ExpireTime = new Date(new Date().getTime() + 3600);
            localStorage.setItem('token',token);
            localStorage.setItem('ExpireTime',ExpireTime);    
            AUTH_SUCCESS(token)
            checkAuthtoken(3600);
    }).catch(err => console.log(err));
}