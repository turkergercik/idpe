import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Conv from "../comp/conv";
import Possib, { b } from "../comp/posib";
import Mess from "../comp/mess";
import * as jose from 'jose'
import { get } from "../comp/conv";
import { render } from "timeago.js";
import { io } from "socket.io-client";
import { CameraPreview } from '@capacitor-community/camera-preview';

function Chat({}) {
  let prt="https://smartifier.herokuapp.com"
    const [current, setcurrent] = useState({cid:"",cnm:""});
    const [write, setwrite] = useState('');
    const [Some, setSome] = useState('');
    const [ani, setAni] = useState(false);
    const [bni, setBni] = useState(false);
    const[peop,setpeop]=useState([])
    const[all,setall]=useState([])
    const[mpeop,setmpeop]=useState([])
    const[messages,setmessages]=useState([])
    const[ne,setne]=useState([])
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = { Authorization:a};
    let nav = useNavigate()
    let n=[]
    const socket = useRef()
    useEffect(()=>{
      socket.current=io(prt)
      socket.current.emit("no",na.id)
      /* socket.current.on("ho",(e)=> console.log(e)) */
      socket.current.on("get",(e)=> {
        setall(e)
      console.log(e)})
      socket.current.on("getm",(e)=> {
         n ={
          sender:e.sender,
          text:e.text,
          createdAt: Date.now(),
          receiver:e.receiver
        }
        setne(n)
        //setmessages((p)=>[...p,n])
        })
        return () => socket.current.disconnect()
    },[current])
/*     async function a(event){
      setBni(false)
      event.preventDefault()
      
        await axios.post("https://smartifier.herokuapp.com/login",{
            email:Email,
            password:Password
        }).then((response) => {
            console.log(response.data)
          }, (error) => {
            console.log(error);
          });
      
    } */


/*   useEffect(()=>{
    if(current.cam!==undefined){
    if(current.cam.includes(ne.sender)&&current.cam.includes(ne.receiver))
   { 
    setmessages((p)=>[...p,ne])

  }}
    //if(current)

  },[current,ne]) */
  
   useEffect(()=>{
    async function get1(){
      const convers = await axios.get(`${prt}/all`,{headers}).then((res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        setpeop(res.data)
        setAni(true)
       //console.log(res.data)
    }).catch((err)=>{
        console.log(err)
      })
    }
   get1()
   },[all])
 console.log("hey")
   useEffect(()=>{
    async function a(){
      const convers = await axios.get(`${prt}/conversations/${na.id}`,{headers}).then((res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        setmpeop(res.data)
       //console.log(res.data)
    }).catch((err)=>{
        console.log("hata")
      })
    }
   a()
    
   },[ne])

   
/*    useEffect(()=>{
     setTimeout(() => {
        let sc = document.getElementById("src")
        if(sc){
         sc.scrollTop=sc.scrollHeight
        }
      }, 0);
   },[messages]) */
  /*  useEffect(()=>{
    setmpeop(pre=>[...pre])
  },[mpeop]) */
     
  /*  useEffect(()=>{
    
     
      async function a(){
        if(current.cid){  const convers = await axios.get(`${prt}/messages/${current.cid}`,{headers}).then((res)=>{
          if(res.data==="tokExp"){
            localStorage.clear()
            nav("/login")
            window.location.reload()
            //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
          }
          setmessages(res.data)
          
       }).catch((err)=>{
         
          console.log("olmadı")
        })}
      
      }
     a()
    
     
     
    
   },[]) */
   // console.log(current.cri)
   /* async function gon(event){
     let t = document.getElementById("tex")
     event.preventDefault()
     
    
   if(t.value !==""){
    socket.current.emit("send",{sender:na.id,receiver:current.cri,text:t.value})
     await axios.post(`${prt}/messages`,{
      conversationid:current.cid,
      sender:na.id,
      text:t.value,
      receiver:current.cri,
      name:na.name
     }).then((res)=>{ 
      t.value=""
      setwrite("")
       setmessages(prev =>[...prev,res.data])
       //console.log(messages)
       
       
     }).catch((err)=>{
      console.log("hata")
    })
  }} */

  //console.log(current.cid)
 
    if(ani&&bni){
      return(<div className="min-h-screen bg-[#fcfbf4]  justify-center pt-10 px-2 lg:px-2 grid grid-cols-8  gap-2 ">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md pt-3 col-span-2">
      <input value={Some} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name" onInput={e => setSome(e.target.value)}  name="name" type="text" autoComplete="name" />
      <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
      <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Mesajlar</span>
</div>
    {mpeop.map((c,i)=> (<Conv key={i} k={i} mesa={mpeop} changeconv={setmpeop} setmessage={setmessages} messageler={messages} cur={setcurrent} convs={mpeop[i]} setnewm={ne}/>)
    

    )}
   
    
      </div>
    
<div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 "> 
            
            Lütfen bir sohbet seçiniz
       </div>
     
        <div className="pt-2 col-span-2">
        <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
      <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Kişiler</span>
</div>
        {peop.map((c,i)=> (<Possib key={i}  cur={setcurrent} mesa={mpeop} message={setmpeop} person={peop[i]}/>)
     

     )}
     

        </div>
    </div>)
    }  else if(ani===false&&bni===false){
      return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
    else{
      setTimeout(() => {
        setAni(true)
        setBni(true)
      }, 0);
      return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
  
  }
  
  export default Chat;
  