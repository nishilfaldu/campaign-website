import React from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import { modalOverlayVariants, staggerOne, modalFadeInUpVariants,  modalVariants} from './motionUtils.js';
import '../css/Modal.scss';
import { FaPlay } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function ModalNew(props) {

	const [modalClosed, setModalClosed] = useState(true);

	const handleModalClose = function(){
		setModalClosed(!modalClosed);
	};

    return( 
		<div>{
			modalClosed && 
			(<div
			// variants={modalOverlayVariants}
			className={`Modal__overlay`}
			// 1. className={`Modal__overlay ${modalClosed && 'Modal__invisible'}`}
		>
			<div
				// key="modal"
				// variants={modalVariants}
				// ref={modalRef}
				className={`Modal__wrp`}
				// 2. className={`Modal__wrp ${modalClosed && 'Modal__invisible'}`}
			>
				<button
					className="Modal__closebtn"
					// onClick={handleModalClose}
					onClick={() => handleModalClose()}
				>
					<VscChromeClose />
				</button>
				<div className="Modal__image--wrp">
					<div className="Modal__image--shadow" />
					<img
						className="Modal__image--img"
						src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
						alt="Some Random"
					/>
					<div className="Modal__image--buttonswrp">
					<div
							className="Modal__image--button"
							// onClick={handlePlayAnimation}
						>
							<FaPlay />
							<span>Play</span>
					
					</div>
						
					</div>
				</div>
				<div 
				// variants={staggerOne} 
					className="Modal__info--wrp">
					<h3 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--title">{props.modalTitle}</h3>
					<p 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--description">{props.modalInfo}</p>
					{/* <hr 
					// variants={modalFadeInUpVariants} 
					className="Modal__info--line"/> */}
				</div>
			</div>
		</div>)
			}

				</div>
	
				
    ); 
}

export default ModalNew;
