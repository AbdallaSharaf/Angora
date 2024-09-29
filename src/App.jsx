import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Mission from './components/mission/mission'
import Team from './components/Team/Team'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Clients from './components/Clients/Clients'
import Posts from './components/Posts/Posts'
import Purchase from './components/Purchase/Purchase'
import BlogSlider from './components/BlogSlider/BlogSlider'
import ContactMe from './components/ContactMe/ContactMe'
import GoogleMapComponent from './components/Map/Map'
import Footer from './components/Footer/Footer'
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{duration:1 , delay:0.25}}>
          <Navbar />
          <Hero />
          <About />
          <Mission />
          <Team />
          <Projects />
          <Services />
          <Clients />
          <Posts />
          <Purchase />
          <BlogSlider />
          <ContactMe />
          <GoogleMapComponent />
          <Footer />
        </motion.div>
  )
}

export default App