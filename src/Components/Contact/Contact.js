
import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const Contact = ({ handleClose, show }) => {
  const users = useSelector((state) => state.Reducer.users);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState('')


  const handelChange = (e) => {
    setEmail(e.target.value);
    
  };
  const handelPwd=(e)=>{
    setPwd(e.target.value);
  }
 
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>IDENTIFIEZ-VOUS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handelChange}
               
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  onChange={handelPwd} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick= {()=>
              users.map(el=>(el.email===email && el.pwd===pwd)? alert (`Bienvenue ${el.username}`) : alert('Pas de compte!'))
            
          }
          
          >
            Connexion
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
