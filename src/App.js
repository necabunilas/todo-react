import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Day from "./Day";
import List from "./List";

//main socket connection
const socket = io.connect('https://honest-toonie-33810.herokuapp.com/')

export default function App() {

  const [items, setItems] = useState([]);

  function getDay() {

    const today = new Date();
  
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  
    let date = today.toLocaleDateString("en-Ph", options);
    return date;
  
};

  //Listener
  useEffect(function(){
    //reply for logging in
    socket.on('items', (data) => {
      //message received
      setItems(data);
    })
    
  },[])

  function saveData(data){

    socket.emit('new', { 
      date: getDay(), 
      item: data
    });

  }

  function removeItem(indexRem){
    let remove = items.filter(function(item){
      return items[indexRem] === item;
    })
    
    socket.emit('remove', remove);
  }

  return (

    <div>
      <Day getDay={getDay()}/>
      <List 
        sendData={saveData}
        removeItem={removeItem}
        data={items}
      />
    </div>

  );
  
}
