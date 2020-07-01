import React, { useState } from "react";

export default function New(props){

    const [newItem, setItem] = useState("");

    function handleChange(event){
        const data = event.target.value;
        setItem(data);
    }

    function handleClick(event){
        event.preventDefault();
        if(newItem === ""){

        }else{
            props.sendData(newItem);
        }
        setItem("");
    }

    return (
        <form className="item">
            <input type="text" onChange={handleChange} value={newItem} placeholder="New Item" autoComplete="off"></input>
            <button type="submit" onClick={handleClick}>+</button>
        </form>
    );
}