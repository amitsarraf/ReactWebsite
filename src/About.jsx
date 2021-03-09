import React from 'react';
import img from "../src/Images/amit.jpg";
import { NavLink } from "react-router-dom"
import Common from "./Common"

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={img}
        visit='/contact'
        btname='Contact Now' />
    </>
  )
}

export default About;
