import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import TopRatedProviders from '../Components/TopRatedProviders';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
          <Hero></Hero>
          <Skills></Skills>
          <TopRatedProviders></TopRatedProviders>
          <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;