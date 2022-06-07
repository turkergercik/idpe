import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Conv from "../comp/conv";
import Possib, { b } from "../comp/posib";
import Mess from "../comp/mess";
import * as jose from 'jose'
import { get } from "../comp/conv";
import { render } from "timeago.js";
import { io } from "socket.io-client";

function Chat() {
  let prt="https://smartifier.herokuapp.com"
    const [current, setcurrent] = useState({cid:"",cnm:""});
    const [write, setwrite] = useState('');
    const [Some, setSome] = useState('');
    const [ani, setAni] = useState(false);
    const [bni, setBni] = useState(false);
    const[peop,setpeop]=useState([])
    const[mpeop,setmpeop]=useState([])
    const[messages,setmessages]=useState([])
    const[ne,setne]=useState([])
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = { Authorization:a};
    let nav = useNavigate()
    let n=[]
    useEffect(()=>{
      const socket = io("wss://smartifier.herokuapp.com")
      socket.emit("no",na.id)
      /* socket.on("ho",(e)=> console.log(e)) */
      /* socket.on("get",(e)=> {
      console.log(e)}) */
      socket.on("getm",(e)=> {
         n ={
          sender:e.sender,
          text:e.text,
          createdAt: Date.now(),
          receiver:e.receiver
        }
        setne(n)
        //setmessages((p)=>[...p,n])
        })
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


  useEffect(()=>{
    if(current.cam!==undefined){
    if(current.cam.includes(ne.sender)&&current.cam.includes(ne.receiver))
   { 
    setmessages((p)=>[...p,ne])

  }}
    //if(current)

  },[current,ne])
  
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


   },[])

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
    
   },[])

   
   useEffect(()=>{
     setTimeout(() => {
        let sc = document.getElementById("src")
        if(sc){
         sc.scrollTop=sc.scrollHeight
        }
      }, 0);
   },[messages])
  /*  useEffect(()=>{
    setmpeop(pre=>[...pre])
  },[mpeop]) */
     
   
   useEffect(()=>{
    
     
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
    
     
     
    
   },[])
    
   async function gon(event){
    const socket = io("wss://smartifier.herokuapp.com")

     let t = document.getElementById("tex")
     event.preventDefault()
     
    
   if(t.value !==""){
    socket.emit("send",{sender:na.id,receiver:current.cri,text:t.value})
     await axios.post(`${prt}/messages`,{
      conversationid:current.cid,
      sender:na.id,
      text:t.value
     }).then((res)=>{ 
      t.value=""
      setwrite("")
       setmessages(prev =>[...prev,res.data])
       //console.log(messages)
       
       
     }).catch((err)=>{
      console.log("hata")
    })
  }}

  //console.log(current.cid)
 
    if(ani&&bni){
      return(<div className="min-h-screen bg-[#c4b5fd]  justify-center pt-10 px-2 lg:px-2 grid grid-cols-8  gap-2 ">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md pt-3 col-span-2">
      <input value={Some} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name" onInput={e => setSome(e.target.value)}  name="name" type="text" autoComplete="name" />
      <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
      <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Mesajlar</span>
</div>
    {mpeop.map((c,i)=> (<Conv key={i} k={i} mesa={mpeop} changeconv={setmpeop} setmessage={setmessages} cur={setcurrent} convs={mpeop[i]} setnewm={ne}/>)
    

    )}
   
    
      </div>
    
        {current.cid!==""?(   <div className="bg-indigo-100  md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 "> 
         
         <div id="src" className="scrollbar md:scrollbar-width-2 xs:scrollbar-width-1 flex-col mb-1 hover:scrollbar-track-indigo-500  scrollbar-track-spec scrollbar-thumb-indigo-500 scroll-smooth hover:scrollbar-thumb-white md:h-[550px] xs:h-[590px] pr-4">
            <span className="sticky top-1 text-indigo-800  xs:text-xs md:text-xl pl-1 xs: rounded-sm md:rounded-md pr-1 bg-[#c4b5fd]">{current.cnm}</span>
            {messages.map((c,i)=>(<Mess key={i} own={messages[i].sender} message={messages[i]} setmessage={setmessages} />))}
            <div id="h"></div>
             
           
            
             </div>
             <div className="xs:pb-2 md:pb-0 xs:pr-1  md:pr-2.5">
               <input id="tex" className="focus:outline-none flex w-full  focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md"
               //onInput={e => {setwrite(e.target.value)}} 
               
               name="password" type="text" autoComplete="text"  />
            
             </div>
          
   
           <div className=" md:pt-2 xs:pt-0 xs:pr-1 md:pr-2.5">
           
             <button onClick={gon}  className="w-full flex justify-center pb-1 py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Gönder</button>
           </div>
       </div>):(   <div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 "> 
            
            Lütfen bir sohbet seçiniz
       </div>)}
     
        <div className="pt-2 col-span-2">
        <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
      <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Kişiler</span>
</div>
        {peop.map((c,i)=> (<Possib key={i}  cur={setcurrent} mesa={mpeop} message={setmpeop} person={peop[i]}/>)
     

     )}
     

        </div>
    </div>)
    }  else if(ani===false&&bni===false){
      return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
    else{
      setTimeout(() => {
        setAni(true)
        setBni(true)
      }, 150);
      return (<div className="grid place-items-center h-screen bg-[#c4b5fd]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
  
  }
  
  export default Chat;
  