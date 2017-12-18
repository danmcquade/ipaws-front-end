import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resources extends Component {
  render () {
    return (
      <div>
        <h1> Adoption Resources </h1>
        <ul>
          <li> <a href='http://www.animalplanet.com/breed-selector/dog-breeds.html'>Determine what breed suits you</a></li>
          <li> <a href='https://www.aspca.org/?pagename=adopt_home'>Get involved, Abused Animals need you</a></li>
          <li> <a href='https://www.petfinder.com/'>Locate local pets up for adoption</a></li>
          <li> <a href='http://dogtime.com/quiz/am-i-ready-for-a-dog'>Are you truly ready to Adopt? Take the quiz to find out here</a></li>
          <li> <a href='https://www.paws.org/cats-and-dogs/after-you-adopt/'>Adopt from PAWS</a></li>
          <li> <a href='http://www.citydogsrescuedc.org/about.html#.WjgfT7Q-c6g'>Rescue a dog from a high-kill shelter</a></li>
          <li> <a href='https://www.thespruce.com/train-a-shelter-or-rescue-dog-1118219'>Learn how to train your Dog Here</a></li>
          <li> <a href='https://www.luckydoganimalrescue.org/adopt'>Adopt from Lucky Dog</a></li>
          <li> <a href='https://www.petfinder.com/calendar/'>Pet Adoption Event finder</a></li>
        </ul>
      </div>
    )
  }
}

export default Resources
