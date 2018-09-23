import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {loggUt} from '../client/actions/authActions'

class Navigationbar extends Component {

constructor(props){
  super(props);
  this.onClick=this.onClick.bind(this);
}

onClick(e){
  e.preventDefault();
 this.props.loggUt()

}

  render(){
    
    const {isAuthenticated}=this.props.auth;


  

    const userLinks=( <ul className="navList"> 
    <li> <a href="#" onClick={this.onClick} className="navbar-brand">Logg ut</a></li>
      </ul>);


    const guestLinks=( <ul className="navList"> 
    <li> <Link to="/signup" className="navbar-brand">Registrer deg </Link></li>
    <li> <Link to="/login" className="navbar-brand">Login</Link></li>
   
 
   </ul>);
  return (
    <nav className="minNav navbar navbar-dark bg-primary">
      <div className="container-fluid">

        <div className="navbar-header">
       
        <Link to="/" className="navbar-brand">Sharkpool</Link>
       
        </div >
        <div > 
            {isAuthenticated ? userLinks : guestLinks}
               </div>
        
       


    </div>
</nav>
  )
} 
}
Navigationbar.propTypes={
  auth:propTypes.object,
  loggUt:propTypes.func
}
 function mapStateToProps(state){
   return{
     auth:state.auth
   }

 }
 export default connect( mapStateToProps,{loggUt})(Navigationbar)
