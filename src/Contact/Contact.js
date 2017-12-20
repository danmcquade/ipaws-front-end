import React, { Component } from "react"
import "./Contact.css"
import { Redirect } from 'react-router'

class Contact extends Component {
	constructor () {
		super();
		this.state = {
			fireRedirect: null
		}
	}
	submitForm = (e) => {
		e.preventDefault()
		this.setState({ fireRedirect: true })
	}
	render () {
		const fireRedirect = this.state.fireRedirect

		return (
			<div class="content">
				<h1>Contact iPaws</h1>
          <p>iPaws does not run a dedicated facility to house homeless pets. For this reason, we ask that if you would like to meet a particular pet, please fill out the contact form below with your Name, Telephone number, current Address, Email, and a brief Message just stating your interest in a particular dog(s).
            However, although we strongly recommend filling out the contact form if you have interest, you are also welcome to simply come out to an adoption event! </p>

				<div className="contact-form">
					<form onSubmit={this.submitForm}>

						<label> Name </label>
						<p>
							<input type="text" />
						</p>
						<label>Email</label>
						<p>
							<input type="text" />
						</p>
						<label className="telephone">Telephone</label>
						<p>
							<input type="text" />
						</p>

						<label>Address/Location</label>
						<p>
							<input type="text" />
						</p>

						<label>Message</label>
						<p>
							<input type="text" />
						</p>

						<input type="submit" />
					</form>
					{fireRedirect && (
						<Redirect to= '/contact-submit' />
						)}
				</div>
			</div>
		)
	}
}

export default Contact
