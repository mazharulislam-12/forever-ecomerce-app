import React from 'react';
import Hero from '../components/Hero';
import LatestCollaction from '../components/LatestCollaction';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollaction/>
            <BestSeller/>
            <OurPolicy/>
            <NewsLetterBox/>
        </div>
    );
};

export default Home;