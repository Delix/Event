import { combineReducers }  from 'redux';
import division from './division';
import event from './event';
import contact from './contact';
import form from './form';
import term from './term';
import social from './social';
import auth from './auth'


export default  combineReducers ({

    event,
    division,
    contact,
    form,
    term,
    social,
    auth

});