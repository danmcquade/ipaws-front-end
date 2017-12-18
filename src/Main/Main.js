import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Nav from "../Nav/Nav.js"
import Slider from "../Slider/Slider.js"
import Gallery from "../Gallery/Gallery.js"
import Footer from "../Footer/Footer.js"

class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dogs: []
		}
	}

	componentWillMount() {
		axios
			.get("http://localhost:3001/api/dogs")
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
				<Nav />
				<Slider />
				<Gallery {...props} />
				<Footer />
			</div>
		)
	}
}

export default Main
