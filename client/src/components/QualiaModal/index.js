import './style.css';
import '../../assets/qualia.css';
import '../../assets/modal.css';
import qualiaPieces from '../../data/artwork/qualia.json';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DisplayCard from '../DisplayCard';
// import ModalDialog from 'react-bootstrap/ModalDialog'

export default function QualiaModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
	  <>
		<Button variant="primary" onClick={handleShow}>
		  View Full Exhibit
		</Button>

		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName="modal-90w"
		>
		  <Modal.Header closeButton>
			<Modal.Title>Qualia Exhibit</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			<div className='display-card-container'>
				{/* DisplayCards are appended here */}
				{qualiaPieces.map( qualiaPiece => ( <DisplayCard {...qualiaPiece} key={qualiaPiece.id}/>))}
			</div>

		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			{/* <Button variant="primary" onClick={handleClose}>
			  Save Changes
			</Button> */}
		  </Modal.Footer>
		</Modal>
	  </>
	);
}
