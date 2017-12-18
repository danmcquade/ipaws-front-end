import React, { Component } from "react"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"

class Gallery extends Component {


render(){
  const dogs = this.state.dogs.map((dog, index) => {
  return (
    <div key={index}>
      <h3>{dog.name}</h3>
      <img src={dog.photo} alt={dog.name} />
    </div>
  )
  dogs.slice(0, 6)

  }
  return(
    <div>
    {dogs}
    </div>
  )
}}


export default Gallery
