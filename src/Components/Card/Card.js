
import React from 'react'
import { Card,Button } from 'react-bootstrap';
const Cards = (props) => {
    const { name, link ,id} = props;

    const removeHandler=(id)=>{
      props.onClick(id)
      
    }
  return (
    <div>
       <Card style={{ width: '18rem',margin:'10px' }}>
      <Card.Body>
        <Card.Title>Your details</Card.Title>
        <Card.Text>
          Name:{name}
        </Card.Text>
        <Card.Link href={link}>Link</Card.Link>
        <Button variant="danger" onClick={()=>removeHandler(id)}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards