import React, { Component } from 'react'
import Slider from 'react-slick'

function NextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    />
  )
}

function PrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    />
  )
}

class MainSlider extends Component {
  render () {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />

    }
    return (
      <Slider {...settings}>
        <div><img src='1.jpg' alt='First slide' /></div>
        <div><img src='2.jpg' alt='Second slide' /></div>
        <div><img src='3.jpg' alt='Third slide' /></div>
      </Slider>
    )
  }
}

export default MainSlider
