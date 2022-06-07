import React from 'react';
import axios from 'axios';


const socket = new WebSocket('ws://localhost:3001/az');
 // Connection opened
 socket.addEventListener('open', function (event) {
      console.log('Connected to WS Server')
 });
    // Listen for messages
 socket.addEventListener("message",function incoming(e) {
  /* const arr = JSON.parse(e.data).data;
  let newData = '';
  arr.forEach((element) => {
    newData+=String.fromCharCode(element);
  });
  console.log(newData); */
  console.log(JSON.parse(e.data));
  //console.log('Message from server', e.data);
}); 

const d= () => {
  socket.send(JSON.stringify({val:"1"}));
};
const e= () => {
  socket.send(JSON.stringify({val:"0"}));
};
async function b() {
  await axios.put('/623e1a8852905354e77c3fdd',{ name:"1" })
  .then((response) => {
    console.log(response.data.name);
  }, (error) => {
    console.log(error);
  });
}
async function c() {
  await axios.put('/623e1a8852905354e77c3fdd',{ name:"0" })
  .then((response) => {
    console.log(response.data.name);
  }, (error) => {
    console.log(error);
  });
}
function App() {
  return (
      <div>
        <button onClick={b}>ac</button>
        <button onClick={c}>kapa</button>
        <button onClick={d}>gönder</button>
        <button onClick={e}>kapa</button>
      </div>
   
  );
}

export default App;
