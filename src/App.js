import React, { createContext,useContext,useEffect,useRef,useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link,Navigate, useNavigate, useLocation } from "react-router-dom";
import Reg from "./pages/register"
import Log from "./pages/login"
import User from "./pages/user"
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
//import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/';
//import { CameraPreview } from '@capacitor-community/camera-preview';
export const Pro = createContext()


function App() {
  const loc = useLocation()
  const vid= useRef(null)
  const [ s, sets ] = useState(null)

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
 { PushNotifications.addListener('pushNotificationActionPerformed', async(notification) => { 
  let ab = notification.notification.data.data
    nav("/r")
    setTimeout(() => {
      nav(`/chat/${ab}`)   
     
    }, 0);
     
  })
  const NotificationChannelm = {
    id:'1',// id must match android/app/src/main/res/values/strings.xml's default_notification_channel_id
    name: 'Pop notifications',
    description: 'Pop notifications',                
    importance: 5,
    sound:"mesaj.mp3",
    visibility: 1
}
const NotificationChannelf = {
  id:'2',// id must match android/app/src/main/res/values/strings.xml's default_notification_channel_id
  name: 'Pop notifications',
  description: 'Pop notifications',                
  importance: 5,
  sound:"foto.mp3",
  visibility: 1
}

LocalNotifications.createChannel(NotificationChannelm)
PushNotifications.createChannel(NotificationChannelm)
PushNotifications.createChannel(NotificationChannelf)
LocalNotifications.createChannel(NotificationChannelf)

LocalNotifications.registerActionTypes({
types:[{id:"new",actions:[{

id:"view",title:"open"


},{

  id:"respond",title:"respond",input:true
}






]}]

})
//PushNotifications.createChannel(NotificationChannelf)

//PushNotifications.createChannel(NotificationChannel)
//LocalNotifications.listChannels().then((e)=>alert(e.channels[0].id))
//PushNotifications.deleteChannel(NotificationChannel)
//LocalNotifications.deleteChannel(NotificationChannel)
PushNotifications.addListener("pushNotificationReceived", async(notification) => { 

if(notification.body==="Resim Gönderdi"){
 
  await LocalNotifications.schedule({
    notifications: [
      {
        title: notification.title,
        body: notification.body,
        id: 2,
        attachments: null,
        actionTypeId: "new",
        extra: null,
        sound:"foto.mp3",
        channelId:"2"
      }
    ]
  })



}else{

   await LocalNotifications.schedule({
    notifications: [
      {
        title: notification.title,
        body: notification.body,
        id: 1,
        attachments: null,
        actionTypeId: "new",
        extra: null,
        sound:"mesaj.mp3",
        channelId:"1"
      }
    ]
  })
}
    })


}
  


  const socket = useRef()
  //socket.current=io("http://192.168.2.131:3001")
/*   useEffect(()=>{
    socket.current=io("http://192.168.2.131:3001")
    //return socket.removeAllListeners();
    return () => socket.current.disconnect();
  },[]) */
  
  //CameraPreview.stop();
  //localStorage.clear()
   
   let a = localStorage.getItem("aut")
   let b = JSON.parse(a)
   //let a = localStorage.getItem("aut")
   const [aut,setAut]=useState(b)
   const [cam,setcam]=useState(false)
  
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
            <Route path="/login" element={<Log/>}/>
            </Route>
            
            <Route element={
            <Protect1 />
          }>
            <Route path="/user" element={<User />}/>
            
            </Route>
            <Route element={<Protect1 />}><Route exact path="/r" element={<Redirect sock={socket.current}/>}/></Route>
            <Route element={<Protect1 />}><Route exact path="/chat" element={<Chat sock={socket.current}/>}/></Route>
            <Route element={<Protect1 />}><Route exact path="/chat/:id" element={<Chatid sock={socket.current}/>}/></Route>
            <Route element={<Protect1 />}><Route path="/webcam" element={<Webcam ss={sets} v={vid}/>}/></Route>
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
