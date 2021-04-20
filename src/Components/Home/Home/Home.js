import React from 'react';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import HotelInfo from '../HotelInfo/HotelInfo';

import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Features from '../Features/Features';
import MoreServices from '../MoreServices/MoreServices';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HotelInfo></HotelInfo>
            <Services></Services>
            <Features></Features>
            <MoreServices></MoreServices>
            <Food></Food>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;