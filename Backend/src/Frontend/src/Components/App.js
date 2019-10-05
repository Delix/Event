import React from 'react';
import Dom from 'react-dom';
import { Provider } from  'react-redux';
import  Store  from '../store';
import Nav from './Header/Nav';
import Home from './Homeevent';
import Footer from './Footer/Footer';


export default function App() {
  return (
<Provider store = { Store }>
<Nav/>
    <div>
      <Home/>
    </div>
    <Footer/>
    </Provider>
  );
}
Dom.render(<App/>,document.getElementById('root'));

