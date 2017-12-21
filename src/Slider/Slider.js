import React, { Component } from 'react'
import Slider from 'react-slick'
import './Slider.css'

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
      autoplaySpeed: 4000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />

    }
    return (
      <Slider {...settings}>
        <div><a href='https://dcpawsrescue.org/event/adoption-event-old-town-alexandria-the-dog-park-12/' target='_blank' rel='noopener noreferrer'><img className='slider-img' src='/slides/slide-event.jpg' alt='Upcoming Dog Adoption Event' /></a></div>
        <div><a href='https://secure.aspca.org/donate/holiday' target='_blank' rel='noopener noreferrer'><img className='slider-img' src='/slides/slide-holiday.jpg' alt='iPaws Holiday Donations' /></a></div>
      </Slider>
    )
  }
}

export default MainSlider
