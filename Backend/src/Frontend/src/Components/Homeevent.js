import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './CSS/home_style.scss';
import { connect } from 'react-redux';
import Events from './Events'
import { getdiv }  from '../actions/division';
import { getevents,getdivevents,getevent}  from '../actions/event';

class Homeevent extends Component {
  constructor() {
    super();

  
    this.state = {displayQuestions: false,div:""};
  }

  static proptypes = {
      division:PropTypes.array.isRequired,
      event:PropTypes.array.isRequired,
      divevent:PropTypes.array.isRequired ,

      getdiv: PropTypes.func.isRequired,
      getevents:PropTypes.func.isRequired,
      getevent:PropTypes.func.isRequired,
      getdivevents:PropTypes.func.isRequired
      

  };  
  

  componentDidMount()
  {
   
      this.props.getdiv();
      this.props.getevents();

     
     
  }

 setupevent = (divisions) =>
{
  

  if(this.state.div == divisions.id)
  {
     console.log(this.props.divevents);
  }
  else
  {
  this.props.getdivevents(divisions.id);
  this.setState({
      div : divisions.id
  })
  }
  this.setupdisplay();

}

setupdisplay()
{
  this.setState({
    displayQuestions: !this.state.displayQuestions
        })
}


 




    render() {
          
     
        return (
            <main className="row">
              
              <section>
                <div className = "col" >
                <h1>Select a Division</h1>
                </div>
                <div className="w-100"></div>
        
                <div className = "col">
                   { this.props.divis.map( division =>(
                      
                               <div key={division.id}  className="card"  >
                                 <div onClick = { this.setupevent.bind(this,division)} data-toggle="modal" data-target="#myModal">
                                      <img   className="card-img-top" src= {division.image} alt="Card image cap"></img>
                                     <div className="card-body">
                                          <h2 className="card-title">{ division.name }</h2>
                                    </div> 
                                </div>
                            
                             </div> 
                      
                    
    
                        )) }

                        
                  
                  </div> 
                  </section>

                  <div onClick = {this.setupdisplay.bind(this)} className="modal fade" id="myModal">

    <div className="modal-dialog modal-lg">
      <div className="modal-content">
     
        <div className="modal-header">
     
                
          <h4 className="modal-title" id ="title"></h4>
         
   
          <button type="button"  className="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div className="modal-body" id = "body">
       {
             this.state.displayQuestions &&   
            
          <Events event = {this.props.divevents}/>
        }

        </div>
        
   
        
      </div>
    </div>


  </div>
                </main>
               
            
        )
        
    }
    
}
    
const mapStateToProps = state => ({
    divis: state.division.divisions,
    event: state.event.Events,
    divevents: state.event.DivEvents

});



export default connect(mapStateToProps,{ getdiv,getevents,getdivevents,getevent})(Homeevent);
