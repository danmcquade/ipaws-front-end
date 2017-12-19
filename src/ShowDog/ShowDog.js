import React, { Component } from 'react'
import axios from 'axios'
import './ShowDog.css'
import { Link } from 'react-router-dom'

class ShowDog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dog_id: this.props.match.params.id,
      inquiries: [],
      dog: {}
    }
  }

  componentWillMount () {
    axios
    .get(`http://localhost:3001/api/dogs/${this.state.dog_id}`)
    .then((response) => {
      console.log(response)
      this.setState({
        dog: response.data,
        inquiries: response.data.inquiries
      })
    }
    )
    .catch(err => console.log(err))
  }

  render () {
    const inquiries = this.state.inquiries.map((inquiry, index) => {
      return (
        <div className='inquiry-container' key={index}>
          <p><strong>{inquiry.name}</strong> ({inquiry.email} | {inquiry.phone})</p>
          <p>{inquiry.comment}</p>
        </div>
      )
    })

    let editLink = '/edit/' + this.state.dog._id
    return (
      <div>
        <div className='dog-details-container'>
          <div className='dog-details-left'>
            <h1>Hi, my name is {this.state.dog.name}!</h1>
            <img src={this.state.dog.photo} alt={this.state.dog.name} />
            <div className='inquiries'>
              {inquiries}
            </div>
          </div>
          <div>
            <div className='dog-details-right'>
              <p><strong>Breed:</strong> {this.state.dog.breed}</p>
              <p><strong>Age:</strong> {this.state.dog.age}</p>
              <p><strong>Sex:</strong> {(this.state.dog.sex === 'M') ? 'Male' : 'Female'}</p>
              <p><strong>Weight:</strong> {this.state.dog.weight}</p>
              <p><strong>Spayed/Neutered:</strong> {(this.state.dog.spayneuter) ? 'Yes' : 'No' }</p>
              <p><strong>Description:</strong></p><p>{this.state.dog.description}</p>
              <p><Link to={editLink}>Edit {this.state.dog.name}&apos;s Details</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDog
