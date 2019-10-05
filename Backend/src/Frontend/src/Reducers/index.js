import { combineReducers }  from 'redux';
import division from './division.js';
import event from './event.js';
import contact from './contact.js';


export default  combineReducers ({

    event,
    division,
    contact

});