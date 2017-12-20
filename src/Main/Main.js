import React, { Component } from "react"
import axios from "axios"
import MainSlider from "../Slider/Slider.js"
import Gallery from "../Gallery/Gallery.js"
import "./Main.css"

class Main extends Component {
	constructor() {
		super()
		this.state = {
			dogs: []
		}
	}

	componentWillMount() {
		axios
			.get("http://localhost:3001/api/dogs")
			.then(response => {
				let theDogs = response.data.slice(0, 3)
				this.setState({
					dogs: theDogs
				})
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<img className="main-logo" src="logo.png" alt="iPaws Logo" />
				<MainSlider />
				<div className="main-container">
					<h1>Our mission</h1>
					<p className="mission-statement">
						iPaws is a non-profit, all-volunteer group of animal lovers who
						observed a great need in their community to assist, rescue, foster,
						provide medical care and love for the unwanted, homeless, neglected
						and abused animals we so often see.  We provide screening of all
						adoptive applicants to assure that the suitable companion is placed
						with the appropriate family.
					</p>

					<Gallery dogs={this.state.dogs} />
				</div>
			</div>
		)
	}
}

export default Main
