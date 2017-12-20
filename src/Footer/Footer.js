import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer>
        <Link to='/' className='push-left'>
          iPwas
        </Link>
        <a href='#'>
          <img src='footer/email.png' />
        </a>
        <a href='#'>
          <img src='footer/fb.png' />
        </a>
        <a href='#'>
          <img src='footer/twitter.png' />
        </a>
      </footer>
    )
  }
}

export default Footer
