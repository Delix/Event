import React, { Component } from 'react';
import Event from './Events';
import MiniDivison from './MiniDivision';
import '../../Styles/CSS/minie_style.scss'

export default class MainEvent extends Component {
    render() {
        return (
            <div>
                <div className = "MEcontainer">
                  <MiniDivison/>
                </div>

                <div className = "MEcontainer1">
                   <Event/>
                </div>
                
            </div>
        )
    }
}
