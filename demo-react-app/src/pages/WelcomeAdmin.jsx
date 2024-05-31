import React, { Component } from 'react'
import Filter from "./Filter";
export default class WelcomeAdmin extends Component {
  constructor(props){
    super (props)
    this.state={
      YourAge:true,

    }
  }
  render() {
    let sami
    if(this.state.YourAge){
      sami = "I am Sami";
    }else{
      sami = <Filter/>
    }
    return (
      <div>
       {sami}
      </div>
    )
  }
}
