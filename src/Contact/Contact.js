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
			<div className="content">
				<img class="main-logo" src="/logo.png" alt="iPaws Logo" />
				<h1>Contact iPaws</h1>
				<p>
					iPaws does not run a dedicated facility to house homeless pets. For
					this reason, we ask that if you would like to meet a particular pet,
					please fill out the contact form below with your Name, Telephone
					number, current Address, Email, and a brief Message just stating your
					interest in a particular dog(s). However, although we strongly
					recommend filling out the contact form if you have interest, you are
					also welcome to simply come out to an adoption event!{" "}
				</p>

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
		)
	}
}

export default Contact
