import React, { Component } from 'react';
import Greeting from'./client/Greeting' ;
import Navigationbar from'./client/Navigationbar'; 
import './App.css';
import FlashMessageList from './client/component/flash/FlashMessageList';
import FlashMessages from './redurcers/FlashMessages';

class App extends Component {
  render() {
    return (
      <div className="App">
     
       <Navigationbar/>
       <div className="AppContainer">
       <FlashMessageList/>
       {this.props.children}
       </div>
       
      </div>
    );
  }
}

export default App;
