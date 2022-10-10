import React from 'react'
import '../style/Slider.css'
import image from '../images/Were-Hiring-Blog.jpg'
const Slider = () => {
  return (
    <div>
        <img className='slider' src={image} alt="slider"></img>
    </div>
  )
}

export default Slider;