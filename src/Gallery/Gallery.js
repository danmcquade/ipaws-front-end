import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Gallery extends Component {
  render () {
    const dogs = this.props.dogs.map((dog, index) => {
      return (
        <div key={index}>
          <h3>{dog.name}</h3>
          <img src={dog.photo} alt={dog.name} />
        </div>
      )
    })

    return (
      <div>
        <h1>Some of Our Dogs</h1>
        <div className='main-gallery'>
        {dogs}
        </div>
        <h2><Link to='/dogs'>View All Dogs</Link></h2>
      </div>
    )
  }
}

export default Gallery
