import React, { Component } from 'react'
import View from './View'






class MainView extends Component {
    render() {
        return (
            <div className = "View">
              <div class="card">

       <View  form = {this.props.forms} />
       </div>
     </div>
         
        )
    }
}



export default (MainView)
