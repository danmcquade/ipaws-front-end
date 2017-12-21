import React, { Component } from 'react'
import axios from 'axios'
import Logo from '../Logo/Logo.js'
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
    axios.post(`https://ipaws-back-end.herokuapp.com/api/dogs/newinquiry/${this.state.dog_id}`, {
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
    .get(`https://ipaws-back-end.herokuapp.com/api/dogs/${this.state.dog_id}`)
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

    const editLink = '/edit/' + this.state.dog._id
    const deleteLink = 'https://ipaws-back-end.herokuapp.com/api/dogs/delete/' + this.state.dog._id

    return (
      <div>
        <Logo />
        <div className='dog-details-container'>
          <div className='dog-details-left'>
            <h1>Hi, my name is {this.state.dog.name}!</h1>
            <img src={this.state.dog.photo} alt={this.state.dog.name} />
            <div className='inquiries'>
              {inquiries}
            </div>
            <div className='inquire-form'>
              <h3>Inquire About {this.state.dog.name}</h3>
              <form className='dog' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='couple'>
                  <div>
                    <p><label>Your name</label></p>
                    <p><input type='text' onChange={(e) => this.handleNameInput(e)} placeholder='Name'
                      /></p>
                  </div>
                  <div>
                    <p><label>Email address</label></p>
                    <p><input type='text' onChange={(e) => this.handleEmailInput(e)} placeholder='E-mail' /></p>
                  </div>
                </div>
                <div className='couple'>
                  <div>
                    <p><label>Phone number</label></p>
                    <p><input type='text' onChange={(e) => this.handlePhoneInput(e)} placeholder='Phone' /></p>
                  </div>
                  <div>
                    <p><label>Location</label></p>
                    <p><input type='text' onChange={(e) => this.handleLocationInput(e)} placeholder='Location' /></p>
                  </div>
                </div>
                <div className='comment'>
                  <p><label>Comment</label></p>
                  <div className='couple'>
                    <p><textarea id='xtbox' type='text' onChange={(e) => this.handleCommentInput(e)} /></p>
                  </div>
                  <button type='submit'>Inquire</button>
                </div>
              </form>
            </div>

          </div>
          <div>
            <div className='dog-details-right'>
              <p className='dog-details-header'><strong>{this.state.dog.name}&apos;s Details</strong></p>
              <p><strong>Breed:</strong> {this.state.dog.breed}</p>
              <p><strong>Age:</strong> {this.state.dog.age}</p>
              <p><strong>Sex:</strong> {(this.state.dog.sex === 'M') ? 'Male' : 'Female'}</p>
              <p><strong>Weight:</strong> {this.state.dog.weight}</p>
              <p><strong>Spayed/Neutered:</strong> {(this.state.dog.spayneuter) ? 'Yes' : 'No' }</p>
              <p><strong>Description:</strong></p><p>{this.state.dog.description}</p>
              <div className='detail-links'><strong><Link to={editLink}>Edit Details</Link> | <span className='delete-link'><a href={deleteLink}>Delete</a></span></strong></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDog
