import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Pro} from "../App"
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
    let nav =useNavigate()
   const {aut,setAut}=useContext(Pro)


   if(aut===null){
      
     
     return(
         <div className="min-h-screen bg-[#c4b5fd]">
            <div className=' grid place-items-center h-screen' >
            <p className='text-2xl text center text-indigo-700'>Hoşgeldiniz</p>
            </div>
              
         </div>
  
     )
  
         
        
         /* <button onClick={()=>{
         localStorage.clear()
         setTimeout(nav("/login"),100)
         }}>
            giriş yap
         </button> */
         
     

      
   }
   else return (


      <div className="min-h-screen bg-[#c4b5fd]">
      <div className=' grid place-items-center h-screen' >
      <p className='text-2xl text center text-indigo-700'>{aut.name} Hoşgeldiniz</p>
      </div>
        
   </div>
   )
 
 
  }
  
  export default Home;
  