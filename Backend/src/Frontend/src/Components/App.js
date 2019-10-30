import React from 'react';

import { Provider } from  'react-redux';
import  Store  from '../store';
import Nav from './Header/Nav';
import Dom from 'react-dom';
import Footer from './Footer/Footer';
import Mainform from './Form/Mainform';


export default function App() {
  return (
<Provider store = { Store }>
  <div className = "row">
  <div className = "col">

    <Nav/>
    </div>
    </div>
    <div className = "row">
    <div className = "col">
      <Mainform/>
    </div>
    </div>
    <div className = "row">
    <div className = "col">
    <Footer/>
    </div>
    </div>
    </Provider>
  );
}

Dom.render(<App/>,document.getElementById('root'));