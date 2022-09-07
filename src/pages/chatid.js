import axios from "axios";
import React, { createContext, useEffect, useRef,useCallback } from "react";
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Convs2 from "../comp/convs2";
import Viewer from 'react-viewer';
import Possib, { b } from "../comp/posib";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import Mess from "../comp/mess";
import { ExportBase64ImageToGallery, GalleryExportResponse, GalleryPermissionStatus } from 'export-base64-image-to-gallery'
//import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/'
import ImageViewer from 'react-simple-image-viewer';
import * as jose from 'jose'
import { get } from "../comp/conv";
import { render } from "timeago.js";
import { Capacitor } from "@capacitor/core";
import { io } from "socket.io-client";
import { CameraPreview } from '@capacitor-community/camera-preview';
import { async } from "@firebase/util";
import goni from "./images/gon.png"
import carpı from "./images/carpı.png"
import gallery from "./images/gallery.png" 
import camera from "./images/camera.png" 
import { FilePond, File, registerPlugin } from 'react-filepond'
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
// Import FilePond styles
import Images from "./images";
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// Register the plugins
registerPlugin(FilePondPluginImageTransform,FilePondPluginImageExifOrientation,FilePondPluginFileEncode, FilePondPluginImagePreview,FilePondPluginFileValidateType,FilePondPluginImageResize)





function Chatid({}) {

  let prt="https://smartifier.herokuapp.com"
  const [current, setcurrent] = useState({});
  const [write, setwrite] = useState('');
  const [sendimage, setsendimage] = useState([]);
  const [ani, setAni] = useState(false);
  const [image, setimage] = useState(false);
  const ready = useRef(null)
  const [bni, setBni] = useState(false);
  const [Files, setFiles] = useState([]);
  const[peop,setpeop]=useState([])
  const[all,setall]=useState([])
  const load = useRef(false)
  const page =useRef(1)
  const av =useRef(null)
  const sendedimage =useRef(null)
  const messageobs =useRef(null)
  const scroll =useRef(null)
  const src =useRef(null)
  const curref =useRef(null)
  const[mpeop,setmpeop]=useState([])
  const[isopened,setisopened]=useState(false)
  const[messages,setmessages]=useState([])
  const[ne,setne]=useState([])
  let nav = useNavigate()
  const imgRef = useRef();
  let n=[]
    let{id}=useParams()
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = {Authorization:a,page:page.current};
    const socket = useRef()
    let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


   /*  const memoizedResult = useMemo(() => {
      return expensiveFunction(propA, propB);
    }, [propA, propB]); */
    function closeImageViewer(){
      setisopened(false)
    }
    const resizeImage = (base64Str, maxWidth = 400, maxHeight = 350,quality) => {
      return new Promise((resolve) => {
        let img = new Image()
        img.src = base64Str
        img.onload = () => {
          let canvas = document.createElement('canvas')
          const MAX_WIDTH = maxWidth
          const MAX_HEIGHT = maxHeight
          let width = img.width
          let height = img.height
    
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }
          canvas.width = width
          canvas.height = height
          let ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          resolve(canvas.toDataURL('image/jpeg', 0.8))
        }
      })
    }
   
    const takePicture = async () => {
      let resized
      const image = await Camera.getPhoto({
        height:1280,
        quality: 80,
        allowEditing: false,
        source:CameraSource.Camera,
        resultType: CameraResultType.DataUrl
      })
      if(Capacitor.getPlatform()==="web"){
       resized =await resizeImage(image.dataUrl,720,1280)
       //PhotoViewer.show("resized")
       console.log(resized)
    }else{
      resized =image.dataUrl
    }
   
    //await ExportBase64ImageToGallery.exportImageToGallery({data:resized});
      setsendimage([resized])
    };
    const opengallery = async () => {
      let resized
      const image = await Camera.getPhoto({
        height:1280,
        quality: 80,
        allowEditing: false,
        source:CameraSource.Photos,
        resultType: CameraResultType.DataUrl
      })

      if(Capacitor.getPlatform()==="web"){
        resized =await resizeImage(image.dataUrl,720,1280)

     }else{
       resized =image.dataUrl
     }
     setsendimage([resized])
    };
    
    useEffect(()=>{
   
      async function send(){
        
        if(sendimage.length!==0)
     {   setmessages(prev =>[{sender:na.id,receiver:current.cri,media:sendimage[0]},...prev])
        socket.current.emit("send",{sender:na.id,receiver:current.cri,media:sendimage[0]})
         await axios.post(`${prt}/messages`,{
          conversationid:current.cid,
          sender:na.id,
          media:sendimage[0],
          receiver:current.cri,
          name:na.name
         }).then((res)=>{ 
         
          //setwrite("")
          
           //console.log(messages)
           
           
         }).catch((err)=>{
          console.log("hata")
        })}
      }
      send()

    },[sendimage])
  
 
    useEffect(()=>{ 
        
      async function conv(){
        await axios.get(`${prt}/conversations/exact/${id}`,{headers}).then(async(e)=>{
        let arr=[e]
        let up={}
        let de
       if(!arr[0].data.members.includes(na.id)){
        console.log("yok")
        localStorage.clear()
        nav("/login")
        window.location.reload()
      }else if(arr[0].data.members[0]===na.id){
   
       de =arr[0].data.members[3]
      }else{
        de =arr[0].data.members[2]

      }
       if(na.id===arr[0].data.members[0]){
         up ={cid:arr[0].data._id,cnm:de,cri:arr[0].data.members[1],csi:arr[0].data.members[0],cam:[arr[0].data.members[1],arr[0].data.members[0]]}}
      else{

         up ={cid:arr[0].data._id,cnm:de,cri:arr[0].data.members[0],csi:arr[0].data.members[1],cam:[arr[0].data.members[1],arr[0].data.members[0]]}
      }
      setcurrent(up)
      //console.log("1",up.cid)
      if(up.cid){const convers = await axios.get(`${prt}/messages/${id}`,{headers}).then((res)=>{
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
        }).catch((err)=>{
          nav("/chat")
        })
      }
     conv()
    },[])
  
      let clas=" scrollbar md:scrollbar-width-2   xs:scrollbar-width-1 flex-col-reverse flex mb-1 overflow-y-scroll  scrollbar-track-indigo-100  scrollbar-thumb-indigo-500 xs:pr-1.5 sm:pr-2 md:pr-2.5"        
      let clas1=" scrollbar  md:scrollbar-width-2   xs:scrollbar-width-1 flex-col-reverse flex mb-1  overflow-y-scroll  scrollbar-track-indigo-100  scrollbar-thumb-indigo-100 xs:pr-1.5 sm:pr-2 md:pr-2.5 "
      
      let scro= src.current
      let time
      
      useEffect(()=>{
        //setmessages([])

       
              
       page.current=1
       curref.current=current.cid
       
       return 
        //load.current=true
      },[current])
      
   
    
      function asa(){
        //console.log(id)
/*         console.log(current.cid)
        console.log(scro.scrollHeight)
        console.log(-Math.floor(scro.scrollTop)-1)
        console.log(scro.offsetHeight)
            console.log(scro.offsetHeight+(-Math.floor(scro.scrollTop)))
            console.log(scro.scrollHeight) */
                if(scro.offsetHeight+(-Math.floor(scro.scrollTop))>=scro.scrollHeight&& load.current===false){
  
                  load.current=true
                  page.current=page.current+1
                 /*  av.current=scro.scrollTop
                  console.log(av.current) */
     // console.log(id)
                  axios.get(`${prt}/messages/${curref.current}`,{headers:{Authorization:a,page:page.current}}).then((res)=>{
                   
                    load.current=false
                   // scro.className ="items-end  md:scrollbar-width-2 xs:scrollbar-width-1 flex-col mb-1 overflow-hidden  scrollbar-track-indigo-100  scrollbar-thumb-indigo-500 md:h-[550px] xs:h-[590px] pr-4"        
                    if(res.data==="tokExp"){
                      localStorage.clear()
                      nav("/login")
                      window.location.reload()
                     
                      //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
                    }
                    //let mm =res.data
                      //scro.className =" scrollbar md:scrollbar-width-2 xs:scrollbar-width-1  mb-1 overflow-y-scroll  scrollbar-track-indigo-100  scrollbar-thumb-indigo-500 md:h-[550px] xs:h-[590px] pr-4"        
                      //scro.className="  md:scrollbar-width-2 xs:scrollbar-width-1  mb-1 overflow-hidden  scrollbar-track-indigo-100  scrollbar-thumb-indigo-500 md:h-[550px] xs:h-[590px] pr-4"        
           
                    setmessages(p=>[...p,...res.data])
                    //scro.className=clas1
      
                    //scro.scrollTop=av.current
                     //console.log(message)
                     
                     })
                  
                }
              scro.className=clas        
            clearTimeout(time)
            time=setTimeout(() => {
              scro.className=clas1
      
            },350) 
         
      }
      if(scro){  
        
             
        scro.addEventListener("scroll",asa)

  }
  
  
  /*     let ad =document.querySelectorAll("#last")
      let lastelement
      if(ad.length!==0){
        let b = ad.length-1
        lastelement= ad[b].getAttribute("k")
        
      } */
 
   
        useEffect(()=>{
          setTimeout(() => {
              let a =document.querySelectorAll("#last")
            if(scro){
              let b = a.length-1
              let beforelast=a[b-1]
              let last =a[b]
            /*   let spans = last.getElementsByTagName("span");
              console.log(spans[0].innerText)
              console.log(messages[0].text)
              let lastindex=a[b].getAttribute("k") */
              if(last)
             {last.scrollIntoView()}
             
            }
          }, 0);
        },[messages[0]])
    /*   useEffect(()=>{
        console.log("s")
        setTimeout(() => {
          let a =document.querySelectorAll("#last")
     
          
           if(a){
            let b = a.length-1
            let f= a[b]
            console.log(f.key)
            f.scrollIntoView()
           }
         }, 0);
      },[Some]) */
  

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
          receiver:e.receiver,
          media:e.media
        }
       
        setne(n)
        //setmessages((p)=>[...p,n])
        })
        return () => socket.current.disconnect()
    },[])
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
    setmessages((p)=>[ne,...p])

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
       //console.log(res.data
    }).catch((err)=>{
        console.log(err)
      })
    }
   get1()
   },[all])
 
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
  },[current,messages]) */
  const images = [
    'https://www.linkpicture.com/q/pexels-bruno-scramgnon-5007442.jpg',
   
  ];

   async function gon(event){
    event.preventDefault()
    event.stopPropagation()
    let t
    let value
    t = document.getElementById("tex")
    value = t.value.trim()
    t.focus()
   if(value !==""){
    setmessages(prev =>[{sender:na.id,receiver:current.cri,text:value},...prev])
    t.value=""
    socket.current.emit("send",{sender:na.id,receiver:current.cri,text:value})
     await axios.post(`${prt}/messages`,{
      conversationid:current.cid,
      sender:na.id,
      text:value,
      receiver:current.cri,
      name:na.name
     }).then((res)=>{ 
      //setwrite("")
      
       //console.log(messages)
       
       
     }).catch((err)=>{
      console.log("hata")
    })
  }}

  //console.log(current.cid)
/*   if(image)return <div className="w-full flex-col flex justify-end h-screen"><FilePond imagePreviewMaxHeight={1024} imagePreviewUpscale={true}></FilePond> <form className="pb-2 flex justify-center items-center">
            
             
  <input id="tex" className="focus:outline-none w-5/6 ml-1 focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md"
  //onInput={e => {setwrite(e.target.value)}} 
  
  name="password" type="text" autoComplete="text"  />


<button onClick={gon} className="w-12 flex justify-end py-[2px]  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">
 <img className="mx-auto h-5" src={goni} alt="Workflow"/></button>
 <button onClick={ (e)=> {
 e.preventDefault()
 //nav("/image")
 setimage(p=>!p)             
}} className="w-12 flex justify-end py-[2px]  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">
 <span className="mx-auto h-5">+</span></button>


</form></div> */
let avv
let cli=document.getElementById("tex")
if(cli){
let bou =cli.getBoundingClientRect()
avv= window.innerHeight-(bou.height*2.7)

}

const onUpdate = useCallback(({ x, y, scale }) => {
  const img = imgRef.current

  if (img) {
    const value = make3dTransformValue({ x, y, scale });

    img.style.setProperty("transform", value);
  }
}, []);





function handleGesture() {
    if (touchendX < touchstartX) {

        //alert('Swiped left');
    }
    
    if (touchendX > touchstartX) {
        //alert('Swiped right');
     
    
    }
    
    if (touchendY < touchstartY) {
      
      //document.getElementById("tex").focus()
      //up
      
 
    }
    
    if (touchendY > touchstartY) {
      //down
      setimage(false)
     setisopened(false)
     
      //setisopened(false);
    }
    
    if (touchendY === touchstartY) {
       //tap
    }
}
useEffect(()=>{
  const gestureZone =   document.getElementById("rr")
  gestureZone?.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone?.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

},[isopened])
    if(ani&&bni){
      return(
      
      <div id="modal" className="bg-[#fcfbf4] min-h-screen justify-center  px-2 lg:px-2 grid grid-cols-8  gap-2 ">
             {/* {image ?  <div className="w-screen absolute right-0 left-0 mx-auto"><FilePond allowImageTransform onupdatefiles={setFiles}  allowImageResize={true} files={Files} allowFileEncode  imageResizeTargetHeight={1280} imageResizeTargetWidth={720} labelIdle="Sürükle Bırak veya Dokun" imagePreviewHeight={avv? avv:1024}  acceptedFileTypes={["image/*"]} 
           imagePreviewUpscale={true} credits={false} ></FilePond></div>:null} */}
      <div className="h-min sm:mx-auto sm:w-full sm:max-w-md pt-14 col-span-2">
      <input  className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name"  name="name" type="text" autoComplete="name" />
      <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
      <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Mesajlar</span>
</div>
    {mpeop.map((c,i)=> 
      (<Convs2 key={i} k={i} pages={page} mesa={mpeop} changeconv={setmpeop} setmessage={setmessages} cur={setcurrent} convs={mpeop[i]} setnewm={ne}/>)
     
  
    

    )}
   
{isopened && <div>
<div id="rr" className="bg-[#fcfbf4] block opacity-90 blur-sm absolute top-0 bottom-0 right-0 left-0"></div>
<button onClick={()=> {setisopened(false) 
setimage(false) }}  className="absolute right-2 top-2 bg-indigo-600">
<img className="mx-auto h-5" src={carpı} alt=""/>
</button>
<div className="absolute  bg-slate-50 top-1/2 left-1/2 xs:w-screen sm:w-fit -translate-x-1/2 -translate-y-1/2"><TransformWrapper>
              <TransformComponent>
                <img className=" max-h-screen" src={sendedimage.current} alt="test" />
              </TransformComponent>
            </TransformWrapper></div></div>
           
            }
      </div>
        {current.cid!==""?(   <div className="flex flex-col h-screen  rounded-lg sm:px-30 col-span-4  pt-14 "> 
         <div className="min-h-full justify-end flex flex-col rounded-lg pr-1 bg-indigo-100 pt-1 ">

         
         <div id="src" ref={src}className={clas}>
            <span className="fixed top-[60px] z-1 text-indigo-800  xs:text-xs md:text-xl ml-1 px-1 xs:rounded-sm md:rounded-md  bg-[#c4b5fd]">{!image? current.cnm:null}</span>
            {messages?.map((c,i)=>{
         
              let sc=19
              
              if(i === 0 ) {
           
                 sc = sc+20
                
                 //sc = document.getElementById("src")
                 return <div k={i} key={i} id="last" ref={scroll}><Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage}/></div>
        
         }
                return <Mess key={i} open={setisopened} on={setimage} own={messages[i].sender} message={messages[i]} setmessage={setmessages} images={sendedimage} />

            }
            
            )}
            
             
            </div>
            {!isopened && <form className="pb-1 relative justify-center items-center pl-1">
          
               <input id="tex" className="focus:outline-none w-full h-7 pr-20 focus:border-orange-500 border-solid border-indigo-600 px-1 border-2 rounded-md"
               //onInput={e => {setwrite(e.target.value)}} 
               
               name="password" type="text" autoComplete="text"/>
             <button id="kk" onClick={gon} className="w-8 h-7 absolute right-0 bottom-1  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-indigo-600">
              <img className="mx-auto h-7 py-1" src={goni} alt="Workflow"/></button>
              <div className="absolute content-center right-9 bottom-3 h-4  ">
              <button onClick={ (e)=> {
              e.preventDefault()
              opengallery()
              //nav("/image")
             //setimage(p=>!p)             
            }} className="w-6 items-center  bg border border-transparent focus:outline-none rounded-md  text-sm font-medium text-white hover:bg-indigo-700  active:bg-indigo-600">
              <img className="mx-auto h-4" src={gallery}></img></button>
              <button onClick={ (e)=> {
              e.preventDefault()
              //nav("/image")
              takePicture()            
            }} className="w-6  items-center  border border-transparent rounded-md text-sm focus:outline-none font-medium text-white  hover:bg-indigo-700  active:bg-indigo-600">
               <img className="mx-auto h-4" src={camera}></img></button>
              </div>
           </form>}
             </div>
           
       </div>):(   <div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1"> 
            
            Lütfen bir sohbet seçiniz
       </div>)}
     
        <div className=" h-min pt-[51px] col-span-2">
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
      },0);
      return (<div className="grid place-items-center h-screen bg-[#fcfbf4]">
      <SyncLoader color={"#F5A620"}  size={15} />
      </div>)
    }
  
  }
  
  export default Chatid;
  