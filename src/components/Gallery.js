import React from 'react'
import '../style/Gallery.css'
import image1 from '../images/mitutoyo.png'
import image2 from '../images/Starrett.png'
import image3 from '../images/Seco.png'
import image4 from '../images/Guehring.png'
import image5 from '../images/Gray.png'
const Gallery = () => {
  return (
    <div>
        <div className='Gallery1'>
        <h1>Authorized Distributors</h1>
        </div>
        <div className='Gallery'>
            <img className='gallery' src={image1} alt='Images'></img>
            <img  className='gallery' src={image2} alt='Images'></img>
            <img className='gallery' src={image3} alt='Images'></img>
            <img className='gallery' src={image4} alt='Images'></img>
            <img className='gallery' src={image5} alt='Images'></img>
        </div>
    </div>
  )
}

export default Gallery