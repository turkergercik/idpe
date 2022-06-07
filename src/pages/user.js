import axios from "axios";
import React, { createContext, useContext, useEffect, useRef } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Pro} from"../App"
import * as jose from 'jose'
import SyncLoader from "react-spinners/SyncLoader";


//https://smartifier.herokuapp.com
function User() {
 const [Some,setSome]=useState("")
 const [Ome,setOme]=useState(false)
 const [ani, setAni] = useState(false);
 const [bni, setBni] = useState(false);
 const [cni, setCni] = useState([1,2,3,4]);
 const ref =useRef()
 let nav =useNavigate()
 const a = localStorage.getItem("token")
 const na=jose.decodeJwt(a)
 const headers = { Authorization:a};
 const {aut,setAut}=useContext(Pro)
 //ref.current=d
 localStorage.setItem("aut",JSON.stringify({"isA":true,"name":na.name,"id":na.id}))
 async function d(){
   setAni(true)
    await axios.get("https://smartifier.herokuapp.com/user",{headers}
    ).then((res)=>{
      setBni(true)
      //localStorage.setItem("aut",JSON.stringify({"isA":true}))
      if(res.data.data==="tokExp"){
        localStorage.clear()
        nav("/login")
        window.location.reload()
        //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
      }
    setOme(res.data.message)
    //console.log(res.data.data)
  }).catch((r)=>console.log(r))
   }
   async function c(event){
     
    event.preventDefault()
     await  axios.post("https://smartifier.herokuapp.com/user",{some: Some},{headers} 
  ).then(()=>{}).catch(error => {
      console.log(error)}
    );
    setSome("")
    window.location.reload()
    
  }

  useEffect(()=>{
   
   d()  
   return function(){} 
   //setAni(false)
  },[])

  if(ani&&bni){
    return (
      <div className="min-h-screen bg-[#c4b5fd] flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        </div>
      
        <div className="mt-8 sm:mx-auto sm:w-80 sm:max-w-md">
          <div className="bg-white py-7 px-7 shadow rounded-lg sm:px-30">
            <form className="mb-0 space-y-6">
      
            <div>
                <label htmlFor="name" className="text-sm flex justify-center font-medium text-gray-700">Alan</label>
                <div>
                  <div className="text-lg flex justify-center text-indigo-700" id="passwordHelp">{Ome}</div>
                  <input value={Some} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md w-full" id="name" onInput={e => setSome(e.target.value)}  name="name" type="text" autoComplete="name" />
                </div>
              </div>
              <div>
              <button onClick={c} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Veri değiştir</button>
              </div>
            </form>
          </div>
        </div>
      </div>
       
          )


  }else if(ani===true&&bni===false){
    return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
    <SyncLoader color={"#F5A620"}  size={15} />
    </div>)
  }else{
    setTimeout(() => {
      setAni(true)
      //setBni(true)
    }, 150);
    return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
    <SyncLoader color={"#F5A620"}  size={15} />
    </div>)

  }
   
  }
  
  export default User;

  