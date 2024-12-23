import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logos from "../../../public/logos-imp.png";
import { Link } from "react-scroll";



const Navbar = () => {
  const [nav,setNav] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 0 ? setNav(true) : setNav(false);
    })
  },[])
  return (
    <nav className={`container navbar nav ${nav?'dark-nav':''}`}>
       <h1>BrightLearn</h1>
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-300} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-250} duration={500}>About</Link></li>
        <li><Link to="campus" smooth={true} offset={-300} duration={500}>Campus</Link></li>
        <li><Link to="testimonial" smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-300} duration={500} className='btn'> Contact us</Link></li> 
      </ul>
   
    </nav>
    
  )
}

export default Navbar;

