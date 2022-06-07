import React, { createContext,useContext,useEffect,useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link,Navigate, useNavigate } from "react-router-dom";
import Reg from "./pages/register"
import Log from "./pages/login"
import User from "./pages/user"
import Protect from "./pages/protected"
import Home from './pages/home';
import {Protect1} from "./pages/protected"
import Chat from './pages/chat';
import Webcam from './pages/webcam';

export const Pro = createContext()


function App() {
  //localStorage.clear()
   let nav =useNavigate()
   let a = localStorage.getItem("aut")
   let b = JSON.parse(a)
   //let a = localStorage.getItem("aut")
   const [aut,setAut]=useState(b)
  
/*   function a(){
    window.location.href="/reg"
 element={<Navigate to="/reg" replace />}
  } */
  return (
    <Pro.Provider value={{aut,setAut}}>    
    {aut===null ? ( <div> 
     {/* <div className='absolute left-2/4 text-center ' >helo</div> */}
      <button onClick={()=>nav("/reg")} className="w-15 flex absolute right-0 mr-20 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Kaydol</button>
 <button onClick={()=>nav("/login")} className="w-15 flex absolute right-2 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Giriş</button>
 </div>
):(<div>   <button onClick={()=>{ localStorage.clear()
  setTimeout(() => {
    nav("/login")
  }, 100);
  
   window.location.reload()}
 } 
   className="w-15 flex absolute right-2 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Çıkış</button>
{/*     <div className='py-4 ml-72 px-96  absolute justify-center items-center bg-[#c4b5fd] text-xl text-indigo-700'>{aut.name} hoşgeldiniz</div>


*/} 
 <button onClick={()=>nav("/chat")} className="w-15 flex absolute left-20 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Chat</button>
 <button onClick={()=>nav("/user")} className="w-15 flex absolute left-2 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Alan</button>
 <button onClick={()=>nav("/webcam")} className="w-15 flex absolute left-40 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Webcam</button>
   </div>)


    }
      <Routes>
      
        <Route exact path="/" element={aut===null ?<Home/>:<User />}/>
        <Route element={<Protect />}><Route path="/reg" element={<Reg />}/>
            </Route>
            <Route element={
            <Protect />
          }>
            <Route path="/login" element={<Log />}/>
            </Route>
            
            <Route element={
            <Protect1 />
          }>
            <Route path="/user" element={<User />}/>
            
            </Route>
            
            <Route element={<Protect1 />}><Route path="/chat" element={<Chat/>}/></Route>
            <Route element={<Protect1 />}><Route path="/webcam" element={<Webcam/>}/></Route>
         
         
         
         {/*    <Route exact path="/login" element={
            <Protect user={aut}>
              <Log/>
            </Protect>
          }/>
  
           <Route
          path="/user"
          element={
            <Protect user={aut}>
              <User/>
            </Protect>
          }/>  */}
         
        
       
        {/* <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Log/>}/>
        <Route path="/user" element={<User />} /> */}
     </Routes> 
   
    </Pro.Provider>
  );
}

export default App;
