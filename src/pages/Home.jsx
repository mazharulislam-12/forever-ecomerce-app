import React from 'react';
import Hero from '../components/Hero';
import LatestCollaction from '../components/LatestCollaction';
import BestSeller from '../components/BestSeller';

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollaction/>
            <BestSeller/>
        </div>
    );
};

export default Home;