import React from 'react';
import HomeDesktop from './HomeDesk';
import HomeMobile from './HomeMob';

const Home = () => {
    if(window.outerWidth>600) {
        return <HomeDesktop />
    } else {
        return <HomeMobile />
    }
}

export default Home;