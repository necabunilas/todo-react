import React from "react";

export default function Day(props){

    return (
        <div className="box" id="heading">
            <h1> {props.getDay} </h1>
        </div>
    )
}