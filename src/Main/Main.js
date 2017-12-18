import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav.js'
import MainSlider from '../Slider/Slider.js'
import Gallery from '../Gallery/Gallery.js'
import Footer from '../Footer/Footer.js'

class Main extends Component {
	constructor() {
		super()
		this.state = {
		dogs: []
		}
	}

	componentWillMount() {
		axios
		.get('http://localhost:3001/api/dogs')
		.then(response =>
			this.setState({
				dogs: response.data
			})
		)
		.catch(err => console.log(err))
	}

	render() {
	return (
	<div>
		<MainSlider />
		<Gallery dogs={this.state.dogs}/>
	</div>
	)
	}
	}

export default Main
