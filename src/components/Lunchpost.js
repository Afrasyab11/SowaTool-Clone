import React from 'react'
import '../style/Lunchpost.css'


import img from '../images/Website-Launch-Post.jpg'
import img2 from '../images/Were-Hiring-Blog.jpg'

const Lunchpost = () => {
    return (
        <div>
            <section>
                <div className='LP-dv'>
                    <div className='first-dv'>
                        <img className='LP-img' src={img} alt='WebsitLunching' ></img>
                        <strong>
                            <a className='LP-a' href='/http'>Welcome to the New SowaTool.com!</a>
                        </strong>
                        <div className='LP-PG'>
                        <p>Before you can get online there are a couple of steps you need to take.<br></br><br></br>
                            Click on the link below to setup your account now.</p>
                            </div>
                            <button className='LP-btn'>Check it Out</button>
                    </div>

                    <div className='second-dv'>
                        <img className='LP-img' src={img2} alt='WebsitLunching' ></img>
                        <strong>
                            <a className='LP-a' href='/http'>Welcome to the New SowaTool.com!</a>
                        </strong>
                        <p className='LP-PG2'>We're always looking for new individuals with unique perspectives and experiences to help us
                            achieve our goals. Here at Sowa we want our employees
                            to succeed just as much as our business, so setting them up for success is paramount.<br></br><br></br>
                            Check out our current opportunities and learn more about how you can fit in the Sowa Tool<br></br> Family below.</p>
                            <button className='LP-btn2'>Apply Now</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lunchpost