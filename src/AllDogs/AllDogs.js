import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './AllDogs.css'

class AllDogs extends Component {
  constructor () {
    super()
    this.state = {
      dogs: []
    }
  }

  componentWillMount () {
    axios
    .get('https://ipaws-back-end.herokuapp.com/api/dogs')
    .then((response) =>
      this.setState({
        dogs: response.data
      })
    )
    .catch(err => console.log(err))
  }

  render () {
    const dogs = this.state.dogs.map((dog, index) => {
      let url = '/dogs/' + dog._id
      let divStyle = {
        backgroundImage: 'url(' + dog.photo + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px'
      }
      return (
        <div className='dog-detail' key={index}>
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
        <img class='main-logo' src='/logo.png' alt='iPaws Logo' />
        <h1>Meet Our Dogs</h1>
        <div className='all-dogs'>
          {dogs}
        </div>
      </div>
    )
  }
}

export default AllDogs
