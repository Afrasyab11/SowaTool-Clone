import React from 'react'
import '../style/Footer.css'
import logo from '../images/DoubleUpArrow.png'
import facebook from '../images/facebook.png'
import camera from '../images/camera.png'
import youtube from '../images/youtube.png'
import linkDin from '../images/linkDin.png'
const Footer = () => {
  return (
    <>
      <section>
        <div className='contact-detail'>
          <h1 className='CT-number'>1-800-265-8221</h1>
          <span className='CT-time'>Monday - Friday, 8:00 am - 6:00 pm EST</span>

          <div className='CT-A' >
            <a href='//https'><img className='CT-a' src={logo} alt='Back-Up-Icon'></img></a>
          </div>

        </div>



        <div className='footer-card'>
          <div className='ft-first-card'>
            <div className='Account-card'>
              <h3>Account</h3>
              <p><a className='Acnt-card' href='//http'>Account</a> </p>
              <p ><a className='Acnt-card' href='//http'>Costumer Login</a> </p>
              <p><a className='Acnt-card' href='//http'>Returns</a> </p>
              <p><a className='Acnt-card' href='//http'>Ordering, Shipping & Payment</a> </p>
              <p><a className='Acnt-card' href='//http'>Help & Support</a> </p>
            </div>

          </div>

          <div className='Account-card'>
            <h3 >DOWNLOADS</h3>
            <p><a className='Acnt-card' href='//http'>Catalogs & Brochures</a> </p>
            <p ><a className='Acnt-card' href='//http'>RGA</a> </p>
            <p><a className='Acnt-card' href='//http'>Quote Request Forms</a> </p>
          </div>

          <div className='Account-card'>
            <h3 >COMPANY</h3>
            <p><a className='Acnt-card' href='//http'>About Us</a> </p>
            <p ><a className='Acnt-card' href='//http'>Careers</a> </p>
            <p><a className='Acnt-card' href='//http'>Customer Support</a> </p>
            <p><a className='Acnt-card' href='//http'>Privacy Policy</a> </p>
            <p><a className='Acnt-card' href='//http'>Request Information</a> </p>
          </div>


          <div className='Account-card'>
            <h3 className='Acnt-header'>FIND A DISTRIBUTOR</h3>
          </div>

          <div className='Account-card '>
            <h3>WE'RE SOCIAL</h3>

            <a href='//http'><img className='Acnt-card' src={facebook} alt='Facebook'></img></a>
            <a href='//http'><img className='Acnt-card' src={camera} alt='Facebook'></img></a>
            <a href='//http'><img className='Acnt-card' src={youtube} alt='Facebook'></img></a>
            <a href='//http'><img className='Acnt-card' src={linkDin} alt='Facebook'></img></a>
          </div>


        </div>

      </section>
    </>
  )
}

export default Footer