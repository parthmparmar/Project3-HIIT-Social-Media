import React from "react";
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import UserInfo from "../UserInfo";
import UserStatsCard from "../StatsCard";
import "./style.css";

function UserModal(props) {
    return (
			<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<UserInfo userData={props.selectedUser} edit={false} />
					<UserStatsCard userData={props.selectedUser} disableAddBtn={true} />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
  }
  
  
  export default UserModal;