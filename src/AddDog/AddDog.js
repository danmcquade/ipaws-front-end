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
			.post(`http://localhost:3001/api/dogs/new/`, {
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
			<div>
				<div className="add-dog-form">
					<form class="addDog" onSubmit={e => this.handleSubmit(e)}>
						<table>
							<tbody>
								<tr>
									<td>
										<label>Name </label>
										<p>
											<input
												type="text"
												onChange={e => this.handleNameInput(e)}
											/>
										</p>
									</td>
									<td>
										<label>Breed </label>
										<p>
											<input
												type="text"
												onChange={e => this.handleBreedInput(e)}
											/>
										</p>
									</td>
								</tr>

								<tr>
									<td>
										<label>Age </label>
										<p>
											<input
												type="text"
												onChange={e => this.handleAgeInput(e)}
											/>
										</p>
									</td>
									<td>
										<label>Sex </label>
										<p>
											<input
												list="sex"
												type="text"
												onChange={e => this.handleSexInput(e)}
											/>
											<datalist id="sex">
												<option value="male" />
												<option value="female" />
											</datalist>
										</p>
									</td>
								</tr>

								<tr>
									<td>
										<label>Weight </label>
										<p>
											<input
												type="text"
												onChange={e => this.handleWeightInput(e)}
											/>
										</p>
									</td>
									<td>
										<label>Spayed/Neutered </label>
										<p>
											<input
												list="spayed"
												type="text"
												onChange={e => this.handleFixedInput(e)}
											/>
											<datalist id="spayed">
												<option value="true" />
												<option value="false" />
											</datalist>
										</p>
									</td>
								</tr>

								<tr>
									<td>
										<label>Photo </label>
										<p>
											<input
												type="text"
												onChange={e => this.handlePhotoInput(e)}
											/>
										</p>
									</td>

									<td>
										<label>Description: </label>
										<p>
											<textarea
												rows="1"
												type="text"
												onChange={e => this.handleDescriptionInput(e)}
											/>
										</p>
									</td>
								</tr>

								<input id="bttn" type="submit" />
							</tbody>
						</table>
					</form>
				</div>
			</div>
		)
	}
}

export default AddDog
