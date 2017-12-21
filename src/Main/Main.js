import React, { Component } from 'react'
import axios from 'axios'
import Logo from '../Logo/Logo.js'
import MainSlider from '../Slider/Slider.js'
import Gallery from '../Gallery/Gallery.js'
import './Main.css'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      dogs: []
    }
  }

  componentWillMount () {
    axios
    .get('https://ipaws-back-end.herokuapp.com/api/dogs')
    .then(response => {
      let theDogs = response.data.slice(0, 3)
      this.setState({
        dogs: theDogs
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <Logo />
        <MainSlider />
        <div className='main-container'>
          <h1>Welcome to iPaws</h1>
          <p className='mission-statement'>The International Pet Adoption Web Service (iPaws) is a non-profit, all-volunteer group of animal lovers who observed a great need in their community to assist, rescue, foster, provide medical care and love for the unwanted, homeless, neglected and abused animals we so often see.  We provide screening of all adoptive applicants to assure that the suitable companion is placed with the appropriate family.</p>
          <Gallery dogs={this.state.dogs} />
        </div>
      </div>
    )
  }
}

export default Main
