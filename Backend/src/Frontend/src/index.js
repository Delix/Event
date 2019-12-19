import App from './Components/App';
import React from 'react';
import { Provider } from  'react-redux';
import  Store  from './store';
import Dom from 'react-dom';

export default function Index()
 {
    
        return (
               <Provider store = { Store }>

                <App/>

              </Provider>
              );
    
}

Dom.render(<Index/>,document.getElementById('root'));