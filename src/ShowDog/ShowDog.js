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
      dog: {},
      inquiry_name: '',
      inquiry_email: '',
      inquiry_phone: '',
      inquiry_location: '',
      inquiry_comment: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post(`http://localhost:3001/api/dogs/newinquiry/${this.state.dog_id}`, {
      name: this.state.inquiry_name,
      email: this.state.inquiry_email,
      phone: this.state.inquiry_phone,
      location: this.state.inquiry_location,
      comment: this.state.inquiry_comment
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
      inquiry_name: e.target.value
    })
    console.log(this.state.inquiry_name)
  }
  handleEmailInput (e) {
    this.setState({
      inquiry_email: e.target.value
    })
    console.log(this.state.inquiry_email)
  }
  handlePhoneInput (e) {
    this.setState({
      inquiry_phone: e.target.value
    })
    console.log(this.state.inquiry_phone)
  }
  handleLocationInput (e) {
    this.setState({
      inquiry_location: e.target.value
    })
    console.log(this.state.inquiry_location)
  }
  handleCommentInput (e) {
    this.setState({
      inquiry_comment: e.target.value
    })
    console.log(this.state.inquiry_comment)
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
          <div className='inquire-form'>
            <h3>Inquire About {this.state.dog.name}</h3>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <table>
                <tr>
                  <td><p><label>Your name</label></p>
                    <p><input type='text' onChange={(e) => this.handleNameInput(e)} placeholder='Name' /></p>
                  </td>
                  <td><p><label>Email address</label></p>
                    <p><input type='text' onChange={(e) => this.handleEmailInput(e)} placeholder='E-mail' /></p>
                  </td>
                </tr>
                <tr>
                  <td><p><label>Phone number</label></p>
                    <p><input type='text' onChange={(e) => this.handlePhoneInput(e)} placeholder='Phone' /></p></td>
                  <td><p><label>Location</label></p>
                    <p><input type='text' onChange={(e) => this.handleLocationInput(e)} placeholder='Location' /></p></td>
                </tr>
                <tr>
                  <td><p><label>Comment</label></p>
                    <p><input type='text' onChange={(e) => this.handleCommentInput(e)} placeholder='Comment' /></p></td>
                  <td><button type='submit'>Inquire</button></td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDog
