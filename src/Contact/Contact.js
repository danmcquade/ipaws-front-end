import React, { Component } from "react"
import "./Contact.css"

class Contact extends Component {
	render() {
		return (
			<div class="content">
				<h1>Contact iPaws</h1>

				<div className="contact-form">
					<form>
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
				</div>
			</div>
		)
	}
}

export default Contact
