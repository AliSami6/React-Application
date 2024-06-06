import React from 'react'
import "./Style.css"
import Sami from "./Sami.module.css"
function Style() {
  const ElementOne ={
    color:"white",
    backgroundColor:"green",
    textAlign:"center"
  }  
  return (
    <div>
      <h1 style={ElementOne}>my first style component </h1>
      <h2 className='sami'>I am a developer</h2>
      <h2 className={Sami.i}>I am a Graphic Designer</h2>
    </div>
  );
}

export default Style
