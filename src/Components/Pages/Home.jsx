import React from 'react'
import Navbar from '../Layout/Navbar'
import HomeBanner from '../Layout/HomeBanner'
import AdvancedSolarCalculator from '../Layout/AdvancedSolarCalculator'
import Footer from '../Layout/Footer'
import Brands from '../Layout/Brands'
// import AboutBanner from '../Layout/AboutBanner'
import About from '../Layout/HomeAbout'
import WhyChoose from '../Layout/WhyChoose'
import HomeService from '../Layout/HomeService'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <About />
      <HomeService />
      <Brands />
      <WhyChoose />
      {/* <AboutBanner/> */}
      <AdvancedSolarCalculator />
      <Footer />
    </div>
  )
}

export default Home