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
    .get('http://localhost:3001/api/dogs')
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
      return (
        <div className='dog-detail' key={index}>
          <Link to={url}><h3>{dog.name}</h3>
          <img src={dog.photo} alt={dog.name} />
          </Link>
        </div>
      )
    })

    return (
      <div>
        <h1>Meet Our Dogs</h1>
        <div className='all-dogs'>
          {dogs}
        </div>
      </div>
    )
  }
}

export default AllDogs
