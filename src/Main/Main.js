import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Nav from '../Nav/Nav.js'
import Slider from '../Slider/Slider.js'
import Gallery from '../Gallery/Gallery.js'
import Footer from '../Footer/Footer.js'


class Main extends Component

constructor(props){
  super(props)

}




componentDidMount() {
  axios
    .get("http://localhost:3001/api/????")
    .then(response =>
      // this.setState({
      //   artworks: response.data
      })
    )
    .catch(err => console.log(err))
}


render(){

  return(
    <div>

      <Nav />
      <Slider />
      <Gallery />
      <Footer />

    </div>
  )}



export default Main
