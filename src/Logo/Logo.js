import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'><img className='main-logo' src='/logo.png' alt='iPaws Logo' /></Link>
  )
}

export default Logo
