import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
	render() {
		return (
			<nav>
				<Link to='/' className='push-left'>
					iPaws
				</Link>
				<Link to='/dogs'>Dogs</Link>
				<Link to='/about'>About</Link>
				<Link to='/resources'>Resources</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/dogs/new'><strong>+</strong></Link>
			</nav>
		)
	}
}

export default Nav
