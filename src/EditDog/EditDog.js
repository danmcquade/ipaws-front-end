import React, { Component } from 'react'
import axios from 'axios'
import './EditDog.css'

class EditDog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dog_id: this.props.match.params.id,
      dog: {},
      dog_name: '',
      dog_photo: '',
      dog_breed: '',
      dog_sex: '',
      dog_age: 0,
      dog_weight: 0,
      dog_spayneuter: false,
      dog_description: ''
    }
  }

  componentWillMount () {
    axios
    .get(`http://localhost:3001/api/dogs/${this.state.dog_id}`)
    .then((response) => {
      console.log(response)
      this.setState({
        dog: response.data
      })
    }
  ).then(() => {
    this.setState({
      dog_name: this.state.dog.name,
      dog_photo: this.state.dog.photo,
      dog_breed: this.state.dog.breed,
      dog_sex: this.state.dog.sex,
      dog_age: this.state.dog.age,
      dog_weight: this.state.dog.weight,
      dog_spayneuter: this.state.dog.spayneuter,
      dog_description: this.state.dog.description
    })
  })
    .catch(err => console.log(err))
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post(`http://localhost:3001/api/dogs/update/${this.state.dog_id}`, {
      name: this.state.dog_name,
      photo: this.state.dog_photo,
      breed: this.state.dog_breed,
      weight: this.state.dog_weight,
      spayneuter: this.state.dog_spayneuter,
      sex: this.state.dog_sex,
      age: this.state.dog_age,
      description: this.state.dog_description
    })
    .then((response) => {
      console.log(response)
      window.location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleNameInput (e) {
    this.setState({
      dog_name: e.target.value
    })
    console.log(this.state.dog_name)
  }
  handlePhotoInput (e) {
    this.setState({
      dog_photo: e.target.value
    })
    console.log(this.state.dog_photo)
  }
  handleBreedInput (e) {
    this.setState({
      dog_breed: e.target.value
    })
    console.log(this.state.dog_breed)
  }
  handleAgeInput (e) {
    this.setState({
      dog_age: e.target.value
    })
    console.log(this.state.dog_age)
  }
  handleSexInput (e) {
    this.setState({
      dog_sex: e.target.value
    })
    console.log(this.state.dog_sex)
  }
  handleWeightInput (e) {
    this.setState({
      dog_weight: e.target.value
    })
    console.log(this.state.dog_weight)
  }
  handleFixedInput (e) {
    this.setState({
      dog_spayneuter: e.target.value
    })
    console.log(this.state.dog_spayneuter)
  }
  handleDescriptionInput (e) {
    this.setState({
      dog_description: e.target.value
    })
    console.log(this.state.dog_description)
  }

  render () {
    return (
      <div>
        <div className='dog-details-container'>
          <div className='dog-details-left'>
            <h1>Editing {this.state.dog.name}</h1>
            <img src={this.state.dog.photo} alt={this.state.dog.name} />
          </div>
          <div>
            <div className='dog-details-right'>
              <p><strong>Breed:</strong> {this.state.dog.breed}</p>
              <p><strong>Age:</strong> {this.state.dog.age}</p>
              <p><strong>Sex:</strong> {(this.state.dog.sex === 'M') ? 'Male' : 'Female'}</p>
              <p><strong>Weight:</strong> {this.state.dog.weight}</p>
              <p><strong>Spayed/Neutered:</strong> {(this.state.dog.spayneuter) ? 'Yes' : 'No' }</p>
              <p><strong>Description:</strong></p><p>{this.state.dog.description}</p>
            </div>
          </div>
        </div>
        <div className='edit-dog-form'>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>Name </label>
            <p><input type='text' onChange={(e) => this.handleNameInput(e)} value={this.state.dog_name} /></p>
            <label>Photo </label>
            <p><input type='text' onChange={(e) => this.handlePhotoInput(e)} value={this.state.dog_photo} /></p>
            <label>Breed </label>
            <p><input type='text' onChange={(e) => this.handleBreedInput(e)} value={this.state.dog_breed} /></p>
            <label>Age </label>
            <p><input type='text' onChange={(e) => this.handleAgeInput(e)} value={this.state.dog_age} /></p>
            <label>Sex </label>
            <p><input type='text' onChange={(e) => this.handleSexInput(e)} value={this.state.dog_sex} /></p>
            <label>Weight </label>
            <p><input type='text' onChange={(e) => this.handleWeightInput(e)} value={this.state.dog_weight} /></p>
            <label>Spayed/Neutered </label>
            <p><input type='text' onChange={(e) => this.handleFixedInput(e)} value={this.state.dog_spayneuter} /></p>
            <label>Description: </label>
            <p><input type='text' onChange={(e) => this.handleDescriptionInput(e)} value={this.state.dog_description} /></p>
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

export default EditDog
