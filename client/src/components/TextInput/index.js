import React,  {useState} from "react";
import "./style.css";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function TextInput(props) {
	const [status, setStatus] = useState(props.currentStatus);
	const [showEmoji, setShowEmoji] = useState(false);

	const handleInputChange = event => {
		setStatus(event.target.value);
	}

	return (
		<div className="form-group" id="editStatus">
			<label htmlFor={props.id}>{props.children}:</label>
			<textarea row="5" className="form-control" ref={props.refInput} name={props.name} id={props.id} value={status} onChange={handleInputChange}>
			</textarea>
			{showEmoji ? <Picker onClick={()=>setShowEmoji(!showEmoji)}  onSelect={(emoji)=> setStatus(status + emoji.native)} /> : null}
			<button id="update-btn" type="button" onClick={props.click} className="btn btn-sm mt-2 mr-2">
				Update
			</button>
			<button type="button" onClick={props.clickCancel} className="btn btn-light btn-sm mt-2">
				Cancel
			</button>
			<div id="emoji-button" onClick={ ()=> setShowEmoji(!showEmoji)} className="mt-2">
				<img src="./icons/emoji-button.png" alt="emoji button"/>
			</div>
		</div>
	);
}

export default TextInput;
