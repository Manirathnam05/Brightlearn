import React from 'react';
import './App.css';
import Navbar from './Compounents/Navbar/Navbar';
import Hero from './Compounents/Hero/Hero';
import Program from './Compounents/Programs/Program';
import Title from './Compounents/Title/Title';
import About from './Compounents/About/About';
import Campus from './Compounents/Campus/Campus';
import Testimonial from './Compounents/Testimonial/Testimonial';
import Contact from './Compounents/Contact/Contact';
import Footer from './Compounents/Footer/Footer';
function App() { 
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title="Our PROGRAM" subtitle="What We Offer"/>
      <Program/>
      <About/>
      <Title title="Gallery" subtitle="Campus Photos"/>
    <Campus/>
    <Title title="TESTIMONIALS" subtitle="What Student Says"/>
    <Testimonial/>
    <Title title="Contact Us" subtitle="Get in Touch"/>

    <Contact/>
    <Footer/>
    </div>

  )
}

export default App;
