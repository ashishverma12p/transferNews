import React from 'react'
import Himg from "../src/img/football-4827746_1920.jpg";
import { NavLink } from 'react-router-dom';
import Common from './Common';


const About = () => {
    return (
        <div>
        <Common name="welcome to about page" imgsrc={Himg} visit="/contact" btname="contactNow"/>
        </div>
            

    );

};

export default About;