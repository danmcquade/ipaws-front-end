import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Resources.css'




class Resources extends Component {
  render(){
 return (
        <div>
        <h1> Adoption Resources </h1>
        <ul>
          <li><div><p className="text-sixth"><strong>Please help our dogs in high-kill shelters. These dogs might not make it to see the next day.</strong></p> <a href='http://www.citydogsrescuedc.org/about.html#.WjgfT7Q-c6g'><h4>Rescue a dog from a shelter with a high kill rate</h4></a></div></li>
          <li><div><p className="text-fifth"><strong>Adopt a dog directly from one of our partners, PAWS.</strong></p> <a href='https://www.paws.org/cats-and-dogs/after-you-adopt/'><h4>Adopt from PAWS</h4></a></div></li>
          <li><div><p className="text-seventh"><strong>Having trouble training your new Dog? No worries.</strong></p> <a href='https://www.thespruce.com/train-a-shelter-or-rescue-dog-1118219'><h4>Learn how to train your Dog Here</h4></a></div></li>
          <li><div><p className="text-second"><strong>You can always get involed and do your part to help other dogs in dire need.</strong></p> <a href='https://www.aspca.org/?pagename=adopt_home'><h4>Get involved, Abused Animals need you</h4></a></div></li>
          <li><div><p className="text-eigth"><strong>Adopt directly from one of our partners, LuckyDog.</strong></p> <a href='https://www.luckydoganimalrescue.org/adopt'><h4>Adopt from Lucky Dog</h4></a></div></li>
          <li><div><p className="text-ninth"><strong>Keep up and find adoption events in your area.</strong></p> <a href='https://www.petfinder.com/calendar/'><h4>Pet Adoption Event finder</h4></a></div></li>
          <li><div><p className="text-first"><strong>Choosing a particular breed can be fun but, also can leave some feeling overwhelmed.</strong></p> <a href='http://www.animalplanet.com/breed-selector/dog-breeds.html'><h4>Determine what breed suits you.</h4></a></div></li>
          <li><div><p className="text-third"><strong>Awesome! You know that you want to adopt a dog, but have no idea where to start looking.</strong></p> <a href='https://www.petfinder.com/'><h4>Locate local pets up for adoption</h4></a></div></li>
          <li><div><p className="text-forth"><strong>Take a personlized quiz for all potential dog adopters. See if you would be a good fit to adopt.</strong></p> <a href='http://dogtime.com/quiz/am-i-ready-for-a-dog'><h4>Are you truly ready to Adopt? Take the quiz to find out here</h4></a></div></li>

        </ul>
      </div>
    )
  }
}

export default Resources
