import React from 'react'
import Himg from "../src/img/sports-3399852_1920.png";
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
    return (
        <div>
        <Common name="Get all the latest football transfer news here . on this page you will get to see the latest transfer news of football players all around the world. click the button below to see latest news." imgsrc={Himg} visit="/service" btname="Getstarted"/>
        </div>
            

    );

};

export default Home;