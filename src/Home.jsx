import React from 'react';
import img from "../src/Images/tonton-revolver-clash-of-code.jpg";
import {NavLink} from "react-router-dom"
import Common from "./Common"


const Home = () => {
  return (
    <>
    <Common
    name="Grow your Business With"
    imgsrc={img}
    visit='/service'
    btname='Get Started'
    />
    </>
  )
}

export default Home;
