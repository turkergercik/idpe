import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react';
import { useHref,useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import splash from "./images/ss.svg"


function Reg() {
    let  nav =useNavigate()
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [emailc, setemailc] = useState(false);
    const [passwordc, setpasswordc] = useState(false);
    const [Password, setPassword] = useState('');
    const [ani, setAni] = useState(false);

    
    async function a(event){
      
        
      event.preventDefault()
      if(Name.trim()!==""&& emailc===true&&passwordc===true){
        await axios.post("https://smartifier.herokuapp.com/register",{
          name: Name,
          email:Email,
          password:Password,
          notid:""
      }).then((response) => {
        if(response.data.data!=="0"){nav("/login")}
        let b = document.getElementById("email1")
        b.innerHTML=response.data.message
        
        
        })
        
  
      setName("")
      setEmail("")
      setPassword("")
      } else{
        const a = document.getElementById("uyarı")
        a.innerHTML="Lütfen tüm alanları eksiksiz doldurun"
  
      }
      }
  
       
      
    
   /*  async function a(event){
      
      event.preventDefault()
      
        await axios.get("/del").then((response) => {
            console.log(response.data);
          }, (error) => {
            console.log(error);
          });
     
      setName("")
      setEmail("")
      setPassword("")
    } */
    useEffect(()=>{
      const a = document.getElementById("uyarı")
      if(a)
       { a.innerHTML=""}
      
     ev()
     x()
  


    },[Email,Password,Name])
    function ev(){
      const a = document.getElementById("email1")
      if(a)
      {const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if(Email.trim()!==""){
        if(Email.match(re)!==null){
          a.innerHTML=""
          setemailc(true)
        }else{
          a.innerHTML="geçerli bir email giriniz."
          setemailc(false)
        }
       
      }else{
          //a.innerHTML="bu alanı doldurmalısnız"
          setemailc(false)
      }
    }}
    function n(){
      const a = document.getElementById("name1")
      if(a){
        if(Name.trim()===""){
          a.innerHTML="bu alanı doldurmalısınız"
        }else{
          a.innerHTML=""
        }


      }


    }
    function x(e){
      const a = document.getElementById("passwordHelp")
      if(a){  
        
      if(Password.trim()!=="" ){
        if(Password.length>4)
        {
          a.innerHTML=""
          setpasswordc(true)}
      else{
        a.innerHTML="Şifreniz zayıf"
        a.className="text-xs text-red-700"
        setpasswordc(false)
      }
      
      }else{
      //a.innerHTML="bu alanı doldurmalısınız"
      setpasswordc(false)
      
    }}}
    if(ani){
     return( <div className="min-h-screen bg-[#fcfbf4]flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12" src={splash} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Hesabınızı Oluşturun</h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Zaten Kayıtlıysanız 
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"> Giriş Yapın</a>
          </p>
        </div>
      
        <div className="mt-8 sm:mx-auto sm:w-80 sm:max-w-md">
          <div className="bg-white py-7 px-7 shadow rounded-lg sm:px-30">
          <span className="text-xs text-red-700" id="uyarı"></span>

            <form className="mb-0 space-y-6">
      
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div>           

                  <input value={Name} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md w-full" id="name" onInput={e => setName(e.target.value)}  name="name" type="text" autoComplete="name" />
                  <span className="text-xs text-red-700" id="name1"></span>
                </div>
              </div>
      
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div>
                  <input value={Email} className="required focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 px-1 rounded-md w-full" id="email"  onInput={e => setEmail(e.target.value)} name="email" type="email" autoComplete="email" />
                  <span className="text-xs text-red-700" id="email1"></span>
                </div>
              </div>
      
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div>
                  <input value={Password} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md w-full" id="password"  onInput={e => setPassword(e.target.value)} name="password" type="password" autoComplete="current-password"  />
                  <span className="text-xs text-red-700" id="passwordHelp"></span>

                </div>
              </div>
      
              <div className="flex items-center">
                <input className="accent-indigo-500" id="terms-and-privacy" name="terms-and-privacy" type="checkbox" />
              
                  <p className="text-indigo-600 ml-2 hover:text-indigo-500">Okudum ve onaylıyorum</p>
            
              </div>
      
              <div>
                <button value={"submit"} onClick={a} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Kaydol</button>
              </div>
            </form>
          </div>
        </div>
      </div>)
    }else{
      setTimeout(() => {
        setAni(true)
      }, 100);
      return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
  
    }
  
  }
  
  export default Reg;
  