import React, { Component } from 'react'
import axios from 'axios'
import './AddDog.css'

class AddDog extends Component {
  constructor (props) {
    super(props)
    this.state = {
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

  handleSubmit (e) {
    e.preventDefault()
    axios.post(`http://localhost:3001/api/dogs/new/`, {
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
        <div className='add-dog-form'>
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

export default AddDog
