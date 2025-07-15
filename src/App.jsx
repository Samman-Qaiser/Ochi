import React from 'react'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Marquee from './components/Marquee.jsx'
import Page3 from './components/Page3.jsx'
import Page4 from './components/Page4.jsx'

import Cartoon from './components/Cartoon.jsx'
import Page5 from './components/Page5.jsx'
import Client from './components/Client.jsx'
import Cards from './components/Cards.jsx'
import Last from './components/Last.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll=new LocomotiveScroll()
  return (
    <div>
      <>
        <Navbar />
        <Landing />
        <Marquee />
        <Page3 />
        <Page4 />
        <Cartoon />
        <Page5 />
        <Client />
        <Cards />
        <Last />
        <Footer />
     
      </>
    </div>
  )
}

export default App