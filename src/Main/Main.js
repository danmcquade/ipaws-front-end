import React, { Component } from 'react'
import axios from 'axios'
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
    .get('http://localhost:3001/api/dogs')
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
        <img className='main-logo' src='logo.png' alt='iPaws Logo' />
        <MainSlider />
        <div className='main-container'>
          <h1>Our mission</h1>
          <p className='mission-statement'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo ante a nibh tincidunt, id condimentum risus cursus. Nam blandit nibh massa, sit amet imperdiet felis imperdiet nec. Phasellus vulputate turpis vel tellus placerat, at fringilla quam rhoncus. Vestibulum posuere, velit eget laoreet dignissim, ante nisl malesuada mi, hendrerit dignissim arcu elit at neque. Mauris luctus metus diam, ut pulvinar libero venenatis sit amet. Nunc ac dolor eget mi viverra placerat gravida non magna. In dignissim massa eu orci consequat, eu gravida odio accumsan. Morbi fringilla eleifend ipsum non eleifend. Quisque vestibulum urna vulputate massa laoreet porta. Vestibulum tempus, felis nec suscipit maximus, tortor lorem vestibulum quam, et pharetra neque eros vel risus.</p>

          <Gallery dogs={this.state.dogs} />
        </div>
      </div>
    )
  }
}

export default Main
