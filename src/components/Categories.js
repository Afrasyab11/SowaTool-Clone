import React from 'react'
import '../style/Categories.css'

import img1 from '../images/Drilling-L1.jpg'
import img2 from '../images/Indexable-L1.jpg'
import img3 from '../images/Measuring-L1.jpg'
import img4 from '../images/Milling-L1.jpg'
import img5 from '../images/Threading-L1.jpg'
import img6 from '../images/ToolHolding-L1.jpg';
import img7 from '../images/Workholding-L1.jpg'
const Categories = () => {
    return (
        <div>
            <div>
                <h2 className='cg-title'>Top Product Categories</h2>
            </div>

            {/* images started from here */}
            <div className='images'>
                <div className='mg'>
                    <img className='cg-img' src={img1} alt='Drilling'></img>
                    <p className='p'>Drilling & Holemaking</p>
                </div>

                <div className='mg'>
                    <img className='cg-img' src={img2} alt='Measuring'></img>
                    <p className='p'>Indexable cutting Tools</p>
                </div>

                <div className='mg'>
                    <img className='cg-img' src={img3} alt='Measuring'></img>
                    <p className='p'>Measuring & Inspecting</p>
                </div>

                <div className='mg'>
                    <img className='cg-img' src={img4} alt='Drilling'></img>
                    <p className='p'>Milling</p>
                </div>

                <div className='mg'>
                    <img className='cg-img' src={img5} alt='Threading'></img>
                    <p className='p'>Threading & Tapping</p>
                </div>

                <div className='mg'>
                    <img className='cg-img' src={img6} alt='ToolHolding' ></img>
                    <p className='p'>Tool Holding</p>
                </div>
                <div className='mg'>
                    <img className='cg-img' src={img7} alt='WorkHolding' ></img>
                    <p className='p'>WorkHolding, Clamping & Fixturing</p>
                </div>
            </div>
        </div>
    )
}

export default Categories