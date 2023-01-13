import React, { createContext,useContext,useEffect,useRef,useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link,Navigate, useNavigate, useLocation } from "react-router-dom";
import Reg from "./pages/register"
import Log from "./pages/login"
import User from "./pages/user"
import Peer from "simple-peer"
import { App as app } from '@capacitor/app';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import Protect from "./pages/protected"
import Home from './pages/home';
import {Protect1} from "./pages/protected"
import Chat from './pages/chat';
import { LocalNotifications } from '@capacitor/local-notifications';
import Chatid from './pages/chatid';
import Webcam from './pages/webcam';
import { io } from "socket.io-client";
import { PushNotifications } from "@capacitor/push-notifications";
import { Capacitor } from "@capacitor/core";
import Redirect1 from "./pages/redirect"
import Images from './pages/images';
import * as jose from 'jose'
import { Storage,Drivers } from '@ionic/storage';
import OneSignal from "onesignal-cordova-plugin"
import { create } from 'filepond';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { async } from '@firebase/util';
import { StatusBar, Style } from '@capacitor/status-bar';
import { CameraSource } from '@capacitor/camera';
import { ReactComponent as Accept } from "./pages/images/accept.svg"
import { ReactComponent as Decline } from "./pages/images/decline.svg"
//import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/';
//import { CameraPreview } from '@capacitor-community/camera-preview';

export const Pro = createContext()

function App() {
 

  let darktext="dark:text-[#F0EFE9]"
  let bgfordarkmode="dark:bg-[#1a1a1a]"
  let whitefordark="dark:text-[#F0EFE9]"
  let svgcolor="text-[#097EFE]"
  let bg="bg-[#097EFE]"
  let specialwhitebg="bg-[#F0EFE9]"
  let specialwhitetext="text-[#F0EFE9]"
  let bordercolor="border-[#097EFE]"
  let textcolorblue="text-[#097EFE]"
  let svgsearch="text-[#60ACFF]"
  let bginput="bg-[#F0EFE9]"
  let divisionlinedark="dark:divide-[#F0EFE9]"
  let darkborderinput="dark:border-[#F0EFE9]"
  let focusvgsearch="focus:border-[#097EFE]"
  let divisioncolor="divide-[#90C5FF]"
  let divisioncolorforfirstline="border-[#90C5FF]"
  let maincolor="bg-white"
 
  const [ me, setMe ] = useState("")
  const [ name, setname ] = useState("")
	const [ stream, setStream ] = useState(null)
  const [ camt, setcamt ] = useState(true)
  const [ pprenew, setpprenew ] = useState(true)
  const [ppcheck,setppcheck]=useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
  const [profilepicture,setprofilepicture]=useState()
  const [seen,setseen]=useState(null)
	const [ callAccepted, setCallAccepted ] = useState(false)
  const [ isclick, setisclick] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
  const [ cr, setcr] = useState(false)
  const [ inchat, setinchat] = useState(false)
  const[typing,settyping]=useState(false)
  const[all,setall]=useState([])
	const userVideo = useRef(null)
  const chatsbackup = useRef(null)
  const peer1 =useRef()
  const conid =useRef()
  const userid =useRef()
  const peer2 =useRef()
  const cam =useRef(true)
  const peer =useRef(null)
  
  let nav =useNavigate()
  const messagesfromdb = useRef("getget")
  const ppch = useRef(null)
  const [isDarkMode, setDarkMode]=useState(false)
  const curref =useRef(["null"])
  const[messages,setmessages]=useState([])
  const[mpeop,setmpeop]=useState([])
  const[peop,setpeop]=useState([])
  const id = useRef()
 
  const[e,sete]=useState()
  const[f,setf]=useState()
  const[cur,setcur]=useState([])
  const[flag,setflag]=useState(false)
  const[cur1,setcur1]=useState([])
  const no = useRef(false)
  const [flag1,setflag1] = useState([])
  const[ne,setne]=useState([])
  let na 
  const aa = localStorage.getItem("token")
  const headers = { Authorization:aa}
  let front={
    audio: false,
    video: {
      facingMode:"user",
      frameRate: { min:22,ideal: 25, max:30 }
    }
  }
  let back={
 audio: false,
    video: {
      facingMode:"environment",
      frameRate: { ideal: 25, max: 30 }
    }}
  if(aa&&localStorage.getItem("is_reloaded")!==null&&localStorage.getItem("is_reloaded")){
    
     na=jose.decodeJwt(aa)
    }else{
    if(Capacitor.getPlatform()==="web") localStorage.clear()

    //await store.current.remove("chatsbackup")
   

      //nav("/login")
   
         

     }
     //let prt="https://smartifier.onrender.com"
     let prt="http://192.168.1.130:3001"
const socket = useRef()
async function as() {
  if(Capacitor.getPlatform()!=="web"){//await StatusBar.setStyle({ style: Style.Light});
  
  ///StatusBar.setOverlaysWebView({ overlay:true});
  await StatusBar.setBackgroundColor({color:"#000000"})
}
  const contents = await Filesystem.readFile({
    path: 'out.json',
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  }).catch(()=>{})
  if(contents){
  console.log("bok")
  let ab =JSON.parse(contents.data).conversationid

  if(ab!==undefined&&ab!==""){
setflag(true)
  nav(`/chat/${ab}`)

  }else{
    setflag([])
  }
  await Filesystem.writeFile({
    path: 'out.json',
    data: JSON.stringify({conversationid:""}),
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  });}


}
  const loc = useLocation()
  const vid= useRef(null)
  const store= useRef(null)
  const [ s, sets ] = useState(null)
  const [ i, seti ] = useState(true)

  useEffect(()=>{
    
    app.addListener("pause",()=>{
      seti(true)
      //socket.current.emit("outchat",cur.cri)
      socket.current.emit("dc")
      //setinchat(false)

    })
    app.addListener("resume",()=>{
      seti(false)

    
      socket.current.emit("no",na.id)
        })

        return ()=>{
          app.removeAllListeners()
        }
    
},[])
useEffect(()=>{
if((cur.cri!==undefined||cur.length!==0)&&!i){

  socket.current.emit("inchat",cur.cri,cur.cid,cur.csi)
seti(true)


}
},[i,cur])
  useEffect(()=>{

   /*  document.addEventListener("visibilitychange", (event) => {
      if(sessionStorage.getItem("is_reloaded")){


      }else{
      if (document.visibilityState == "visible") {
        sessionStorage.setItem("is_reloaded",true)
      } else {
        sessionStorage.clear()
      }}
    }); */
   
    document.addEventListener("visibilitychange", (event) => {
   
      if (document.visibilityState == "visible") {
        localStorage.setItem("is_reloaded",true)
      } else {
        localStorage.setItem("is_reloaded",false)
       
      }
    });
    
    store.current = new Storage({
      name: 'localedb.db',
      //driverOrder:[CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });
    async function create(){
     //let aa=await store.current.defineDriver(CordovaSQLiteDriver);
     
     let bb=await store.current.create();
 await store.current.set("socket",false)
    // console.log(store.current)
if(Capacitor.getPlatform()==="web"){
  //console.log("evet")
    if(localStorage.getItem("is_reloaded")){
//console.log("ok")
    }else{
      console.log("pl")
      localStorage.clear()
      await store.current.clear()
    }
  
  }
    }
        
  create()


  },[])
  useEffect(()=>{
    async function delseen(){
await store.current.remove("chatsbackup")
//await store.current.remove("pp")
setpeop([])
//  setall([])
    }
    setTimeout(() => {
    
      if(flag===true){
      delseen()
    }else if(flag===false){
      if(Capacitor.getPlatform()==="web"){
         delseen()
      }
    }else if(flag.length===0){
      delseen()
    }
    }, 0);
  },[flag])
  useEffect(()=>{


      as()

   

  },[f])
  useEffect(()=>{

    //sete([])
  /*   async function del(){
      if(Capacitor.getPlatform()==="Web"){
        console.log("heyyı")
        await store.current.remove()
        //sete([])
       


      }

    }
del() */

    let x =localStorage.getItem("darkmode")
   if(x!==null) {
    if(x==="true"){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  
      
   
   
    
   }else{
    //console.log("kk")
    setDarkMode(false)
   }
   
  
    async function asas(){
      
      if(Capacitor.getPlatform()!=="web"){
    const contents1 = await Filesystem.readFile({
      path: 'sync.json',
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    }).catch(()=>{})
    if(contents1){
      let ab =JSON.parse(contents1.data)
      no.current=true
      let allconv=Object.keys(ab)
      
      //alert(Array.isArray(ab[allconv]))
      //setno(Object.keys())
    allconv.forEach(async(k,i)=>{
      let newme = await store.current.get(k)
if(newme!==null){

  //alert(no)
  //alert("var")
      newme=[...ab[k].reverse(),...newme]
      await store.current.set(k,newme)
      setf([])
     //setf([])
     setTimeout(() => {
       sete([])
      
     }, 0);
      //setne([])
      //setmessages(newme)
}else{
  
  if(ab[k]!==null){
  newme=[ab[k][0]]
  await store.current.set(k,newme)
 /*  let newchat = store.current.get("chats")
  if(newchat!==null){
let newc= [...newchat,]
    await store.current.set("chats")
  } */

}}
/* let chat =await store.current.get("chatsbackup")
    let result 
    //const time=new Date(Date.now()).toISOString()
     chat.forEach((v,i) => {
      if(v._id===k){
        console.log(chat[i])
        result = i
      }
    })
    console.log(chat)
    chat[result].updatedAt= k.createdAt
    console.log(chat)
  await store.current.set("chatsbackup",chat) */
   


    })
      
    await Filesystem.deleteFile({
      path: 'sync.json',
      directory: Directory.Data
    }).then(()=>{}).catch(()=>{})
  
    }
    

}
  }
  
asas()
async function bb(){
 
  let n
  socket.current=io(prt)
  
  socket.current.emit("no",na?.id)
  /* socket.current.on("ho",(e)=> console.log(e)) */
  socket.current.on("get",(e)=> {
    //setinchat(false)
    console.log(e)
    setall(e)
  //console.log(e)
})
socket.current.on("newpp",async(e)=> {
  //setinchat(false)
let n =await store.current.get("chatsbackup")
n.forEach((a)=>{
if(a.members[0]===e||a.members[1]===e){
setpprenew([])
  console.log("wwe")
}
})
  
//console.log(e)
})
socket.current.on("inchat",async(e)=> {
  setinchat(true)
  console.log("9991")
 //let back=await store.current.get("chatsbackup")
let result
 chatsbackup.current?.forEach(async(c,i)=>{
if(c._id===e.b){
  result=i
  if(c.seen[0]===false){
    console.log("ok***")
c.seen[0]=true
await store.current.set("chatsbackup",chatsbackup.current)

}


}

 })
 console.log(chatsbackup.current)
  if(curref.current?.cid===e.b){

socket.current.emit("inchat",e.s)
  }


  
//console.log(e)
})
socket.current.on("outchat",(e)=> {
  setinchat(false)
  console.log("çıktı")
 //console.log(e)
 })
 socket.current.on("typing",(e,w)=> {
  
  settyping({status:true,conversationid:w})

 //console.log(e)
 })
 socket.current.on("nottyping",(e)=> {

  settyping({status:false})

 //console.log(e)
 })

let c= front
   front.audio={echoCancellation:true}

let tream
   //socket.current = io(prt)
    const getUserMedia = async () => {
      try {
     tream = await navigator.mediaDevices.getUserMedia(c)
      //tream.getVideoTracks().forEach((t) => t.enabled=false)
        setStream(tream)
        //setStreamf(tream3)
        //alert(tream3,tream)
       
        if(vid.current!==null)
       { 

    //Our first draw
    vid.current.srcObject = tream   
    vid.current.play()    
      }
     
    
    }catch (err) {
   
        console.log(err);
        alert(err)
      }
    };
    //getUserMedia();
    
    
	/* 	navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
      setTimeout(() => {
        v.current.srcObject = stream
      }, 0);
		}) */
    if(socket.current){
    socket.current.on("ended",()=>{
     
      console.log("bitti")
      setCallEnded(false)
      //peer.destroy()
      setReceivingCall(false)
      if(loc.pathname==="/webcam"){
      nav(`/chat/${conid.current}`,{replace:true})}
      //window.location.reload()
      //setAni(false)
      //getUserMedia()
    

    })
  socket.current.emit("no",na?.id)
  //socket.current.on("get",e=>console.log(e))
  socket.current.on("m",(r)=>{
    console.log(all)
    if(r.conid===undefined){
    console.log(r)
    console.log("7")
    setIdToCall(r.socketId)
    id.current = r.socketId
  }else{
    setReceivingCall(false)
    console.log("8")
    conid.current=r.conid
    userid.current=r.userId
  }
  })
	socket.current.on("me",(r) => {
    //console.log(r)
			setMe(r)
		})
	  socket.current.on("calling", (data) => {
      console.log(data)
			setReceivingCall(true)
			setCaller(data.from)
			setCallerSignal(data.signal)
      setname(data.name)
		})}
   

  socket.current.on("getm",async(e)=> {
     n ={
      sender:e.sender,
      text:e.text,
      createdAt:e.createdAt,
      receiver:e.receiver,
      media:e.media,
      conversationid:e.conversationid,
      isNotification:e.isNotification
    }
    console.log("lllllll")
    setne(n)
    //no.current=false
    //alert(e.isNotification)
    if(e.isNotification){
socket.current.emit("send",{
      sender:e.sender,
      text:e.text,
      createdAt: e.createdAt,
      receiver:e.sender,
      conversationid:e.conversationid
})


    }
    console.log(n)
    console.log(cur)
    await store.current.set("socket",true)
    if(e.conversationid===curref.current?.cid){
 
      setmessages((p)=>[n,...p])
      console.log("evet")
    }
    
    let newm = await store.current.get(e.conversationid)
    let chats = await store.current.get("chatsbackup")
    console.log(newm)
    if(newm){
      /* chats=[{members:["62e00593f164d9c569bd635a","sadas","trk","vfg",true,true]},...chats]
    
      await store.current.set("chatsbackup",chats)
      sete(chats) */
    newm  = [n,...newm]
    await store.current.set(e.conversationid,newm)

    }else{
    /*   chats=[{members:["62e00593f164d9c569bd635a","sadas","trk","vfg",true,true]},...chats]
    
    await store.current.set("chatsbackup",chats)
    sete(chats) */

      await store.current.set(e.conversationid,[n])
    }
    if(chats!=null){
      console.log("1")
      let filtered 
      chats.forEach((v,i)=>{

       if(v._id===e.conversationid){
           filtered=i
       }
     
      })
      if(filtered!==undefined){
        console.log(filtered)
     let x=[chats[filtered]]
     console.log(x)
    
     if(x.length===0){
        
        await store.current.remove("chatsbackup",)
        sete([])
     }else{
      
      const time=new Date(Date.now()).toISOString()
        chats[filtered].updatedAt=time
      console.log("var")
      /* if(x[0].members[4]===true&&x[0].members[5]===true){
        await store.current.remove("chatsbackup")
        sete([])
      
      }
    alert(x) */
    
      if(x[0].members[0]===na.id&&x[0].members[4]===false){
        chats[filtered].members[4]=true
       /*  if(inchat===true){
        chats[filtered].seen=[true,na.id]} */
        
        await store.current.set("chatsbackup",chats)
        await store.current.remove(e.conversationid )
        sete([])
        await axios.put(`${prt}/conversations/${e.conversationid}`,{
          senderdel:true,
        }).then((res)=>{
          console.log(res)
          //resp=[res.data.members[4],res.data.members[5]]
          //setcur()
      
         
          //console.log("bu da")
        }).catch((e)=> console.log(e))
  
      }else if((x[0].members[1]===na.id&&x[0].members[5]===false)){
        chats[filtered].members[5]=true
        /* if(inchat===true){
          chats[filtered].seen=[true,na.id]} */
        const time=new Date(Date.now()).toISOString()
        chats[filtered].updatedAt=time
        await store.current.set("chatsbackup",chats)
        await store.current.remove(e.conversationid )
        sete([])
        await axios.put(`${prt}/conversations/${e.conversationid}`,{
          receiverdel:true,
        }).then((res)=>{
          console.log(res)
          //resp=[res.data.members[4],res.data.members[5]]
         // setcur()
      
         
          //console.log("bu da")
        }).catch((e)=> console.log(e))
   
      }else {
        console.log("ok7999888")
        await store.current.set("chatsbackup",chats)
        sete([])

      }
 
      
     
     }}else{
      await store.current.remove("chatsbackup",)
        sete([])
      console.log("yok")
   
     }
    }
    
    })
}
bb()
      return () => {
        socket.current.disconnect()
     
        if(peer1.current!==undefined){
          //peer1.current.destroy()
        }
    //socket.current.disconnect()
        //connectionRef.current.destroy()
        //if(stream){ stream.getTracks().forEach((t) => t.stop())}
       // socket.current.disconnect()
 }
  
  
  
  
  
  
    },[])
    

    useEffect(()=>{
  

      async function get1(e){
        console.log("ololol")
        const convers = await axios.get(`${prt}/all`,{headers}).then(async(res)=>{
          if(res.data==="tokExp"){
            localStorage.clear()
            nav("/login")
            window.location.reload()
            //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
          }
         //await db.remove("pp")
          setpeop(res.data)
        
         //console.log(res.data)
      }).catch((err)=>{
          console.log(err)
        })
      }
      if(na!==undefined)get1()
     },[pprenew])
/* useEffect(()=>{
  console.log(loc.pathname)
  if(loc.pathname==="/webcam"){
    setStream(null)
  
    
    }else{
      setStream("null")
     }
      

},[loc]) */




 useEffect(()=>{
  
  setTimeout(() => {
    //setStream(null)
    
  }, 5000);
  setmessages([])
  
  setseen(null)
  //setppcheck(true)
},[cur])
 const answerCall =() =>  {
  setCallAccepted(true)
   peer2.current = new Peer({
    initiator: false,
    trickle: false,
    
  })
  peer.current=peer2.current
  peer2.current.on("signal", (data) => {
    socket.current.emit("answerCall", { signal: data, to: caller })
  })
  peer2.current.on("stream", (stream) => {
    userVideo.current.srcObject = stream
    console.log(stream)
  })

  peer2.current.signal(callerSignal)
  //connectionRef.current = peer
}

/*     if(loc.pathname!=="/webcam"){
      if(vid.current!==null&&vid.current.srcObject!==null)
         {
          
           //let stream = vid.current.srcObject.getTracks()
         
             window.stream.getTracks().forEach((t) => t.stop())
           
          
       
     }else if(vid.current!==null){
    
 
        window.stream.getTracks().forEach((t) => t.stop())
     
    
   }else{
    if(window.stream){
      window.stream.getTracks().forEach((t) => t.stop())
    }
   }
   
  } */
  
  if(Capacitor.getPlatform()!=="web")
 { /* PushNotifications.addListener("pushNotificationActionPerformed", async(notification) => { 
  let ab = notification.notification.data.data
  alert("ok")
    nav("/r")
    setTimeout(() => {
      nav(`/chat/${ab}`)   
     
    }, 0);

  }) */
  const NotificationChannelm = {
    id:'1',// id must match android/app/src/main/res/values/strings.xml's default_notification_channel_id
    name: 'Pop notifications',
    description: 'Pop notifications',                
    importance: 5,
    sound:null,
    visibility: 1
}
const NotificationChannelf = {
  id:'2',// id must match android/app/src/main/res/values/strings.xml's default_notification_channel_id
  name: 'Pop notifications',
  description: 'Pop notifications',                
  importance: 5,
  sound:null,
  visibility: 1
}

LocalNotifications.createChannel(NotificationChannelm)
//PushNotifications.createChannel(NotificationChannelm)
//PushNotifications.createChannel(NotificationChannelf)
LocalNotifications.createChannel(NotificationChannelf)
}
const leaveCall = () => {
  // console.log({me:me,caller:caller,receiver:idToCall})

   socket.current.emit("ending",idToCall,me,caller)
   //setCallEnded(true)
   //setReceivingCall(false)
   //connectionRef.current.destroy()
   //window.location.reload()
 }
   let a = localStorage.getItem("aut")
   let b = JSON.parse(a)
   //let a = localStorage.getItem("aut")
   const [aut,setAut]=useState(b)

   //const [cam,setcam]=useState(false)
 /*  if(a){
    as()
  
  } */
/*   function a(){
    window.location.href="/reg"
 element={<Navigate to="/reg" replace />}
  } */
  //gconsole.log(cur)
 /*  let goback = window.onpopstate = e => {
    //your code...
    document.getElementById("11").classList.remove("animate-wiggle").add("animate-wiggle1")

  } */
// "0%":{transform: "translateY(0%) "}, "100%": { transform: "translateY(-100%)"},



return (
    <><div id='11' className={isDarkMode ? "dark unselectable z-10":"unselectable"}>




    <Pro.Provider value={{ aut, setAut }}>


      {/*  <div className={`absolute mx-2 z-10 top-2 right-0 left-0 rounded-lg ${bginput} ${bgfordarkmode}  h-24 `}>
   <div className="flex flex-col items-center w-full ">
             <h1 className={`text-center mt-3 mb-2 font-bold ${darktext} ${textcolorblue}`}>{name} seni arıyor neredesin sen...</h1>
            
             <div className="flex flex-row">
               <div className={`flex items-center h-12 pb-1 rounded-md `}>
                 <span className='absolute h-9 m-1 w-9 bottom-2  z-10 bg-white rounded-full '></span>
               <Accept className={`text-green-700 z-10 w-12 h-12 mr-2 `}  onClick={()=>{
                 //setCallAccepted(true)
         console.log(id.current)
         setcr(true)
         //answerCall()
         nav("/webcam",{state:{userid:userid.current,conid:conid.current}})
         
         }} />
    
             </div>
             <div className={`flex items-center pb-1  ml-1 h-12 rounded-md`}>
             <span className='absolute h-9 m-1 w-9 bottom-2 z-10 bg-white rounded-full '>  </span>

             <Decline className='text-red-600 z-10 w-12 h-12' onClick={()=> leaveCall()} />
             </div>
             </div>
             </div>
 
 
      
      
       </div> */}


      {/* <div className={`absolute mx-2 z-10 top-2 right-0 left-0 rounded-lg ${bginput} ${bgfordarkmode}  h-20 `}>
  <div className="flex flex-col items-center w-full ">
                      <h1 className={`text-center my-1 font-bold ${darktext} ${textcolorblue}`}>{name} Seni arıyor neredesin sen...</h1>
         
          <div className="flex flex-row  bottom-0 m-auto  ">
            <div className={`flex items-center h-10 rounded-md `}>
            <Accept className={`text-red-600  z-10  w-10 h-10 `} onClick={()=>{
      console.log(id.current)
      //answerCall()
      nav("/webcam",{state:{userid:userid.current,conid:conid.current}})
      
      }} />
   
          </div>
          <div className={`right-0 h-10 w-10  ml-1 rounded-md`}>
          <Decline className='text-green-700' onClick={()=> setReceivingCall(false)} />
          </div>
          </div>
          </div>


   
   
    </div> */}
      {aut === null ? (<div>
        {/* <div className='absolute left-2/4 text-center ' >helo</div> */}
        <button onClick={() => nav("/reg")} className="w-15 flex absolute right-0 mr-20 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Kaydol</button>
        <button onClick={() => nav("/login")} className="w-15 flex absolute right-2 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Giriş</button>
      </div>
      ) : (<div className="">
        {/*   <button onClick={async()=>{ localStorage.clear()
         await store.current.clear()
         setTimeout(() => {
           nav("/login")
         }, 100);
         
          window.location.reload()}
        }
          className="w-15 flex absolute right-2 mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">Çıkış</button> */}
        {/*     <div className='py-4 ml-72 px-96  absolute justify-center items-center bg-[#c4b5fd] text-xl text-indigo-700'>{aut.name} hoşgeldiniz</div>
        
        
        */}


      </div>)}{receivingCall && !callAccepted && loc.pathname !== "/webcam" ?
        <div className={`absolute mx-2 z-10 top-2 right-0 left-0 rounded-lg ${bginput} ${bgfordarkmode}  h-24 `}>
          <div className="flex flex-col items-center w-full ">
            <h1 className={`text-center mt-3 mb-2 font-bold ${darktext} ${textcolorblue}`}>{name} seni arıyor neredesin sen...</h1>

            <div className="flex flex-row">
              <div className={`flex items-center h-12 pb-1 rounded-md `}>
                <span className='absolute h-9 m-1 w-9 bottom-2  z-10 bg-white rounded-full '></span>
                <Accept className={`text-green-700 z-10 w-12 h-12 mr-2 `} onClick={() => {
                  //setCallAccepted(true)
                  console.log(id.current);
                  setcr(true);
                  //answerCall()
                  nav("/webcam", { state: { userid: userid.current, conid: conid.current } });

                } } />

              </div>
              <div className={`flex items-center pb-1  ml-1 h-12 rounded-md`}>
                <span className='absolute h-9 m-1 w-9 bottom-2 z-10 bg-white rounded-full '>  </span>

                <Decline className='text-red-600 z-10 w-12 h-12' onClick={() => leaveCall()} />
              </div>
            </div>
          </div>




        </div> : null}{callAccepted && !callEnded ?
          <div className=" absolute rounded-lg w-2/6 bg-black   left-auto  top-0 right-0 m-2 ">

            <video playsInline ref={userVideo} autoPlay className="rounded-lg object-contain h-full w-full" onClick={() => { } } /> </div> :
          null}
      <Routes>

        <Route exact path="/" element={aut === null ? <Navigate to="/login" /> : <Navigate to="/chat" />} />
        <Route element={<Protect />}><Route path="/reg" element={<Reg prt={prt} />} />
        </Route>
        <Route element={<Protect />}>
          <Route exact path="/login" element={<Log prt={prt} />} />
        </Route>

        <Route element={<Protect1 />}>
          {/*  <Route path="/user" element={<User />}/> */}

        </Route>
        <Route element={<Protect1 />}><Route path="/r" element={<Redirect1 sock={socket.current} />} /></Route>
        <Route element={<Protect1 />}><Route exact path="/chat" element={<Chat  typing={typing} ppch={ppch}  ppcheck={ppcheck} setppcheck={setppcheck} pprenew={pprenew} peop={peop} setpeop={setpeop} profilepicture={profilepicture} setprofilepicture={setprofilepicture} prt={prt} e={e} all={all} setDarkMode={setDarkMode} isDarkMode={isDarkMode} setcur={setcur} cur={cur} curref={curref} setflag1={setflag1} flag1={flag1} sock={socket} db={store.current} />} /></Route>
        <Route element={<Protect1 />}><Route path="/chat/:id" e={e}  element={<Chatid settyping={settyping} typing={typing} ppch={ppch} ppcheck={ppcheck} pprenew={pprenew} peop={peop} setpeop={setpeop}  chatsbackup={chatsbackup} seen={seen} setseen={setseen} inchat={inchat} setinchat={setinchat} all={all} prt={prt} ne={ne} setflag1={setflag1} flag1={flag1} isDarkMode={isDarkMode} db={store.current} setcur={setcur} cur={cur} curref={curref} setmessages={setmessages} messages={messages} sock={socket} />} /></Route>
        <Route element={<Protect1 />}><Route exact path="/webcam" element={<Webcam prt={prt} cur={cur} cr={cr} setcr={setcr} conid={conid} id={id} setMe={setMe} me={me} name={name} setname={setname} stream={stream} setStream={setStream} receivingCall={receivingCall} setReceivingCall={setReceivingCall} caller={caller} setCaller={setCaller} callerSignal={callerSignal} setCallerSignal={setCallerSignal} idToCall={idToCall} setIdToCall={setIdToCall} callEnded={callEnded} setCallEnded={setCallEnded} peer1={peer1} userVideo={userVideo} peer2={peer2} sock={socket} ss={sets} v={vid} />} /></Route>
        <Route element={<Protect1 />}><Route exact path="/image" element={<Images ss={sets} v={vid} />} /></Route>


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
  </div></>
  );
}

export default App;
