import React from 'react'
import CardWorkList from './components/CardWorkList/CardWorkList'
import Castomers from './components/Castomers/Castomers'
import Enjoy from './components/Enjoy/Enjoy'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import OurClientList from './components/OurClientList/OurClientList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Castomers />
      <CardWorkList />
      <OurClientList />
      <Enjoy />
      <Footer />
    </div>
  )
}

export default App