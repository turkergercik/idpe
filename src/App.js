import React, { createContext,useContext,useEffect,useRef,useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link,Navigate, useNavigate, useLocation } from "react-router-dom";
import Reg from "./pages/register"
import Log from "./pages/login"
import User from "./pages/user"
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
import Redirect from "./pages/redirect"
import Images from './pages/images';
import * as jose from 'jose'
import { Storage,Drivers } from '@ionic/storage';
import OneSignal from "onesignal-cordova-plugin"
import { create } from 'filepond';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { async } from '@firebase/util';


//import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/';
//import { CameraPreview } from '@capacitor-community/camera-preview';
export const Pro = createContext()

function App() {
  const curref =useRef(["null"])
  const[messages,setmessages]=useState([])
  const[mpeop,setmpeop]=useState([])
  const[cur,setcur]=useState([])
  const no = useRef(false)
  const [flag1,setflag1] = useState([])
  const[ne,setne]=useState([])
  let na 
  const aa = localStorage.getItem("token")
  if(aa){
     na=jose.decodeJwt(aa)}
  let prt="https://smartifier.herokuapp.com"
const socket = useRef()
async function as() {
  const contents = await Filesystem.readFile({
    path: 'out.json',
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  }).catch(()=>{})
  if(contents){
  console.log("bok")
  let ab =JSON.parse(contents.data).conversationid

  if(ab!==""){
  nav(`/chat/${ab}`)
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
  useEffect(()=>{
    store.current = new Storage({
      name: 'mydb.db',
      //driverOrder:[CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });
    async function create(){
     //let aa=await store.current.defineDriver(CordovaSQLiteDriver);
     
     let bb=await store.current.create();

     console.log(store.current)
    }
        
  create()


  },[])
  useEffect(()=>{
   
  
    async function asas(){
      let a = await store.current.get("socket")
      //alert(a)
      if(!a){
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
      newme=[...ab[k].reverse(),...newme ]
      await store.current.set(k,newme)
}else{
  
  if(ab[k]!==null){
  newme=[ab[k][0]]
  await store.current.set(k,newme)

}}

    })
      

  
    }
    /* await Filesystem.deleteFile({
      path: 'sync.json',
      directory: Directory.Data
    }).catch(()=>{}) */
}else{
  await store.current.set("socket",false)
}
  }
  
asas()
    
    let n
    socket.current=io(prt)
    socket.current.emit("no",na?.id)
    /* socket.current.on("ho",(e)=> console.log(e)) */
    socket.current.on("get",(e)=> {
    //  setall(e)
  //  console.log(e)
  })
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
      if(e.conversationid===curref.current){
   
        setmessages((p)=>[n,...p])
        console.log("evet")
      }
      let newm = await store.current.get(e.conversationid)
      console.log(newm)
      if(newm){
      newm  = [n,...newm]
      await store.current.set(e.conversationid,newm)

      }else{
        await store.current.set(e.conversationid,[n])
      }
      })
      return () => socket.current.disconnect()
  },[])
 


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

  let nav =useNavigate()
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
 
   let a = localStorage.getItem("aut")
   let b = JSON.parse(a)
   //let a = localStorage.getItem("aut")
   const [aut,setAut]=useState(b)
   const [cam,setcam]=useState(false)
  if(a) as()
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
):(<div>  <button onClick={async()=>{ localStorage.clear()
  await store.current.clear()
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
            <Route path="/login" element={<Log/>}/>
            </Route>
            
            <Route element={
            <Protect1 />
          }>
            <Route path="/user" element={<User />}/>
            
            </Route>
            <Route element={<Protect1 />}><Route exact path="/r" element={<Redirect sock={socket.current}/>}/></Route>
            <Route element={<Protect1 />}><Route exact path="/chat" element={<Chat mpeop={mpeop} setmpeop={setmpeop} setflag1={setflag1} flag1={flag1} sock={socket} db={store.current}/>}/></Route>
            <Route element={<Protect1 />}><Route exact path="/chat/:id" element={<Chatid ne={ne} setflag1={setflag1} flag1={flag1} mpeop={mpeop} setmpeop={setmpeop} db={store.current} setcur={setcur} curref={curref} setmessages={setmessages} messages={messages} sock={socket} />}/></Route>
            <Route element={<Protect1 />}><Route path="/webcam" element={<Webcam sock={socket} ss={sets} v={vid}/>}/></Route>
            <Route element={<Protect1 />}><Route path="/image" element={<Images ss={sets} v={vid}/>}/></Route>
         
         
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
