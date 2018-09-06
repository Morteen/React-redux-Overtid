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
              <ul className="nav navbar-nav navbar-right"> 
                <li> <Link to="/signup" className="navbar-brand">Signup !</Link></li>
               
             
               </ul>
               </div>
        
       


    </div>
</nav>
  )
}
