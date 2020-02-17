import React from "react";
import Input from "../Input";
import { PromiseProvider } from "mongoose";

function TimeUpdateBlock(props) {
	return (
        <div className="border p-2">
            {props.editState || <button className = "btn btn-primary" type="button" onClick={() => props.edit(props.name)}>Edit</button>}


        <p>{props.children}: {props.excercise}</p>
            {props.editState && 
            (<Input
                id={props.name}
                name={props.name}
                type={props.type}
                change={props.change}
                state={props.state}
            >
                New / Update {props.children} Minutes :
              </Input>) }
              {props.editState && 
            (<Input
                id={props.name2}
                name={props.name2}
                type={props.type}
                change={props.change}
                state2={props.state2}
            >
                New / Update {props.children} Seconds:
            </Input> )}
              
        </div>
	);
}

export default TimeUpdateBlock;
