import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import TopRatedProviders from '../Components/TopRatedProviders';
import HowItWorks from '../Components/HowItWorks';
import WhyChooseUs from '../Components/WhyChooseUs';
import PopularSkills from '../Components/PopularSkills';

const Home = () => {
    return (
        <div className=''>
          <div data-aos="fade-up" data-aos-duration="1200">
  <Hero />
</div>

<div >
  <PopularSkills></PopularSkills>
</div>
<div data-aos="fade-right" data-aos-duration="1000">
  <HowItWorks />
</div>
<div>
  <TopRatedProviders />
</div>



<div data-aos="fade-up" data-aos-duration="1000">
  <WhyChooseUs />
</div>

        </div>
    );
};

export default Home;