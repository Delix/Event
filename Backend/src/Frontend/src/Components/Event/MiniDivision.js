import React from 'react';
import { connect } from 'react-redux';
import { getdivevents } from '../../actions/event';
import PropTypes from 'prop-types';




function MiniDivision(props) 
{
    MiniDivision.proptypes = {
        getdivevents:PropTypes.func.isRequired,
        divis:PropTypes.array.isRequired
    }

   const setupevent = (division) =>
    {
      
      
        props.getdivevents(division.id);
     
    }

    return (
        <div className = "row">
            <form>
             { props.divis.map( division =>(
                        <div key={division.id} className = "col">
                               <div   className="card"  onClick = { () => setupevent(division)}  >
                                 
                                  <img   className="card-img-top" src= {division.image} alt="Card image cap"></img>
                                 <div className = "card-body">
                                   
                                   <p className = "card-title">{division.name}</p>

                                </div>
                            
                             </div> 
                             </div>
            
    
                        )) }
            </form>
        </div>
    )
}
const mapStateToprops = state =>({
    divis:state.division.divisions
});

export  default connect (mapStateToprops,{getdivevents})(MiniDivision)
