import React, { Component } from 'react'

export default class About extends Component {
  state = {
    name :"Sami",
    age :28,
    profession:"content creator"
  }
  render() {
    return (
      <div>
        <h3> {this.state.name} about</h3>
      </div>
    )
  }
}
