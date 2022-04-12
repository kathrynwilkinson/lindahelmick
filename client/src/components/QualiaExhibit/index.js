import './style.css';
import React, { useState } from 'react';
import DisplayCard from '../../components/DisplayCard';
import qualiaPieces from '../../data/artwork/qualia.json';
import './qualia.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalDialog from 'react-bootstrap/ModalDialog'
export default function QualiaExhibit() {
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
