import React from 'react';
import { Provider } from  'react-redux';
import  Store  from '../store';
import Nav from './Header/Nav';
import Home from './Homeevent';


function App() {
  return (
<Provider store = { Store }>
    <div className="App">
      <Nav/>
      <Home/>

    </div>
    </Provider>
  );
}

export default App;
