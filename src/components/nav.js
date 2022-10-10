import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'

const Nav = () => {
  return (
    <div>

      <div className='nav'>
        <div className='nav-bar'>
          <Link className='link' to='/'>Shop All Products</Link>
          <Link className='link' to='/Shop-By-Brand'>Shop By Brand</Link>
          <Link className='link' to='/Download-Center'>Download Center</Link>
          <Link className='link' to='/Contact-Us'>Contact Us</Link>
          <Link className='link' to='/About-Us'>About Us</Link>
          <Link className='link' to='/Careers'>Careers</Link>
          <Link className='link' to='/Support'>Support</Link>
          <Link className='link2' to='/Quick-Order'>Quick Order</Link>
        </div>
      </div>


    </div>

  )
}

export default Nav;