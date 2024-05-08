import React from 'react'
import Nav from './modules/nav/Nav'
import Main from './modules/main/Main'
import Questions from './modules/questions/Questions'
import Reviews from './modules/reviews/Reviews'
import Footer from './modules/footer/Footer'
import Call from './modules/call/Call'
import Services from './modules/services/Services'
import Team from './modules/team/Team'

function App() {
  return (
    <div className="wrapper">
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

    </div>
  );
}

export default App;
