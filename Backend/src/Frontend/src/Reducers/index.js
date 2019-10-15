import { combineReducers }  from 'redux';
import division from './division';
import event from './event';
import contact from './contact';
import form from './form';


export default  combineReducers ({

    event,
    division,
    contact,
    form

});