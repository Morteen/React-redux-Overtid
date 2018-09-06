import React, { Component } from 'react'

export default class Greeting extends Component {
  // axios.post(`http://localhost:5000/addEnBruker?navn='${this.state.navn}'&passord='${this.state.passord}'&'${this.state.username}'`);
  render() {
    return (
      <div className="jumbotron">
        <h1>Hei</h1>
      </div>
    )
  }
}
