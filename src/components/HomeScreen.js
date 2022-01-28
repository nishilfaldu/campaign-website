import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js'
import candidatesData from './candidatesData.js';
import whatWeStandForData from './whatWeStandForData.js';
import platformData from './platformData.js';
import teamData from './teamData.js'

function HomeScreen() {
  return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav/>
            {/* Banner */}
            <Banner/>
            {/* Row */}
            <Row
            title="Meet Your Candidates"
            isLargeRow
            data={candidatesData}
            />
            <Row title="What We Stand For"
            data={whatWeStandForData}
            />
            <Row title="Platform"
            data={platformData}
            />
            <Row title="Our Team" 
            data={teamData}
            />
        </div>
    );
}

export default HomeScreen;
