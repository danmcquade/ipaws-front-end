import React, { Component } from 'react'

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
        <h1>Gallery</h1>
        {dogs}
      </div>
    )
  }
}

export default Gallery
