import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer>
        <Link to='/' className='push-left'>
          <img src='/footer/footer-logo.png' className='footer-logo' alt='iPaws Pawprint Logo' />
        </Link>
        <a href='mailto:info@ipaws.org'>
          <img src='/footer/email.png' className='social-icon' alt='e-Mail Icon' />
        </a>
        <a href='https://facebook.com'>
          <img src='/footer/fb.png' className='social-icon' alt='Facebook Icon' />
        </a>
        <a href='https://twitter.com'>
          <img src='/footer/twitter.png' className='social-icon' alt='Twitter Icon' />
        </a>
      </footer>
    )
  }
}

export default Footer
