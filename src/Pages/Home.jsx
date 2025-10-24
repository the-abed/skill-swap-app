import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import TopRatedProviders from '../Components/TopRatedProviders';
import HowItWorks from '../Components/HowItWorks';
import WhyChooseUs from '../Components/WhyChooseUs';

const Home = () => {
    return (
        <div className=''>
          <Hero></Hero>
          <Skills></Skills>
          <TopRatedProviders></TopRatedProviders>
          <HowItWorks></HowItWorks>
          <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;