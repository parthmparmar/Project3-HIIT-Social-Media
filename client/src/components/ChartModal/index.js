import React from "react";
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import LineGraph from "../Chart";
import "./style.css";

function UserModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="stat-name contained-modal-title-vcenter">
            {props.stat}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <LineGraph
            data = {props.data}
            labels = {props.labels}
            title = {props.stat}
        >   
        </LineGraph>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  export default UserModal;