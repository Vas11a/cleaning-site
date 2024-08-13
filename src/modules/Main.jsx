import React from 'react'
import Nav from './nav/Nav'
import Main from './main/Main'
import Questions from './questions/Questions'
import Reviews from './reviews/Reviews'
import Footer from './footer/Footer'
import Call from './call/Call'
import Services from './services/Services'
import Team from './team/Team'

export default function MainPage() {
    return (
        <>
            <Nav />
            <div className='mt-32 relative'>
                <Main />
                <Services />
            </div>

            <div className="about w-full  pt-5" id="about">
                <Questions />
            </div>
            <Reviews />
            <Team />

            <Footer />
            <Call />
        </>
    )
}
