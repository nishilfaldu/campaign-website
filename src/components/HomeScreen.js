import React from 'react';
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js'
import candidatesData from './candidatesData.js';
import whatWeStandForData from './whatWeStandForData.js';
import platformData from './platformData.js';
import teamData from './teamData.js';
import ModalNew from './ModalNew.js';
import { useState } from 'react';

function HomeScreen() {
    const [displayModal, setDisplayModal] = useState(true);
    const [modalData, setModalData] = useState({});

    const twoFunctionsCalled = function(modalJson){
        setDisplayModal(true);
        setModalData(modalJson);
    }
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
            // modalDataFunction={setModalData}
            // show={displayModal}
            templateFunction={twoFunctionsCalled}
            // showFunction={setDisplayModal}
            />
            <Row title="What We Stand For"
            isLargeRow
            data={whatWeStandForData}
            />
            <Row title="Platform"
            isLargeRow
            data={platformData}
            />
            <Row title="Our Team" 
            isLargeRow
            data={teamData}
            />
            {/* Modal */}
            <ModalNew show={displayModal} showFunction={setDisplayModal} modalTitle={modalData.modalTitle} modalInfo={modalData.modalInfo}/>
        </div>
    );
}

export default HomeScreen;
