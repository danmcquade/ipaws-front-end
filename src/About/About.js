import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className='about-content'>
        <img class='main-logo' src='logo.png' alt='iPaws Logo' />
        <h1>About iPaws</h1>
        <h3>Mission statement</h3>
        <p>iPaws (International Pet Adoption Web Service) is a non-profit, all volunteer organization that is dedicated to saving unwanted, abandoned, abused and neglected dogs from the streets of Sarajevo, Bosnia and Herzegovina. Animals in our care are spayed or neutered, receive all appropriate veterinary care and treatment, and placed in nurturing foster homes while they await placement in their permanent homes in U.S. We assist dogs in distress without regard to age, breed or ease of placement. Finally, we strive to work with area shelters and other rescue and humane organizations to develop a network of supporters and volunteers in order to create a better world for homeless pets.
        </p>
      </div>
    )
  }
}

export default About
