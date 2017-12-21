import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Contact.css'

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

	render() {
		const fireRedirect = this.state.fireRedirect
		return (
			<div className="contact-wrapper">
				<img className="main-logo" src="/logo.png" alt="iPaws Logo" />
				<div className="contact-intro">
				<h1>Contact iPaws</h1>
				<p> iPaws is happy to answer any questions you might have about the adoption process, or with any other issues. Please fill out the form below with your name, telephone number, current address, email, and a brief message, and a member of our staff will get back to you shortly.
				</p>
				</div>
				<div className="content">
				<div className="contact-form">
					<form className="contact" onSubmit={this.submitForm}>
						<div className="couple">
							<div>
								<label> Name </label>
								<p>
									<input type="text" placeholder="Name" />
								</p>
							</div>

							<div>
								<label>Email</label>
								<p>
									<input type="text" placeholder="Email" />
								</p>
							</div>
						</div>
						<div className="couple">
							<div>
								<label className="telephone">Telephone</label>
								<p>
									<input type="text" placeholder="Telephone" />
								</p>
							</div>
							<div>
								<label className="Address/Location">Address/Location</label>
								<p>
									<input type="text" placeholder="Address/Location" />
								</p>
							</div>
						</div>

						<div>
							<label>Message</label>
							<p>
								<textarea id="txtbox" type="text" rows="5" column="80" />
							</p>
						</div>
						<input type="submit" />
					</form>
					{fireRedirect && (
						<Redirect to= '/contact-submit' />
					)}
				</div>
			</div>
			</div>
		)
	}
}

export default Contact
