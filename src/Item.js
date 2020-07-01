import React from "react";

export default function Item(props){

    function handleClick(event){
        const index = event.target.value;
        event.preventDefault();
        props.removeItem(index);
    }

    function showList(entry, index){
        return (
            <form key={index}>
            <div className="item">
                <input type="checkbox" value={index} onClick={handleClick} name="checkbox"></input>
                <p>{entry}</p> 
            </div>
            </form>
        );
    }


    return (    
        props.data.map(showList)
    );
}