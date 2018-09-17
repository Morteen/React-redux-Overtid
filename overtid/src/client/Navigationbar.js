import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
    <nav className="minNav navbar navbar-dark bg-primary">
      <div className="container-fluid">

        <div className="navbar-header">
       
        <Link to="/" className="navbar-brand">Sharkpool</Link>
       
        </div >
        <div > 
              <ul className="navList"> 
                <li> <Link to="/signup" className="navbar-brand">Registrer deg </Link></li>
                <li> <Link to="/login" className="navbar-brand">Login</Link></li>
               
             
               </ul>
               </div>
        
       


    </div>
</nav>
  )
}
