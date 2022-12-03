import { useEffect, useState,useRef } from "react";
import goni from "./images/gon.png"
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
//import {Camera} from "react-camera-pro";
//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/'
//import { CameraPreview,CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { useLocation, useNavigate } from "react-router-dom";
import * as jose from 'jose'
import { v4 } from 'uuid';
import Convfv from "../comp/convfv"
import Peer from "simple-peer"
import {io } from "socket.io-client"
import { initializeApp } from "firebase/app";
import { PushNotifications } from "@capacitor/push-notifications";
import splash from "./images/ss.svg"
import { ReactP5Wrapper } from "react-p5-wrapper"
import sketch from "./sketch"
import sketch1 from "./sketch1"
import { render } from "timeago.js";
import { ReactComponent as Back } from "../pages/images/back.svg"
import { ReactComponent as Decline } from "../pages/images/decline.svg"
import { ReactComponent as Accept } from "../pages/images/accept.svg"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



/* async function ass(){
  await PushNotifications.requestPermissions();
  await PushNotifications.register();
  
}
ass()
let re
FCM.getToken()
  .then((r) => re=r.token)
  .catch((err) => console.log(err)); */
/* const app = initializeApp({
  apiKey: "AIzaSyAqRnAjql9uWnSdfI96bUq0DLm30Mi8ggo",
  authDomain: "react-idp-10.firebaseapp.com",
  projectId: "react-idp-10",
  storageBucket: "react-idp-10.appspot.com",
  messagingSenderId: "409608921903",
  appId: "1:409608921903:web:a6c69796786ca8c606b7da"
});
const messaging = getMessaging(app);

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  let currentToke
function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'ed') {
      getToken(messaging,{vapidKey:"BCOCQQRtNbKgZPMt70i4zUR9yct9gSKEaw6mGxs0gBiQO1gCaDFZRWd8scr9NegczrXMY2lmaOEpUNWVDRax844"}).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          currentToke=currentToken
          console.log(currentToke)
          
        } else {
          // Show permission request UI
          currentToke="olmadı"
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        currentToke="olur"
        console.log('An error occurred while retrieving token. ', err);
        // ...
      })

    }})} */
  
    //let prt="https://smartifier.onrender.com"

async function ac({vi}) {
/*   const as= await LocalNotifications.schedule({
    notifications: [
      {
        title: "On sale",
        body: "Widgets are 10% off. Act fast!",
        id: 1,
        schedule: { at: new Date(Date.now() + 1000) },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
      }
    ]
  })
  console.log(as)
  console.log("ok") */
}

export default function Webcam({prt,cur,cr,setcr,conid,userVideo,peer2,me,setMe,name,setname,stream,setStream,receivingCall,setReceivingCall,caller,setCaller,callerSignal,setCallerSignal,idToCall,setIdToCall,callEnded,setCallEnded,peer1,ss,sock,id}){
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
  
  
  const [ani, setAni] = useState(false);
  const [bni, setBni] = useState(false);
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a};
  const [Some, setSome] = useState('');
  const[mpeop,setmpeop]=useState([])
  const [current, setcurrent] = useState({cid:"",cnm:""})
  const [room, setroom] = useState(v4());
  const [playing, setPlaying] = useState(false);
  const [ stream1, setStream1 ] = useState(true)
  let nav = useNavigate()
  //const [ me, setMe ] = useState("")
  //const [ name, setname ] = useState("")
	//const [ stream, setStream ] = useState(true)
  const [ camt, setcamt ] = useState(true)
	//const [ receivingCall, setReceivingCall ] = useState(false)
	//const [ caller, setCaller ] = useState("")
	//const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
  const [ isclick, setisclick] = useState(false)
	//const [ idToCall, setIdToCall ] = useState("")
	//const [ callEnded, setCallEnded] = useState(false)
  //const id = useRef()
  const v = useRef()
	const connectionRef= useRef()
  const socket =useRef()
	//const userVideo = useRef(null)
  //const peer1 =useRef()
  //const peer2 =useRef()
  const cam =useRef(true)
  const peer =useRef(null)
  const senders = useRef([])
  const ab =useRef(null)
  const my =useRef(null)
  const canvasRef = useRef(null)
  let cams =[]
  let ann
 
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
    }
  }
  const location = useLocation();
   /* useEffect(()=>{
    
sock.current.emit("who",location.state.userid,na.id)
callUser()
console.log(location.state.userid)
   },[location]) */




	useEffect(() => {
   let c= front
   front.audio={echoCancellation:true}

let tream
   //sock.current = io(prt)
    const getUserMedia = async () => {
      console.log("ıkıkı")
      try {
     tream = await navigator.mediaDevices.getUserMedia(c)
     
      //tream.getVideoTracks().forEach((t) => t.enabled=false)
        setStream(tream)
        //setStreamf(tream3)
        //alert(tream3,tream)
        //ss(tream)
       
        if(v.current!==null&&v.current!==undefined)
       { 
       
console.log("ok999")
console.log(cr)
    //Our first draw
    v.current.srcObject = tream   
    v.current.play()    
      }
     if(!cr&&tream!==null){
    let button =document.getElementById("ll")
    setTimeout(() => {
      button?.click()
    }, 0);
        /* console.log("kıkıkı")
        sock.current.emit("who",location.state.userid,na.id,location.state.conid)
        call() */
        

     }
    
    }catch (err) {
   
        console.log(err);
        alert(err)
      }
    };
 

    getUserMedia();
  
    
    
	/* 	navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
      setTimeout(() => {
        v.current.srcObject = stream
      }, 0);
		}) */
    if(sock.current){
    sock.current.on("ended",()=>{
      console.log("bitti")
      setcr(false)
      setCallEnded(false)
      //peer.current.destroy()
     
      nav(`/chat/${location.state.conid}`,{replace:true})
      setReceivingCall(false)
      
      //window.location.reload()
      //setAni(false)
      //getUserMedia()
    

    })
  //sock.current.emit("no",na.id)
 /*  sock.current.on("get",e=>console.log(e))
  sock.current.on("m",(r)=>{
   //conid.current=cur.cid
    console.log("78")
    //console.log(r.socketId)
    setIdToCall(r.socketId)
    id.current = r.socketId
  })
	sock.current.on("me",(r) => {
    //console.log(r)
			setMe(r)
		})
	  sock.current.on("calling", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setCallerSignal(data.signal)
      setname(data.name)
		}) */
  }
    return () => {

      if(peer1.current!==undefined){
       // peer1.current.destroy()
      }
     
        
    
      
      //sock.current.disconnect()
      //connectionRef.current.destroy()
      if(tream!==undefined){tream.getTracks().forEach((t) => t.stop())
      }
     // sock.current.disconnect()
}
	},[])
  
	function call(){
     const  callUser = async() => {
     peer1.current = new Peer({
			initiator: true,
			trickle: false,
      stream:stream
     
     
		})
   peer.current=peer1.current
  /*   document.getElementById("bu")?.addEventListener("click",()=>{
      let a=v.current.srcObject
      if(cam.current){
      a.getTracks().forEach((t) => t.stop())
     navigator.mediaDevices.getUserMedia({ video: {
      facingMode: 'environment', // Or 'environment'
  }, audio: {echoCancellation:true} }).then((tream1)=>{
      
      if(tream1){
      peer1.current.replaceTrack(a.getVideoTracks()[0],tream1.getV2eoTracks()[0],stream)
      v.current.srcObject=tream1
      //setStream(tream1)
      //setStreamf(tream1)
        cam.current=false
      }})
    }
     else{
      a.getTracks().forEach((t) => t.stop())
      navigator.mediaDevices.getUserMedia({ video: {
        facingMode: 'user', // Or 'environment'
    }, audio: {echoCancellation:true} }).then((tream1)=>{
        if(tream1){ 
          //peer1.current.addStream(tream1)
          peer1.current.replaceTrack(a.getVideoTracks()[0],tream1.getVideoTracks()[0],stream)
          v.current.srcObject=tream1
         cam.current=true
        }}) 
    }
    }) */
  
		peer1.current.on("signal", (data) => {
			sock.current.emit("callUser", {
				userToCall: id.current,
				signalData: data,
				from: me,
				name: na.name
			})
		})
		peer1.current.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		sock.current.on("callAccepted", (signal) => {
			setCallAccepted(true)
      peer1.current.signal(signal)

		})    
    //let a=stream1.getTracks()[1]
     //let b=stream.getTracks()[1]
     
		//connectionRef.current = peer
   
    //a.getTracks().forEach((t) => t.stop()
  
  
  }

  callUser()
}
  
  /* useEffect(()=>{
    //sock.current.emit("who",location.state.userid,na.id)
    
if(stream){
   //document.getElementById("ll")?.click()
  console.log("ok78798")

}

  },[stream]) */
	const answerCall =() =>  {

console.log(caller)
     
		setCallAccepted(true)
     peer2.current = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
    peer.current=peer2.current
		peer2.current.on("signal", (data) => {
			sock.current.emit("answerCall", { signal: data, to: caller })
		})
		peer2.current.on("stream", (stream) => {
			userVideo.current.srcObject = stream
      console.log(stream)
		})

		peer2.current.signal(callerSignal)
    //connectionRef.current = peer
	}

	const leaveCall = () => {
   // console.log({me:me,caller:caller,receiver:idToCall})

    sock.current.emit("ending",idToCall,me,caller)
		//setCallEnded(true)
    //setReceivingCall(false)
		//connectionRef.current.destroy()
    //window.location.reload()
	}
  const toggle=async()=>{
  /*   window.stream.getTracks().forEach((t) => t.stop())
    const tream = await navigator.mediaDevices.getUserMedia({ video: {
      facingMode:{exact:"environment"}// Or 'environment'
  }, audio: false})
    window.stream=tream
    v.current.srcObject=tream */


    //streamf.getVideoTracks()[0].enabled=true
    let b = stream.getVideoTracks()[0]
      
    //b.stop()
  
    
    stream.removeTrack(b)
    b.stop()
    if(cam.current){
     
   console.log("t")
      //a.getTracks().forEach((t) => t.stop())
     navigator.mediaDevices.getUserMedia(back).then((tream1)=>{
      //
      
      if(tream1&&peer.current){
        console.log("okkk")
      peer.current.replaceTrack(b,tream1.getVideoTracks()[0],stream)
      stream.addTrack(tream1.getVideoTracks()[0])
  
      v.current.srcObject=stream
      v.current.play()
      //setStream(tream1)
      //setStreamf(tream1)
        cam.current=false
        setcamt(false)
      }else if(tream1){
        console.log("rrr")
        stream.addTrack(tream1.getVideoTracks()[0])
       
        //console.log(window.stream.getTracks())
        //console.log(window.stream.getTracks())
        v.current.srcObject=stream
        //v.current.play()
        cam.current=false
        setcamt(false)
      }
    
    })
    }
     else{
      //a.getTracks().forEach((t) => t.stop())
      navigator.mediaDevices.getUserMedia(front).then((tream1)=>{
        
        if(tream1&&peer.current){ 
          //peer1.current.addStream(tream1)
          peer.current.replaceTrack(b,tream1.getVideoTracks()[0],stream)
          stream.addTrack(tream1.getVideoTracks()[0])
          v.current.srcObject=stream
          v.current.play()
          cam.current=true
          setcamt(true)
        }else if(tream1){
          stream.addTrack(tream1.getVideoTracks()[0])
          v.current.srcObject=stream
          v.current.play()
          cam.current=true
          setcamt(true)
        }
      }) 
    }
     

    }
   
   const declinecall=()=>{
   setReceivingCall(false)
   }
  async function mak(){
  /* axios.get(`${prt}/rooms/${v4()}`).then((r)=>console.log((r.data.data))).catch(()=>{console.log("hata")
  }) */

  }
    /* useEffect(()=>{
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

      
     },[]) */
     const CameraPreviewOptions ={
      x: 0,
      y: 0,
      width: 500,
      height:500,
      camera: 'front',
      parent:"id"
    }
    
/*  function startcam()
    {CameraPreview.startCamera(CameraPreviewOptions).then(res=>{
      
      alert(res)})}
   */
  function change(){
    
    //console.log(userVideo.current.srcObject)
let user  =userVideo.current.srcObject
let my =v.current.srcObject
userVideo.current.srcObject=my
v.current.srcObject=user
  }
   function camforweb(){
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementById('1');
				if (video) {
					video.srcObject = stream;
          console.log(stream)
				}
			},
			(err) => console.error(err)
		);

   }
    function stop() {
      setPlaying(false);
      let video = document.getElementById('1');
      video.srcObject.getTracks()[0].stop();
      }
      
      let goback = window.onpopstate = e => {
        console.log("ok")
        
        setTimeout(() => {
          nav(-1)
        }, 0);
        
        
      }
      
  if(ani===true&&bni===true){


return(
<div className="flex flex-col w-screen h-screen bg-[#fcfbf4]  ">
<button id="ll" className="hidden" onClick={()=>{
console.log(location.state.userid)
sock.current.emit("who",location.state.userid,na.id,location.state.conid)
call()

}} >kkk</button>
{/* {mpeop.map((c,i)=> (<Convfv key={i} roomid={room}  call={callUser}soc={sock.current} changeconv={setmpeop} cur={setcurrent} convs={mpeop[i]}/>)
    

    )} */}
   <div className="flex flex-col h-full w-full  bg-black xs:text-md md:text-xl text-indigo-700 "> 
   <div className=" video-container h-full w-full">
    { camt? <div className="video my-rotate-y-180 h-full w-full">
					{ <video playsInline autoPlay muted ref={v} className="w-full h-full object-contain"  onClick={()=>{
    console.log("ok")
    setisclick(!isclick)}} />}
				</div>:<div className="video h-full w-full">
					{ <video playsInline autoPlay muted ref={v} className="w-full h-full object-contain"  onClick={()=>{
    console.log("ok")
    setisclick(!isclick)}} />}
				</div>}
				
				
          {callAccepted && !callEnded ?
        <div className=" absolute rounded-lg w-2/6   left-auto  top-0 right-0 m-2 ">

					<video playsInline ref={userVideo} autoPlay className="rounded-lg object-contain h-full w-full" onClick={()=>change()}/> </div>:
					null}
				</div>
       
			
       {/*  {(!playing)? <button onClick={camforweb}>starter</button>:  <><button onClick={change}>starter</button>
        <button onClick={stop}>stop</button>
        <button onClick={mak}>mak</button></>} */}
        {/* <span className="flex bg-indigo-600 rounded-md px-2">
              <button className="text-lg text-white" id="bu" onClick={toggle}>
                değiştir
              </button>
            </span> */}
        <div>
					{callAccepted && !callEnded && !isclick ? 
            <><span className="absolute  left-1/2 transform -translate-x-1/2  bottom-2  rounded-md px-2">
            <div className="flex" >
            <span className='absolute h-8 m-1 w-8 bottom-0 z-10 bg-white rounded-full '></span>
            <Decline className={`text-xl  text-red-600 w-10 h-10 z-10 `} onClick={leaveCall} />
            </div>
          </span>
          
          <button className={`absolute right-2 bottom-4 text-xl ${bg} ${bgfordarkmode} text-white`} onClick={toggle}>
              Değiştir
            </button></>
					 : null}
				</div>
        {isclick && !callAccepted ? <><div className="h-20 absolute top-0 w-full opacity-60 bg-black">
          </div>
          <Back className={`absolute opacity-100 text-white h-20 left-[1.7rem] `} width="1.5rem" height="1.7rem" onClick={()=>{
            if(stream!==null&&stream.active===true){
            stream.getTracks().forEach((t) => t.stop())
            leaveCall()
            nav(`/chat/${location.state.conid}`,{replace:true})

            }
            }} />

          <div className="h-20 absolute bottom-0 w-full opacity-60 bg-black"></div></>:null


        }
				{receivingCall && !callAccepted ? (
          <div className="absolute   left-1/2 transform -translate-x-1/2  bottom-2 " >
						<div className="flex flex-col items-center ">
						<h1 className={`${specialwhitetext} text-center`}>{name} seni arıyor neredesin sen...</h1>
           
            <div className="flex flex-row bottom-0 justify-center">
						<div className="flex ">
            <span className='absolute h-8 m-1 w-8 bottom-0 z-10 bg-white rounded-full '></span>
            <Accept className={`text-xl flex z-10  text-green-700 w-10 h-10 mr-2 `} onClick={answerCall}/>
            </div>
            <div className="flex">
            <span className='absolute h-8 m-1 w-8 bottom-0 z-10  bg-white rounded-full '></span>

            <Decline className={`text-xl z-10 flex w-10 h-10 text-red-600 `} onClick={()=>{
           
              
             leaveCall()
            }}/>
				</div>
					
      
            </div>
            </div>
            </div>
				) : <div></div>}
       </div>
	   
        </div>
    

)
}
else if(ani===true&&bni===false){
  return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
  <SyncLoader color={"#F5A620"}  size={15} />
  </div>)

}else{
  setTimeout(() => {
    setAni(true)
    setBni(true)
  }, 150)
  return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
}
}
