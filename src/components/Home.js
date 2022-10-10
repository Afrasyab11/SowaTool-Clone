import React from 'react'
import Header from './Header'
import Slider from './slider'
import Categories from './Categories'
import Nav from './nav'
import Footer from './Footer';
import Lunchpost from './Lunchpost'
import Gallery from './Gallery'


const Home = () => {
    return (
        <div>
            <section>
                <Header />
            </section>

            <Nav />
            <Slider />

            <section>
                <Categories />
            </section>

            <section>
                <Lunchpost />
            </section>
            <section>
                <Gallery />
            </section>
            <section>
                <Footer />
            </section>

        </div>
    )
}

export default Home