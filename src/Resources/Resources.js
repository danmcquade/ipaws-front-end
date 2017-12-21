import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.js'
import './Resources.css'

class Resources extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Logo />
        <div className='resources-container'>
          <h1>Adoption Resources</h1>
          <p>Looking for more information on dog adoption? Here at iPaws we are dedicated to matching potential dog adopters with the perfect dog for them. Please browse through the resources below to find information on the adoption process, about caring for your pet, how get involved with animal advocacy, resources for shelters, finding local adoption events, and much more! If you know of a great resource that seems to be missing from this list, <Link to='/contact'>let us know!</Link></p>
          <div className='adoption-resources-list'>
            <div className='adoption-resources'>
              <p>Help dogs in high-kill shelters. These dogs might not make it to see the next day.<br />
                <li><a href='http://www.citydogsrescuedc.org/about.html#.WjgfT7Q-c6g'><strong>Rescue a dog from a shelter with a high kill rate</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>Adopt a dog directly from one of our partners, PAWS.<br />
                <li><a href='https://www.paws.org/cats-and-dogs/after-you-adopt/'><strong>Adopt from PAWS</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>Having trouble training your new Dog? No worries.<br />
                <li><a href='https://www.thespruce.com/train-a-shelter-or-rescue-dog-1118219'><strong>Learn how to train your Dog Here</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>You can always get involed and do your part to help other dogs in dire need.<br />
                <li><a href='https://www.aspca.org/?pagename=adopt_home'><strong>Get involved, Abused Animals need you</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>Adopt directly from one of our partners, LuckyDog.<br />
                <li><a href='https://www.luckydoganimalrescue.org/adopt'><strong>Adopt from Lucky Dog</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>Keep up and find adoption events in your area.<br />
                <li><a href='https://www.petfinder.com/calendar/'><strong>Pet Adoption Event finder</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>Choosing a particular breed can leave some feeling overwhelmed.<br />
                <li><a href='http://www.animalplanet.com/breed-selector/dog-breeds.html'><strong>Determine what breed suits you.</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>You know that you want to adopt but don't know where to start.<br />
                <li><a href='https://www.petfinder.com/'><strong>Locate local pets up for adoption</strong></a></li></p>
            </div>
            <div className='adoption-resources'>
              <p>See if you would be a good fit to adopt with this quiz.<br />
                <li><a href='http://dogtime.com/quiz/am-i-ready-for-a-dog'><strong>Are you truly ready to Adopt? Take the quiz to find out here</strong></a></li></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resources
