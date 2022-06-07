import axios from "axios";
import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
function Log() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [warp, setWarp] = useState('');
    const [ware, setWare] = useState('');
    const [ani, setAni] = useState(false);
    const [bni, setBni] = useState(false);

    let nav = useNavigate()
    async function a(event){
      setBni(false)
      event.preventDefault()
      
        await axios.post("https://smartifier.herokuapp.com/login",{
            email:Email,
            password:Password
        }).then((response) => {
          setAni(false)
          if(response.data.data==="wp"){
            
            setWarp(response.data.message)
            setWare("")
          }
          else if(response.data.data==="we"){
            setWare(response.data.message)
          }
          else {
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("aut",JSON.stringify({"isA":true}))
          window.location.reload()
         /*  setTimeout(() => {
            nav("/user")
            
          }, 100); */
          
          nav("/user")
          
      
        }
            console.log(response.data);
          }, (error) => {
            console.log(error);
          });
      
      setEmail("")
      setPassword("")
    }

    if(ani&&bni){
      return(<div className="min-h-screen bg-[#c4b5fd] flex flex-col justify-center py-12 px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
    
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Giriş Yapın</h2>
    
      </div>
    
      <div className="mt-8 sm:mx-auto sm:w-80 sm:max-w-md">
        <div className="bg-white py-7 px-7 shadow rounded-lg sm:px-30">
          <form className="mb-0 space-y-6">
              
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div>
                <input value={Email} className="required focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 px-1 rounded-md w-full" id="email" onInput={e => setEmail(e.target.value)} name="email" type="email" autoComplete="email" />
                <span className="text-xs text-red-700" id="passwordHelp">{ware}</span>
              </div>
            </div>
    
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div>
                <input value={Password} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md w-full" id="password" onInput={e => setPassword(e.target.value)} name="password" type="password" autoComplete="current-password"  />
                <span className="text-xs text-red-700" id="passwordHelp">{warp}</span>
              </div>
            </div>
    
            <div>
              <button  onClick={a} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Giriş</button>
            </div>
          </form>
        </div>
      </div>
    </div>)
    }  else if(ani===true&&bni===false){
      return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
    else{
      setTimeout(() => {
        setAni(true)
        setBni(true)
      }, 100);
      return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
  
  }
  
  export default Log;
  