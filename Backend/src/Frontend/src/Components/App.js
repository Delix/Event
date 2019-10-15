import React from 'react';

import { Provider } from  'react-redux';
import  Store  from '../store';
import Nav from './Header/Nav';
import Dom from 'react-dom';
import Event from './Events';
import Form from './Form/Form';
import Home from './Homeevent';
import Quest from "./Form/Questionform"
import Footer from './Footer/Footer';
import Homeevent from './Homeevent';
import Questionform from './Form/Questionform';


export default function App() {
  return (
<Provider store = { Store }>
    <Nav/>
    <div>

      <Questionform/>

    </div>
    <Footer/>
    </Provider>
  );
}

Dom.render(<App/>,document.getElementById('root'));