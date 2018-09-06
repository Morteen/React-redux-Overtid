import React, { Component } from 'react';
import Greeting from'./client/Greeting' ;
import Navigationbar from'./client/Navigationbar'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigationbar/>
       {this.props.children}
      </div>
    );
  }
}

export default App;
