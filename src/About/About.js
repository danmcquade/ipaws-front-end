import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div>
        <img className='main-logo' src='/logo.png' alt='iPaws Logo' />
        <div className='about-content'>
          <h1>About iPaws</h1>
          <h3>Mission statement</h3>
          <p>iPaws (The International Pet Adoption Web Service) is a non-profit, all volunteer organization that is dedicated to saving unwanted, abandoned, abused and neglected dogs from the streets of Sarajevo, Bosnia and Herzegovina. Animals in our care are spayed or neutered, receive all appropriate veterinary care and treatment, and placed in nurturing foster homes while they await placement in their permanent homes in U.S. We assist dogs in distress without regard to age, breed or ease of placement. Finally, we strive to work with area shelters and other rescue and humane organizations to develop a network of supporters and volunteers in order to create a better world for homeless pets.
          </p>
        </div>
        <div className='partner-links'>
          <a href='https://www.aspca.org/' target='_blank' rel='noopener noreferrer'><img src='/partners/aspca.png' alt='ASPCA Logo' /></a>
          <a href='https://dcpawsrescue.org/' target='_blank' rel='noopener noreferrer'><img src='/partners/dcpaws.png' alt='DC Paws Logo' /></a>
          <a href='https://bestfriends.org/' target='_blank' rel='noopener noreferrer'><img src='/partners/bestfriends.png' alt='Best Friends Animal Society Logo' /></a>
          <p><a href='https://ba.usembassy.gov/' target='_blank' rel='noopener noreferrer'><img className='embassy' src='/partners/embassy.png' alt='US Embassy' /></a></p>
        </div>
      </div>
    )
  }
}

export default About
