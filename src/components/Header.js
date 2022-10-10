import React from 'react'
import '../style/Header.css'
import image from '../images/Sowa.png'

import user from '../images/user.png'
import slider from '../images/slider.png'
import heart from '../images/heart.png'
import shoppingBag from '../images/shoppBag.png'
import flag from '../images/flag.png'
import align from '../images/aignright.png'
// import search from '../images/Search.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='hd' >
      <div className='sowa-dv'>
        <img className='sowa' src={image} alt="sowa" />
        <span style={{ color: 'white', fontWeight: 'bold', marginLeft: '.5rem' }}>TOOLING YOUR WORLD.</span>
      </div>
      <div className='Material-Search'>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 280 }}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>


      <div className='header-icons-dv'>
        <a href='http'><img className='header-icons' src={user} alt='user'></img></a>
        <a className='a' href='http'><span>login</span></a>
        <a href='http'><img className='header-icons' src={slider} alt='slider'></img></a>
        <a href='http'><img className='header-icons' src={heart} alt='heart-icon' ></img></a>
        <a href='http'><img className='header-icons' src={shoppingBag} alt='shopping-Bag-Icon'></img></a>
        <a href='http'><img className='header-icons align' src={align} alt='Align-right-icon'></img></a>
        <a href='http'><img className='header-icons flag' src={flag} alt='flag-icon'></img></a>
       
      </div>
      <div className='hd-sub-content'>
        <h1 className='header-icons-sub sowa-contact'>1-800-265-8221</h1>
          <span className='header-icons-sub sowa-email'>sales@sowatool.com</span>
          </div>

      {/* <div >
        <form className='hd-search'>
        <input className='hd-search-input' type="text"></input>
        <button><img className='search-icon' alt='Search' src={search}></img></button>
 
        </form>
      </div> */}
    </div>
  )
}

export default Header
