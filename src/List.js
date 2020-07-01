import React from "react";
import Item from "./Item";
import New from "./New";

export default function List(props){

    return (
        <div className="box">
            <Item 
                data={props.data}
                removeItem={props.removeItem}
            />
            <New sendData={props.sendData}/>
       </div>
    )
}