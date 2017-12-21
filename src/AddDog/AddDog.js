import React, { Component } from "react"
import axios from "axios"
import "./AddDog.css"

class AddDog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dog_name: "",
			dog_photo: "",
			dog_breed: "",
			dog_sex: "",
			dog_age: 0,
			dog_weight: 0,
			dog_spayneuter: true,
			dog_description: ""
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		axios
			.post(`https://ipaws-back-end.herokuapp.com/api/dogs/new/`, {
				name: this.state.dog_name,
				photo: this.state.dog_photo,
				breed: this.state.dog_breed,
				weight: this.state.dog_weight,
				spayneuter: this.state.dog_spayneuter,
				sex: this.state.dog_sex,
				age: this.state.dog_age,
				description: this.state.dog_description
			})
			.then(response => {
				console.log(response)
				window.location.reload()
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleNameInput(e) {
		this.setState({
			dog_name: e.target.value
		})
		console.log(this.state.dog_name)
	}
	handlePhotoInput(e) {
		this.setState({
			dog_photo: e.target.value
		})
		console.log(this.state.dog_photo)
	}
	handleBreedInput(e) {
		this.setState({
			dog_breed: e.target.value
		})
		console.log(this.state.dog_breed)
	}
	handleAgeInput(e) {
		this.setState({
			dog_age: e.target.value
		})
		console.log(this.state.dog_age)
	}
	handleSexInput(e) {
		this.setState({
			dog_sex: e.target.value
		})
		console.log(this.state.dog_sex)
	}
	handleWeightInput(e) {
		this.setState({
			dog_weight: e.target.value
		})
		console.log(this.state.dog_weight)
	}
	handleFixedInput(e) {
		this.setState({
			dog_spayneuter: e.target.value
		})
		console.log(this.state.dog_spayneuter)
	}
	handleDescriptionInput(e) {
		this.setState({
			dog_description: e.target.value
		})
		console.log(this.state.dog_description)
	}

	render() {
		return (
			<div className="content">
				<img className="main-logo" src="/logo.png" alt="iPaws Logo" />
				<h1>Add a new dog</h1>
				<div className="add-dog-form">
					<form className="addDog" onSubmit={e => this.handleSubmit(e)}>
						<div className="couple">
							<div>
								<label>Name </label>
								<p>
									<input
										type="text"
										placeholder="Name"
										onChange={e => this.handleNameInput(e)}
									/>
								</p>
							</div>

							<div>
								<label>Breed </label>
								<p>
									<input
										type="text"
										onChange={e => this.handleBreedInput(e)}
										placeholder="Breed"
									/>
								</p>
							</div>
						</div>
						<div className="couple">
							<div>
								<label>Age </label>
								<p>
									<input
										type="text"
										onChange={e => this.handleAgeInput(e)}
										placeholder="Age"
									/>
								</p>
							</div>

							<div>
								<label>Sex </label>
								<p>
									<input
										list="sex"
										type="text"
										onChange={e => this.handleSexInput(e)}
										placeholder="Sex"
									/>
									<datalist id="sex">
										<option value="male" />
										<option value="female" />
									</datalist>
								</p>
							</div>
						</div>
						<div className="couple">
							<div>
								<label>Weight </label>
								<p>
									<input
										type="text"
										onChange={e => this.handleWeightInput(e)}
										placeholder="Weight"
									/>
								</p>
							</div>

							<div>
								<label>Spayed/Neutered </label>
								<p>
									<input
										list="spayed"
										type="text"
										onChange={e => this.handleFixedInput(e)}
										placeholder="Spayed/Neutered"
									/>
									<datalist id="spayed">
										<option value="true" />
										<option value="false" />
									</datalist>
								</p>
							</div>
						</div>
						<div>
							<label>Photo </label>
							<p>
								<input
									id="photo"
									type="text"
									onChange={e => this.handlePhotoInput(e)}
									placeholder="Photo URL"
								/>
							</p>
						</div>

						<div>
							<label>Description: </label>
							<p>
								<textarea
									id="xtbox"
									type="text"
									rows="5"
									column="80"
									onChange={e => this.handleDescriptionInput(e)}
								/>
							</p>
						</div>

						<input id="bttn" type="submit" />
					</form>
				</div>
			</div>
		)
	}
}

export default AddDog
