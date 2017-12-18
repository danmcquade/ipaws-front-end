import React, { Component } from 'react'
import axios from 'axios'
import './ShowDog.css'

class ShowDog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dog_id: this.props.match.params.id,
      dog: {}
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
    )
    .catch(err => console.log(err))
  }
  render () {
    return (
      <div>
        <h1>Hi, my name is {this.state.dog.name}!</h1>
        <img src={this.state.dog.photo} />
      </div>
    )
  }
}

export default ShowDog
