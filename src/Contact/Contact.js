import React, { Component } from "react"
import "./Contact.css"

class Contact extends Component {
	render() {
		return (
			<div className="content">
				<img class='main-logo' src='/logo.png' alt='iPaws Logo' />
				<h1>Contact iPaws</h1>
          <p>iPaws does not run a dedicated facility to house homeless pets. For this reason, we ask that if you would like to meet a particular pet, please fill out the contact form below with your Name, Telephone number, current Address, Email, and a brief Message just stating your interest in a particular dog(s).
            However, although we strongly recommend filling out the contact form if you have interest, you are also welcome to simply come out to an adoption event! </p>

				<div className="contact-form">
					<form>
					<table>
						<tbody>
						<tr>
						<td>
						<label> Name </label>
						<p>
							<input type="text" />
						</p>
						</td>
						<td>
						<label>Email</label>
						<p>
							<input type="text" />
						</p>
						</td>
						</tr>
						<tr>
						<td>
						<label className="telephone">Telephone</label>
						<p>
							<input type="text" />
						</p>
						</td>
						<td>
						<label>Address/Location</label>
						<p>
							<input type="text" />
						</p>
						</td>
						</tr>
						<tr>
						<td>
						<label>Message</label>
						<p>
						<textarea
							type="text"
						/>
						</p>
						</td>
						</tr>
						<input type="submit" />
							</tbody>
						</table>
					</form>
				</div>
			</div>
		)
	}
}

export default Contact
