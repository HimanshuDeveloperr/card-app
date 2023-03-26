

import React, { useContext, useState } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import HistoryContext from "../Store/HistoryContext";
import './Card.css'

const Cards = (props) => {
const { name, link, id, bucket, onClick, onSave } = props;
const [editing, setEditing] = useState(false);
const [newName, setNewName] = useState(name);
const [newLink, setNewLink] = useState(link);
const [showModal, setShowModal] = useState(false);

const History=useContext(HistoryContext)

const removeHandler = () => {
onClick(id);
};

const editHandler = () => {
setEditing(true);
};

const saveHandler = () => {
onSave(id, newName, newLink);
setEditing(false);
};

const openModal = () => {
setShowModal(true);
History.addCards({ name, link, id, bucket })
};

const closeModal = () => {
setShowModal(false);
};

return (
<div className="card-container">
<Card className="card" onClick={openModal}>
<Card.Body>
<Card.Title className="card-title">Your details</Card.Title>
<Card.Text className="card-text">Bucket: {bucket}</Card.Text>
{editing ? (
<Form>
<Form.Group controlId="formName">
<Form.Label>Name</Form.Label>
<Form.Control
type="text"
value={newName}
onChange={(e) => setNewName(e.target.value)}
/>
</Form.Group>
<Form.Group controlId="formLink">
<Form.Label>Link</Form.Label>
<Form.Control
type="text"
value={newLink}
onChange={(e) => setNewLink(e.target.value)}
/>
</Form.Group>
</Form>
) : (
<>
<Card.Text>Name: {name}</Card.Text>
<Card.Link href={link}>Link</Card.Link>
</>
)}
{editing ? (
        <>
          <Button variant="success" style={{margin:'3px'}}  onClick={saveHandler}>
            Save
          </Button>
          <Button variant="secondary" onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button variant="danger" style={{margin:'3px'}} onClick={removeHandler}>
            Remove
          </Button>
          <Button variant="warning" onClick={editHandler}>
            Edit
          </Button>
        </>
      )}
    </Card.Body>
  </Card>

  <Modal show={showModal} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>{name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <iframe
  title="Video Player"
  src={link}
  frameBorder="0"
  allowFullScreen
/>
     </Modal.Body>
  </Modal>
</div>
);
};
export default Cards;

