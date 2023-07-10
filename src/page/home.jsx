import React from 'react';
import './home.css'
import Feedpost from '../componets/feed/feedpost';
import Rightside from '../componets/Rightside/rightside';
import Leftside from '../componets/leftside/leftside';
// import Topbar from '../componets/Topbar/topbar';
const Home = () => {
    return (
        
        
        <div className='home_section'>
            
            <Leftside />
            <Feedpost />
            <Rightside />
        </div>
      
    );
}

export default Home;
