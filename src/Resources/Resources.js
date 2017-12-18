import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Resources.css'

class Resources extends Component {
  render () {
    return (
      <div>
        <h1> Adoption Resources </h1>
        <ul>
          <p className="text-first">Choosing a particular breed can be fun but, also can leave you feeling somewhat overwhelmed. No worries, we have your back.</p> <a href='http://www.animalplanet.com/breed-selector/dog-breeds.html'>Determine what breed suits you</a>
          <p className="text-second">You can always get involed and do your part to help other dogs in dire need.</p> <a href='https://www.aspca.org/?pagename=adopt_home'>Get involved, Abused Animals need you</a>
          <p className="text-third">Awesome! You know that you want a dog, but have no idea where to start looking.</p> <a href='https://www.petfinder.com/'>Locate local pets up for adoption</a>
          <p className="text-forth">Take a personlized quiz for all potential dog adopters. See if you would be a good fit to adopt.</p> <a href='http://dogtime.com/quiz/am-i-ready-for-a-dog'>Are you truly ready to Adopt? Take the quiz to find out here</a>
          <p className="text-fifth">Adopt a dog directly from one of our partners, PAWS.</p> <a href='https://www.paws.org/cats-and-dogs/after-you-adopt/'>Adopt from PAWS</a>
          <p className="text-sixth">All dogs are in need, but these dogs might not make it to see the next day. Please help our dogs in high-kill shelters.</p> <a href='http://www.citydogsrescuedc.org/about.html#.WjgfT7Q-c6g'>Rescue a dog from a shelter with a high kill rate</a>
          <p className="text-seventh">Having trouble training your new Dog? No worries.</p> <a href='https://www.thespruce.com/train-a-shelter-or-rescue-dog-1118219'>Learn how to train your Dog Here</a>
          <p className="text-eigth">Adopt directly from one of our partners, LuckyDog.</p> <a href='https://www.luckydoganimalrescue.org/adopt'>Adopt from Lucky Dog</a>
          <p className="text-ninth">Keep up and find adoption events in your area.</p> <a href='https://www.petfinder.com/calendar/'>Pet Adoption Event finder</a>
        </ul>
      </div>
    )
  }
}

export default Resources
