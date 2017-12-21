import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

class Gallery extends Component {
  render () {
    const dogs = this.props.dogs.map((dog, index) => {
      let url = '/dogs/' + dog._id
      let divStyle = {
        backgroundImage: 'url(' + dog.photo + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        borderRadius: '300px',
        boxShadow: '0px 0px 5px black'
      }
      return (
        <div key={index}>
          <div className='index-image' style={divStyle}>
            <Link to={url} >
              <div className='dog-name'>{dog.name}</div>
            </Link>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h2>Meet some of our dogs!</h2>
        <div className='main-gallery'>
          {dogs}
        </div>
        <h2><Link to='/dogs'>View All Dogs</Link></h2>
      </div>
    )
  }
}

export default Gallery
