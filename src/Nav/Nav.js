import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
	render() {
		return (
			<nav>
				<Link to='/' className='push-left'>
					<img className='nav-logo' src='/nav-logo.png' alt='iPaws Logo' />
				</Link>
				<Link className='nav-link' to='/dogs'>Dogs</Link>
				<Link className='nav-link' to='/about'>About</Link>
				<Link className='nav-link' to='/resources'>Resources</Link>
				<Link className='nav-link' to='/contact'>Contact</Link>
				<Link className='nav-link' to='/dogs/new'><strong>+</strong></Link>
			</nav>
		)
	}
}

export default Nav
