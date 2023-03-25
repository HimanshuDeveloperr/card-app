// import React, { useState } from "react";
// import { Card, Button, Form } from "react-bootstrap";

// const Cards = (props) => {
//   const { name, link, id, bucket, onClick, onSave } = props;
//   const [editing, setEditing] = useState(false);
//   const [newName, setNewName] = useState(name);
//   const [newLink, setNewLink] = useState(link);

//   const removeHandler = () => {
//     onClick(id);
//   };

//   const editHandler = () => {
//     setEditing(true);
//   };

//   const saveHandler = () => {
//     onSave(id, newName, newLink);
//     setEditing(false);
//   };

//   return (
//     <div>
//       <Card style={{ width: "18rem", margin: "10px" }}>
//         <Card.Body>
//           <Card.Title>Your details</Card.Title>
//           <Card.Text>Bucket: {bucket}</Card.Text>
//           {editing ? (
//             <Form>
//               <Form.Group controlId="formName">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={newName}
//                   onChange={(e) => setNewName(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formLink">
//                 <Form.Label>Link</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={newLink}
//                   onChange={(e) => setNewLink(e.target.value)}
//                 />
//               </Form.Group>
//             </Form>
//           ) : (
//             <>
//               <Card.Text>Name: {name}</Card.Text>
//               <Card.Link href={link}>Link</Card.Link>
//             </>
//           )}

//           {editing ? (
//             <>
//               <Button variant="success" onClick={saveHandler}>
//                 Save
//               </Button>
//               <Button variant="secondary" onClick={() => setEditing(false)}>
//                 Cancel
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button variant="danger" onClick={removeHandler}>
//                 Remove
//               </Button>
//               <Button variant="warning" onClick={editHandler}>
//                 Edit
//               </Button>
//             </>
//           )}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Cards;

import React, { useState } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";

const Cards = (props) => {
const { name, link, id, bucket, onClick, onSave } = props;
const [editing, setEditing] = useState(false);
const [newName, setNewName] = useState(name);
const [newLink, setNewLink] = useState(link);
const [showModal, setShowModal] = useState(false);

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
};

const closeModal = () => {
setShowModal(false);
};

return (
<div>
<Card style={{ width: "18rem", margin: "10px" }} onClick={openModal}>
<Card.Body>
<Card.Title>Your details</Card.Title>
<Card.Text>Bucket: {bucket}</Card.Text>
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
          <Button variant="success" onClick={saveHandler}>
            Save
          </Button>
          <Button variant="secondary" onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button variant="danger" onClick={removeHandler}>
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

