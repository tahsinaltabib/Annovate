import React from 'react'
import Navbar from '../src/components/navber/Navbar'
import Banner from './components/banner/Banner'
import { Search } from './reusable/Search'
import CoreFeature from './components/corefeature/CoreFeature'
import Feature from './components/feature/Feature'


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CoreFeature />
      <Feature/>
    </>
  )
}

export default App