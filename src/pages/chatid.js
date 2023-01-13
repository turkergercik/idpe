import axios from "axios";
import React, { createContext, useEffect, useRef,useCallback, forwardRef } from "react";
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Convs2 from "../comp/convs2";
import Viewer from 'react-viewer';
import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import Possib, { b } from "../comp/posib";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import Mess from "../comp/mess";
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
import { LocalNotifications } from "@capacitor/local-notifications";
import { useAlert } from 'react-alert'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { ReactComponent as Camera1 } from "../pages/images/camera.svg"
import { ReactComponent as Gallery1 } from "../pages/images/gallery.svg"
import { ReactComponent as Send1 } from "../pages/images/send.svg"
import { ReactComponent as Back } from "../pages/images/back.svg"
import { ReactComponent as Camicon } from "../pages/images/zoom.svg"
import { ReactComponent as Profilepic } from "../pages/images/user.svg";
import { ReactComponent as Download } from "../pages/images/download.svg"
import smoothscroll from 'smoothscroll-polyfill';
import { App as app1 } from '@capacitor/app';
import { IonInput, IonItem, IonLabel, IonList, IonTextarea,IonItemSliding } from '@ionic/react';
// Register the plugins
registerPlugin(FilePondPluginImageTransform,FilePondPluginImageExifOrientation,FilePondPluginFileEncode, FilePondPluginImagePreview,FilePondPluginFileValidateType,FilePondPluginImageResize)


// kick off the polyfill!


let c =false
let typing1 = false;
    let timeout = undefined;
let d=false
let result1
function Chatid({typing,settyping,ppch,peop,setpeop,ppcheck,pprenew,chatsbackup,seen,setseen,inchat,setinchat,all,prt,db,isDarkMode,setmessages,messages,sock,curref,setcur,cur,ne,flag1,setflag1,e}) {
 


  //smoothscroll.polyfill();
  const alert1 =useAlert()
  let first=false
  let darktext="dark:text-[#F0EFE9]"
  let bgfordarkmode="dark:bg-[#1a1a1a]"
  let whitefordark="dark:text-[#F0EFE9]"
  let svgcolor="text-[#097EFE]"
  let bg7="bg-[#097EFE]"
  let svgback="text-[#FFFFFF]"
  let bgblue ="bg-[#F0EFE9]"
  let specialwhitebg="bg-white"
  let specialwhitetextdark="dark:text-[#F0EFE9]"
  let specialwhitetext="text-[#F0EFE9]"
  let textcolorblue="text-[#097EFE]"
  let bginput="bg-[#F0EFE9]"
  let darkborderinput="dark:border-[#F0EFE9]"
  let buttonbg="bg-[#097EFE]"
  let svgcamera="text-[#097EFE]"
  let send="text-[#FFFFFF]"
  let bordercolor="border-[#60ACFF]"
  let bg="bg-white"
  //let prt="https://smartifier.onrender.com"
  //const [current, setcurrent] = useState({});
  const [write, setwrite] = useState('');
  //const no = useRef(false)
  const [no1,no] =useState(false)
  const nos = useRef(false)
  const [sendimage, setsendimage] = useState([]);
  const [ani, setAni] = useState(true);
  const [image, setimage] = useState(false);
  const ready = useRef(null)
  const [bni, setBni] = useState(true);
  const [first1, setfirst1] = useState(false);
  const [Files, setFiles] = useState([]);
  //const [peop,setpeop]=useState([])
  //const [all,setall]=useState([])
  const [online,setonline]=useState(false)
  const [load1,setload1]=useState(false)
  //const [seen,setseen]=useState(null)
  const [pp,setpp]=useState([])
  const load = useRef(false)
  const page =useRef(1)
  const media =useRef(null)
  const takp =useRef(null)
  const av =useRef(null)
  const click=useRef(true)
  const sendedimage =useRef(null)
  const dd =useRef(null)
  const messageobs =useRef(null)
  const mfd =useRef(null)
  const scroll =useRef(null)
  const doubletap =useRef(false)
  const [doubletap1,setdoubletap1] =useState(false)
  const [update,setupdate]=useState()
  const src =useRef(null)
  const flag =useRef(true)
  //const curref =useRef(null)
  const[mpeop,setmpeop]=useState([])
  //const[flag1,setflag1]=useState([])
  const[flag2,setflag2]=useState([])
  const[n1,setn1]=useState()
  const[isopened,setisopened]=useState(false)
  //const[zoom,setzoom]=useState(false)
  const zoom=useRef(false)
  const img=useRef()
  const n2=useRef()
  const[isopenedm,setisopenedm]=useState(false)
  //const[messages,setmessages]=useState([])
 
  //const[ne,setne]=useState([])
  let nav = useNavigate()
  
  const imgRef = useRef();
  let n=[]
    let{id}=useParams()
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = {Authorization:a,page:page.current};
    //const sock.current = useRef()
    let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
const messagesfromdb = useRef(null)




   /*  const memoizedResult = useMemo(() => {
      return expensiveFunction(propA, propB);
    }, [propA, propB]); */

    
    
    function timeoutFunction(){
      typing1 = false;
      console.log(cur.cri)
      sock.current.emit("nottyping",cur?.cri);
    }
    
    function onKeyDownNotEnter(){
  
      if(typing1 === false) {
        console.log(cur.cri)
        typing1 = true
        sock.current.emit("typing",cur?.cri,cur?.cid);
        timeout = setTimeout(timeoutFunction, 1500);
      } else {
        console.log(typing1)
        clearTimeout(timeout);
        timeout = setTimeout(timeoutFunction, 1500);
      }
    
    }




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

 
//alert("ık")
  app1.addListener("backButton",e=>{
    
    if(isopened){
      setisopened(false)
      setimage(false)
      setisopenedm(false)
      //alert("ok")
      
      //d=true
      //alert(d)
      // alert(c)
    }else{
  
      sock.current.emit("outchat",cur.cri)
      nav("/chat")
      //d=false
  
   
    
 
 
  
}
  })

  return ()=>{
    //app1.removeAllListeners()
  }
 },[])
    useEffect(()=>{
     
      async function send(){
        const time=new Date(Date.now()).toISOString()
        if(sendimage.length!==0)
     {   
      
      setmessages(prev =>[{sender:na.id,receiver:cur.cri,media:sendimage[0],conversationid:cur.cid,createdAt:time},...prev])
        sock.current.emit("send",{sender:na.id,receiver:cur.cri,media:sendimage[0],conversationid:cur.cid,createdAt:time})
        let addnewmessage
        if(messagesfromdb.current!==null){
           addnewmessage = [{sender:na.id,receiver:cur.cri,media:sendimage[0],conversationid:cur.cid,createdAt:time},...messagesfromdb.current]
        }else{
           addnewmessage = [{sender:na.id,receiver:cur.cri,media:sendimage[0],conversationid:cur.cid,createdAt:time}]
        }
            messagesfromdb.current=addnewmessage
            console.log(addnewmessage)
             await db.set(cur.cid,messagesfromdb.current)
        await axios.post(`${prt}/messages`,{
          conversationid:cur.cid,
          sender:na.id,
          media:sendimage[0],
          receiver:cur.cri,
          name:na.name
         }).then(async(res)=>{ 
          console.log(res.data)
     
         
          //setwrite("")
          
           //console.log(messages)
           
           
         }).catch((err)=>{
          console.log("hata")
        })}
      }
      send()

    },[sendimage])



useEffect(()=>{


},[inchat])

    useEffect(()=>{ 
      
      setmessages([])
     
      
      setcur([])
      async function conv(){
        //console.log("1")
       /*  console.log(`${prt}/conversations/exact/${id}`)
        await axios.get(`${prt}/conversations/exact/${id}`,{headers}).then(async(e)=>{
        let cur=[e]
        let up={}
        let de
       if(!cur[0].members.includes(na.id)){
        console.log("yok")
        localStorage.clear()
        nav("/login")
        window.location.reload()
      }else if(cur[0].members[0]===na.id){
   
       de =cur[0].members[3]
      }else{
        de =cur[0].members[2]

      }
       if(na.id===cur[0].members[0]){
         up ={cid:cur[0]._id,cnm:de,cri:cur[0].members[1],csi:cur[0].members[0],cam:[cur[0].members[1],cur[0].members[0]]}}
      else{

         up ={cid:cur[0]._id,cnm:de,cri:cur[0].members[0],csi:cur[0].members[1],cam:[cur[0].members[1],cur[0].members[0]]}
      }
      setcur(up) */
      let de
      let arr
      let up
      if(db!==undefined&&db!==null){
        //console.log("1")
      let chats =await db.get("chatsbackup")
      if(chats){
        //let chat =await db.get("chatsbackup")
       
        //let cur=(chats.filter(v=>v._id===id))
      let cur
    chats.forEach((v,i)=>{

if(v._id===id){
//console.log(v)
cur=[v]
result1=i

}


        })
      
        if(cur[0]!==undefined&&cur[0]!==null){
        if(!cur[0].members.includes(na.id)){
          console.log("yok")  
          localStorage.clear()
          nav("/login")
          window.location.reload()
        }else if(cur[0].members[0]===na.id){
     
         de =cur[0].members[3]
       
        }else{
          de =cur[0].members[2]
  
        }
         arr=de.split(" ");
         
        for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     
         }
         de = arr.join(" ");
         if(na.id===cur[0].members[0]){
           up ={cid:cur[0]._id,cnm:de,cri:cur[0].members[1],csi:cur[0].members[0],cam:[cur[0].members[1],cur[0].members[0]]}
          //curref.current=up.cid
          }
        
           else{
  
           up ={cid:cur[0]._id,cnm:de,cri:cur[0].members[0],csi:cur[0].members[1],cam:[cur[0].members[1],cur[0].members[0]]}
           //curref.current=up.cid
        }
        sock.current.emit("inchat",up.cri,up.cid,up.csi)
        let pp1 = await db.get("pp")
        if(pp1){
          //console.log(pp1)
       
            pp1.forEach(a=>{
            
            if(a._id!==na.id&&a._id===up.cri){
              setpp(a.profilepicture)
              
            }
            })
        }
      }
      }else{
        setload1(true)
      }
      let abo
      setcur(up)
      curref.current=up
      //console.log(up.cnm)
      //console.log("1",up.cid)
   chatsbackup.current=await db.get("chatsbackup")
        messagesfromdb.current = await db.get(id)
    
      
       //===null
       //console.log(messagesfromdb)

      if(messagesfromdb.current===null){
        setload1(true)
      console.log("var")
      if(up.cid){const convers = await axios.get(`${prt}/messages/${id}`,{headers}).then(async(res)=>{
        setload1(false)
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        //setmessages(res.data.slice(0,20))
        setfirst1(true)
        await db.set(up.cid,res.data)
        messagesfromdb.current=res.data
       
        //const obj = {[up.cid]: res.data}
       
     }).catch((err)=>{
       
        console.log("olmadı")
      })}}
      
      if(messagesfromdb.current!==null){
        //setseen([])
        if(messagesfromdb.current.length>0){
        const newmessages10 = messagesfromdb.current.slice(0,10)
        const newmessages20 = messagesfromdb.current.slice(0,20)
        
        let a = newmessages10.map((a)=>a.media!==undefined).filter(Boolean).length
        
        if(a>=4){
          setmessages(newmessages10)
          mfd.current=10
        }else{ 
          setmessages(newmessages20)
          mfd.current=20
        }}else{
          setseen([])
        }
       // console.log(messagesfromdb.current)
      }
     /*    }).catch((err)=>{
          console.log(err)
          //nav("/chat")
        }) */}
      }
     conv()
     return ()=>{
      curref.current=null
     }
  
    },[db,e])

    useEffect(()=>{

      async function pp(){
        let pp1 = await db.get("pp")
  
        //console.log("g")
        let resulte
        let pp2=[]
        if(pp1===null&&peop.length!==0){
         console.log("ko")
       /*   person.forEach(e => {
    
           x.forEach(a=>{
            
           if(a.members[0]!==na.id &&a.members[0]===e._id||a.members[1]!==na.id &&a.members[1]==e._id){
             
           pp2=[...pp2,e]
           }
           })
         }); */
         await db.set("pp",peop)
         let filtered= peop.forEach((v,i) => {
       
           if(v._id===cur.cri){
             resulte=i
           }})
         
           setpp(peop[resulte].profilepicture)
          
     
        }else{
          if(pp1!==null&&peop.length!==0&&peop!==1){
         //console.log(0)
       /*  let filtered=  person.forEach((e,i) => {
    
          pp1.forEach(a=>{
           
          if(a._id===e._id&&a.profilepicture!==e.profilepicture&&e._id===kar){
            console.log(i)
         resulte=i
          }
          })
        }) */
        let filtered= peop.forEach((v,i) => {
    
          if(v._id===cur.cri){
     
            resulte=i
          }})
       await db.set("pp",peop)
        setpp(peop[resulte]?.profilepicture)
      
        //setppcheck(null)
      }else{
        if(pp1!==null){
        let filtered= pp1.forEach((v,i) => {
    
          if(v._id===cur.cri){
     
            resulte=i
          }})
     
        
         setpp(pp1[resulte].profilepicture)
         //setppcheck(2)
    }
      }
       } 
         }




/* async function pp(){
console.log("ppppp")
  let pp1 = await db.get("pp")
  

        if(pp1){
          //console.log(pp1)
       
            pp1.forEach(a=>{
            
            if(a._id!==na.id&&a._id===cur.cri){
              setpp(a.profilepicture)
              
            }
            })
        }
} */
 if(pprenew.length===0){
  pp()
}

    },[peop,pprenew])
    

    useEffect(()=>{
      if(!online){
      setinchat(false)
      settyping({status:false})
      }
      
      },[online])

    

    useEffect(()=>{
      
      
      //console.log(all)
     
      
      //sock.current.emit("inchat",cur.cri)
      let x= false
    if(all!==null){
    all.forEach(e => {
      
      if(!x){
     if( e.userId===curref.current?.cri){
      
      setonline(true)
      x=true
     }else{
      setonline(false)
    
      
      x=false
     }}
    
    })
    
    
    }
    
    
    },[all,curref.current])

    /* useEffect(()=>{
      async function pp(){
        let pp1 = await db.get("pp")
        let x= await db.get("chatsbackup")
        let resulte
    console.log(up.cid)
        let pp2=[]
        if(pp1===null&&person.length!==0){
         console.log("ko")
         person.forEach(e => {
    
           x.forEach(a=>{
            
           if(a.members[0]!==na.id &&a.members[0]===e._id||a.members[1]!==na.id &&a.members[1]==e._id){
             
           pp2=[...pp2,e]
           }
           })
         });
         await db.set("pp",pp2)
         let filtered= pp2.forEach((v,i) => {
       
           if(v._id===kar){
             resulte=i
           }})
          console.log(pp2)
         
          setpp(pp2[resulte])
        }else{
          if(pp1!==null){
         
        let filtered= pp1.forEach((v,i) => {
    
         if(v._id===kar){
    
           resulte=i
         }})
    
       
        setpp(pp1[resulte])}
       }
         }
         pp()
    
    },[db]) */

    useEffect(()=>{
    async function ff(){
    //let chat =await db.get("chatsbackup")
    let result 
    const time=new Date(Date.now()).toISOString()
     /* chatsbackup.current.forEach((v,i) => {
      if(v._id===id){
        console.log(chat[i])
        result = i
      }
    }) */
    console.log("llll")
    chatsbackup.current[result1].updatedAt= time
    chatsbackup.current[result1].seen=[false,messages[0].createdAt] 
    console.log(chatsbackup.current)
   await db.set("chatsbackup",chatsbackup.current)
   console.log(chatsbackup.current)
   await axios.put(`${prt}/conversations/${curref.current.cid}`,{
    seen:[false,messages[0]._id],
  }).then((res)=>{
    console.log(res)
    //resp=[res.data.members[4],res.data.members[5]]
    //setcur()

   
    //console.log("bu da")
  }).catch((e)=> console.log(e))
   setseen(false)
   


    }
     if(db!==null&&update&&!inchat)ff()


    },[messages[0],db])
      let clas=`scrollbar relative pr-2  mt-2 ml-1.5 mr-0 mb-1 overscroll-contain h-screen md:scrollbar-width-2 xs:scrollbar-width-1 flex-col-reverse flex  overflow-y-scroll  scrollbar-track-transparent scrollbar-thumb-scroll dark:scrollbar-thumb-dark `   
      let clas1=" scrollbar relative pr-2 mt-2 ml-1.5 mr-0 mb-1 h-screen overscroll-contain md:scrollbar-width-2   xs:scrollbar-width-1 flex-col-reverse flex   overflow-y-scroll  scrollbar-track-transparent scrollbar-thumb-transparent"
      
      let scro= src.current
      let time
      useEffect(()=>{
        //setmessages([])  
     
          //load.current=false  
     
        
        page.current=1
       //console.log(page.current)
       //curref.current=cur.cid
       //console.log(cur.cid)
      //console.log("2")
       takp.current=true
       //setflag1(new curay(flag1.length).fill(true))
       async function as() {
        
        if(db!==null){
          //console.log("n")
        //console.log(curref.current)
          messagesfromdb.current= await db.get(id)
        const a = await db.get("page")
        if(a!==null)  await db.set("page",1)
       }
       
       let a = document.getElementById("last")
       if(a){
         //a.scrollIntoView({behavior:"smooth"})
         //load.current=false
       }
      //console.log(cur.cid)
        await Filesystem.writeFile({
          path: 'con.json',
          data: JSON.stringify({cconversationid:cur.cid}),
          directory: Directory.Data,
          encoding: Encoding.UTF8,
        })
      
      }
       if(cur.cid!==undefined) as()
      async function asa1(){
        await Filesystem.writeFile({
          path: 'con.json',
          data: JSON.stringify({cconversationid:""}),
          directory: Directory.Data,
          encoding: Encoding.UTF8,
        })

      }
       
       return () => asa1()
        //load.current=true
      },[db,cur])
      
      async function asa(){
        /* if(window.screen.height>scro.offsetHeight+(-Math.floor(scro.scrollTop))){

          
        }else{ */
        /* console.log(scro.offsetHeight+(-Math.floor(scro.scrollTop)))
        console.log()
        console.log(scro.scrollHeight) */
        //console.log(window.screen.height)
        //console.log(scro.offsetHeight+(-Math.floor(scro.scrollTop)))
        if(scro.offsetHeight+2+(-Math.floor(scro.scrollTop))>=scro.scrollHeight&&load.current===false){          
          
          console.log("o")
          
          load.current=true
          page.current=page.current+1
          /* const pagep =  await db.get("page") || 1
        
          await db.set("page",pagep+1) */
        
         console.log(page.current)
         if(messagesfromdb.current!==null){
          console.log(messagesfromdb.current.length)
          console.log(mfd.current)
          let newmessages
          if(mfd.current===10){
            console.log("10")
            newmessages = messagesfromdb.current.slice((page.current-1)*10,page.current*20)
            //mfd.current=20
            //page.current=page.current-1
          }else{
            console.log("kokok")
            newmessages =messagesfromdb.current.slice((page.current-1)*20,page.current*20)
        }
         setmessages(p=>[...p,...newmessages])
        }else{
          console.log(messagesfromdb)
          //setmessages(p=>[...p,...messagesfromdb])
        }
      
       }else{ 
        load.current=false
 
 
      }
             scro.className=clas        
             clearTimeout(time)
             time=setTimeout(() => {
               scro.className=clas1
         
             },1000) 
          
        }
     
 
if(scro){  

     
scro.addEventListener("scroll",asa)


}

      /* async function asa(){
                if(scro.offsetHeight+(-Math.floor(scro.scrollTop))>=scro.scrollHeight&& load.current===false){
  
                  load.current=true
                  page.current=page.current+1
                  const pagep =  await db.get("page") || 1
                
                  await db.set("page",pagep+1)
                  console.log(pagep)
                 
                  const messagesfromdb.current = await db.get(curref)
                  
                  console.log(page.current)
                  if(messagesfromdb.current.length!==0&&messagesfromdb.current.length!==pagep+1*20){
            
                  axios.get(`${prt}/messages/${curref}`,{headers:{Authorization:a,page:page.current}}).then(async(res)=>{
                   
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
                    let all = messagesfromdb.current.concat(res.data)
                    console.log(all)
                    await db.set(current.cid,all)
                    //scro.className=clas1
      
                    //scro.scrollTop=av.current
                     //console.log(message)
                     
                     })}else{
                      
                        setmessages(messagesfromdb.current)
                     }
                  
                }
              scro.className=clas        
            clearTimeout(time)
            time=setTimeout(() => {
              scro.className=clas1
      
            },350) 
         
      }
      if(scro){  
        
             
        scro.addEventListener("scroll",asa)

  } */
  
  
  /*     let ad =document.querySelectorAll("#last")
      let lastelement
      if(ad.length!==0){
        let b = ad.length-1
        lastelement= ad[b].getAttribute("k")
        
      } */
      //aşağıdaki useeffectin last son last değişkeninden sonra.
 /*   let spans = last.getElementsByTagName("span");
            console.log(spans[0].innerText)
            console.log(messages[0].text)
            let lastindex=a[b].getAttribute("k") */
   
     /*  useEffect(()=>{
       // load.current=false

       
      },[messages[0]]) */

      useEffect(()=>{
        //load.current=false

        setTimeout(() => {
          
            let a =document.getElementById("last")
            
          if(scro&&a&&!inchat){
            /* let b = a.length-1
            let beforelast=a[b-1]
            let last = a[b] */
            a.scrollIntoView()
           /* 
            if(last)
           {
            
            
         
          } */
           
          }
        }, 0);
      },[messages[0],seen])


      

      
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
  

    /* useEffect(()=>{
      console.log(88)
      //setmessages([])
 if(sock.current){
      sock.current=io(prt)
      sock.current.emit("no",na.id)
      sock.current.on("get",(e)=> {

       setall(e)
      //console.log(e)
    })
  }
  return ()=>{
    sock.current.disconnect()
  }
    
    },[cur]) */
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
  
    if(cur.cam!==undefined){
    if(cur.cam.includes(ne.sender)&&cur.cam.includes(ne.receiver))
   { 
    console.log("bok")
    //setmessages((p)=>[ne,...p])
    fun()
    //current.cam=undefined
  // alert(messagesfromdb)


  }}
  async function fun(){
if(messagesfromdb.current!==null){

    let ee = [ne,...messagesfromdb.current]
    messagesfromdb.current=ee
    if(Capacitor.getPlatform()==="web"){
      console.log("1")
    //await db.set(curref.current,messagesfromdb.current)
  }
  }


}
 // fun()
    //if(current)

  },[ne])

  /* useEffect(()=>{
    if(current.cam!==undefined){
    if(current.cam.includes(ne.sender)&&current.cam.includes(ne.receiver))
   { 
    setmessages((p)=>[ne,...p])
    fun()
    //current.cam=undefined
  // alert(messagesfromdb)


  }}
  async function fun(){

    let ee = [ne,...messagesfromdb.current]
 
    await db.set(curref,ee)
  }
 // fun()
    //if(current)

  },[current,ne]) */


  
  /*  useEffect(()=>{
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
   },[all]) */
 
   /* useEffect(()=>{
    async function a(){
      console.log(`${prt}/conversations/${na.id}`)
      const convers = await axios.get(`${prt}/conversations/${na.id}`,{headers}).then((res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        setmpeop(res.data)
        //console.log("444")
        let trues = new curay(res.data.length).fill(true)
        setflag1(trues)
       //console.log(res.data)
    }).catch((err)=>{
        console.log("hata")
      })
    }
   a()

   },[ne]) */

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
//2022-10-06T14:47:36.269Z
//2022-10-06T14:47:06.269Z


useEffect(()=>{

 let result
 let see

  async function seen(){

    //chatsbackup.current=await db?.get("chatsbackup")
    chatsbackup.current?.forEach(async(c,i)=>{
if(c._id===curref.current?.cid){
/* console.log("12")
console.log(c.seen)
console.log(messages) */
  if(messages[0]?.sender!==na.id&&c.seen[1]!==messages[0]?.createdAt){
    
    chatsbackup.current[result1].seen=[true,messages[0]?.createdAt] 
   await db.set("chatsbackup",chatsbackup.current)
   await axios.put(`${prt}/conversations/${curref.current?.cid}`,{
     seen:[true,na.id],
   }).then((res)=>{
     
     //resp=[res.data.members[4],res.data.members[5]]
     //setcur()
     //console.log("bu da")
   }).catch((e)=> console.log(e))
   setseen(true)
 
 }else{
  if(c.seen[0]===true&&!inchat){
    

    see=true
    setseen(true)
  }else{
    //console.log(c.seen[0])
    see=false
    setseen(false)
  }
 }
}
    })  
  }
  setTimeout(() => {
    seen()
    
  }, 0);
},[messages[0],db,inchat])
   async function gon(event){
    
   


    const time=new Date(Date.now()).toISOString()
    //event.preventDefault()
    /* let chat =await db.get("chatsbackup")
    let result 
     chat.forEach((v,i) => {
      if(v._id===id){
        console.log(chat[i])
        result = i
      }
    })
    console.log(chat)
    chat[result].updatedAt= time
    console.log(chat)
  await db.set("chatsbackup",chat)
    console.log(time) */
    event.preventDefault()
    
    setupdate(true)
    //event.stopPropagation()
    let t
    let value
    t = document.getElementById("tex")
    value = t.value.trim()
    t.focus()
   if(value !==""){
    setmessages(prev =>[{sender:na.id,receiver:cur.cri,text:value,createdAt:time},...prev])
    t.value=""
    sock.current.emit("send",{sender:na.id,receiver:cur.cri,text:value,conversationid:cur.cid,createdAt:time})
    let addnewmessage
    if(messagesfromdb.current!==null){
       addnewmessage = [{sender:na.id,receiver:cur.cri,text:value,conversationid:cur.cid,createdAt:time},...messagesfromdb.current]
    }else{
       addnewmessage = [{sender:na.id,receiver:cur.cri,text:value,conversationid:cur.cid,createdAt:time}]
    }
    
    messagesfromdb.current=addnewmessage
    /* const addnewmessage = [{sender:current.csi,text:value,conversationid:current.cid},...messagesfromdb.current]
    messagesfromdb.current=addnewmessage
     await db.set(current.cid,messagesfromdb.current) */

     
     await db.set(cur.cid,messagesfromdb.current)
     await axios.post(`${prt}/messages`,{
      conversationid:cur.cid,
      sender:na.id,
      text:value,
      receiver:cur.cri,
      name:na.name
     }).then(async(res)=>{ 
      console.log(res.data)
    
      //console.log(addnewmessage)
      
      //setwrite("")
      
       //console.log(messages)
             
     }).catch((err)=>{
      console.log("hata")
    })
  }}
  /* async function gon(event){
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
    sock.current.emit("send",{sender:na.id,receiver:current.cri,text:value})
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
  }} */

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





function handleGesture(event,elapsedTime) {
  //setn1(event.touches.length)
   //alert(n2.current)
  console.log(zoom.current)
  if(n2.current==1&&elapsedTime!==0&&elapsedTime<=200&&zoom.current===false){
  

    console.log("ewq")
    if (touchendX < touchstartX) {

        //alert('Swiped left');
    }
    
    if (touchendX > touchstartX) {
        //alert('Swiped right');
     
    
    }
    
    
    
    if (touchendY-touchstartY>=100) {
      //down
      console.log("kks")
      setimage(false)
     setisopened(false)
     setisopenedm(false)
      //setisopened(false);
    }else if(touchstartY-touchendY&&touchstartY-touchendY>=100) {
    
      //document.getElementById("tex").focus()
      //up
      setimage(false)
     setisopened(false)
     setisopenedm(false)
 
    }
    
    if (touchendY === touchstartY) {
       //tap
    }}
}
var tapedTwice = false;
let x=0
let t
useEffect(()=>{
  
  let im = document.getElementById("img")
  if(im!==null){
    setTimeout(() => {
      let x = im.getBoundingClientRect()
      img.current=x.height
      //alert(img.current)
    }, 1000);
 

  //setn1(x.left)
}

  let gestureZone = document.getElementById("rr"),startTime,elapsedTime
  
  if(gestureZone){
  gestureZone?.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    startTime = new Date().getTime()
    //alert(event.touches.length)
    setn1(event.touches.length)
    n2.current=event.touches.length
    handleGesture(event,0)

   
    //alert("dy")
        if(!tapedTwice) {
          console.log("ok")
          /* 
          t=setTimeout(() => {
            setisopenedm(false)
          }, 1000); */
            tapedTwice = true;
            setTimeout( function() { tapedTwice = false
              
            }, 300 );
            return false;
        }else{
          clearTimeout(t)
          //setisopenedm(true)
          x=x+1
         
          if(x%2==0){
            console.log(x)
            zoom.current=false
            doubletap.current=true
            setdoubletap1(true)
          }else{
            zoom.current=true
            doubletap.current=false
            setdoubletap1(false)
          }
          
          
          console.log('You tapped me Twice !!!');
        }
        //event.preventDefault();
        //action on double tap goes below
       
     
    
    
}, false);
gestureZone?.addEventListener('dblclick', (event) => {

  console.log("ok")
});
gestureZone?.addEventListener('touchmove', function(event) {
  console.log("a")
 //handleGesture(event,0)
 
}, false); 

gestureZone?.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    elapsedTime = new Date().getTime() - startTime 
    //alert(event.touches.length)
  
              
   
    handleGesture(event,elapsedTime);
   
}, false); }



//console.log(dd)


},[isopened])


/* useEffect(()=>{
  console.log(flag1)
  if(flag1.filter(Boolean).length>=2){
    console.log("heyo")
    let dis=flag1.filter(Boolean).length
    let newart=new curay(dis).fill(true)
    //  setflag1(newart)
    console.log(flag1)
  }

},[flag2]) */
let goback = window.onpopstate = e => {
  //your code...
  //setmessages([])
  setTimeout(() => {
    sock.current.emit("outchat",cur.cri)
    nav(-1)
  }, 0);
  
  
}

/* const coreMarkets = [
  { iso2: 'at', name: 'Austria' },
  { iso2: 'ch', name: 'Switzerland' },
  { iso2: 'de', name: 'Germany' },
  { iso2: 'es', name: 'Spain' },
  { iso2: 'fi', name: 'Finland' },
  { iso2: 'gb', name: 'Great Britain' },
  { iso2: 'it', name: 'Italy' }
]
const marketFocus = ['de', 'fi', 'it', 'gb', 'ch', 'es', 'at']
  
const sortMarkets = (array, sortArray) => {
  return [...array].sort(
    (a, b) => sortArray.indexOf(a.iso2) - sortArray.indexOf(b.iso2)
  )
} */
//console.log(sortMarkets(coreMarkets,marketFocus))

useEffect(()=>{
if(doubletap1){
  
setTimeout(() => {
  
  doubletap.current=false
}, 100);
}

},[doubletap1])



let dat= new Date().toLocaleDateString("tr-TR");
let year = dat.toString().slice(-4)
//let day=dat.toString().slice(0,2) + dat.toString().slice(3,5);
//console.log(pp.profilepicture)

    if(ani&&bni){
      return(
      <div className={isDarkMode ? "absolute bg-black top-0 bottom-0 right-0 left-0 ":null}>
      <div id="modal" className={`${bg} animate-wiggle dark:bg-black min-h-screen justify-center`}>
      <div className={ seen===null&&isDarkMode ? `absolute z-10 bg-black inset-0 `:null || seen===null&&!isDarkMode ? `absolute z-10 bg-white inset-0 `:null}></div>
             {/* {image ?  <div className="w-screen absolute right-0 left-0 mx-auto"><FilePond allowImageTransform onupdatefiles={setFiles}  allowImageResize={true} files={Files} allowFileEncode  imageResizeTargetHeight={1280} imageResizeTargetWidth={720} labelIdle="Sürükle Bırak veya Dokun" imagePreviewHeight={avv? avv:1024}  acceptedFileTypes={["image/*"]} 
           imagePreviewUpscale={true} credits={false} ></FilePond></div>:null} */}
      
{/*       <input className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name"  name="name" type="text" autoComplete="name" />
 */}  

{load1? <div className={`${textcolorblue} ${darktext} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center  text-2xl`}>Yükleniyor

<span className={`${textcolorblue} ${darktext} dot1`}>.</span>
<span className={`${textcolorblue} ${darktext} dot2`}>.</span>
<span className={`${textcolorblue} ${darktext} dot3`}>.</span>
</div>:null}
{isopened && <div className="absolute z-10 inset-0 h-screen w-screen">

{/* <button onClick={()=> {setisopened(false) 
setimage(false) }}  className=" absolute right-2 top-2 bg-indigo-600">
<img className="mx-auto h-5" src={carpı} alt=""/>
</button> */}

  



<div id="rr" className="flex justify-center h-full items-center bg-white dark:bg-black " onClick={()=>{
t= setTimeout(() => {
  
  setisopenedm(!isopenedm)
}, 200);

  //
  }}>
             <TransformWrapper doubleClick={{step:1}}    onZoom={()=>{
                
 
              
                            
                            }
              
             } onZoomStop={()=> {
              let im = document.getElementById("img")
              if(im!==null){
              let x = im.getBoundingClientRect()
              console.log(x.height)
              //img.current=x.x
              //setn1(x.left)
              console.log(x.x-img.current)
              if(x.height-img.current<=0.7){
                doubletap.current=false
                console.log("q")
                zoom.current=false
              }else{
                console.log("w")
                zoom.current=true
              }
            }} } >{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                {doubletap.current &&n2.current===1 ? resetTransform(30,"easeOut"):null}
                 <TransformComponent onDoubleClick={()=>{console.log("ok")}} > 
                 
                <img id="img"   className="h-screen w-screen object-contain" src={sendedimage.current} alt=""/>
                </TransformComponent></>
    
        )}
              
               </TransformWrapper>
             </div>
             {isopenedm&&!doubletap.current&&!zoom.current ?<><div className="h-20 opacity-60  absolute  top-0 inset-0 bg-black"></div>
             <Back className={`absolute z-10 left-[1.7rem] opacity-100 inset-0 top-[1.7rem] ${specialwhitetextdark} ${specialwhitetext}`} width="1.5rem" height="1.7rem" onClick={() => {
              setisopened(false);
              setimage(false);
              setisopenedm(false);

            } } />
            <Download className={`absolute h-[2.5rem] w-[2.5rem] z-0 top-[1.25rem] right-[1.7rem] ${specialwhitetext} ${specialwhitetextdark} `} onClick={async()=>{
   const fileName = new Date().getTime() + '.jpeg';
   const ok = await Filesystem.writeFile({
   path: fileName,
   data: sendedimage.current,
   directory: Directory.Documents
   
   })
   if(ok){
    alert1.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000})
   }}}/>
            <div className="absolute bottom-0 opacity-60   bg-black w-full  h-20"></div></>:null}
             </div>
             
           
            }
     
        {cur.cid!==""?(<div id="src3" className={`flex flex-col w-screen h-screen ${bg} dark:bg-black rounded-lg sm:px-30 pt-1`}>

         <div id="src2" className={`min-h-full w-full flex flex-col ${bg} dark:bg-black rounded-lg pr-1  pt-1 `}>
          
         <div className={`flex flex-row   justify-between dark:bg-[#0f0f0f] border-[#097EFE] ${specialwhitebg} border-solid border-[0.15rem] ${darkborderinput} items-center mr-1.5 ml-2.5 mt-0.5 h-[5rem] text-white xs:text-lg font-medium md:text-lg rounded-2xl`}>
         <div className="flex items-center   h-full">

       {!isopened ?<Back className={`flex ml-2.5 ${textcolorblue} ${specialwhitetextdark}`} width="1.5rem" height="1.7rem" onClick={()=>goback()} />:null}
<div className="flex items-center mr-2 ml-1  h-full rounded-full  p-2 aspect-square ">
{pp!==null && pp!==undefined ? <div className="mr-2.5 relative max-w-[4.1rem] min-w-[4.1rem]  max-h-[4.1rem] min-h-[4.1rem]  " >
              <div className={inchat &&online ? 
              `absolute inset-0 bg-[#0BDA51]  from-[#0295FF] via-[#664BFF] to-[#B50BBA]  w-full h-full rounded-full`: online ?
              `absolute inset-0 bg-gradient-to-r   from-[#0295FF] via-[#664BFF] to-[#B50BBA]  w-full h-full rounded-full`:`absolute inset-0 bg-transparent  w-full h-full rounded-full`}></div><img src={pp} alt="s" className={ online ?`  p-0.5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-1 object-cover rounded-full max-h-[3.75rem] min-h-[3.75rem]  max-w-[3.75rem] min-w-[3.75rem]  `:`  p-0.5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-1 object-cover rounded-full max-h-[4.35rem] min-h-[4.35rem]  max-w-[4.35rem] min-w-[4.35rem]  `} onClick={() => {  } } /></div>:
              <div className="relative mr-2  max-w-[4.1rem] min-w-[4.1rem]  max-h-[4.1rem] min-h-[4.1rem] " ><div className={inchat&&online ? 
              `  absolute top-0 right-0 bg-[#0BDA51]  from-[#0295FF] via-[#664BFF] to-[#B50BBA] w-full h-full rounded-full` : online? `  absolute top-0 right-0 bg-gradient-to-r bg-[#B50BBA] from-[#0295FF] via-[#664BFF] to-[#B50BBA] w-full h-full rounded-full`:
              `  absolute top-0 right-0 bg-transparent w-full h-full rounded-full`}></div ><Profilepic className={online ? `absolute  text-[#8fc4ff] dark:text-[#484745] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black opacity-100  rounded-full w-[3.575rem] h-[3.575rem] mr-2.5`:`absolute text-[#8fc4ff] dark:text-[#484745] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black opacity-100  rounded-full w-[4.575rem] h-[4.575rem] mr-2.5`} /></div>}

</div>
         <div className="flex-col flex h-full">
          <div className="h-4/6 flex flex-col  justify-end">

       <span className={`bg-gradient-to-r  justify-center bg-clip-text items-center text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] `}>{!image? cur.cnm:null}</span>

          </div>
          <div className="relative h-3.5">
          {typing.status&&typing.conversationid===cur?.cid? 
       <div className={`${textcolorblue} ${darktext} absolute bottom-0 text-xs`}>yazıyor
       <span className={`${textcolorblue} ${darktext} dot1 mx-[1.5px]`}>.</span>
       <span className={`${textcolorblue} ${darktext} dot2 mr-[1.5px]`}>.</span>
       <span className={`${textcolorblue} ${darktext} dot3`}>.</span>
       
       </div>:null}</div>
       </div>
</div>
<div className="min-w-8 max-w-8 min-h-8 max-h-8 mr-2">
          <Camicon className={`flex  justify-end w-8 h-8 ${textcolorblue} ml-1 `} onClick={()=>nav("/webcam",{ state: { userid: cur.cri , conid: id },replace:true})} />
          </div>
         </div>

         
         <div id="src" ref={src}className={clas}>
{/*             <div className="flex justify-start  z-1 text-indigo-800 w-full  xs:text-xs md:text-xl ml-1 px-1 xs:rounded-sm md:rounded-md  bg-[#c4b5fd]">{!image? current.cnm:null}</div>
 */}            
 {messages?.map((c,i,f)=>{
  let opt
  if(year===new Date(f[i].createdAt).toLocaleDateString("tr-TR").slice(-4)){
    if(dat===new Date(f[i].createdAt).toLocaleDateString("tr-TR")){
     opt="today"
 
    }else{
      opt ={day:"numeric",month:"long"}
      

    }
    }else{
    opt=  {day:"numeric",month:"long",year:"numeric"}
    }
  if(f[i+1]!==undefined){
       if((new Date(f[i].createdAt).toLocaleDateString("tr-TR")!==new Date((f[i+1]).createdAt).toLocaleDateString("tr-TR"))){

        if(i===0){

          return <div k={i} key={i} id="last" ref={scroll} className="flex flex-col" ><div  className={` flex ml-3.5 mb-5 mt-6 self-center items-center justify-center  px-2 rounded-lg text-sm ${darktext} ${textcolorblue}`}>{opt==="today" ? "Bugün":new Date((f[i]).createdAt).toLocaleDateString("tr-TR",opt)}</div><Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage} /></div>

        }else{
          return <div className="flex flex-col" key={i} ><div  className={`flex ml-3.5 mb-5 mt-6 self-center items-center justify-center  px-2 rounded-lg text-sm ${darktext}  ${textcolorblue} `}>{opt==="today" ? "Bugün":new Date((f[i]).createdAt).toLocaleDateString("tr-TR",opt)}</div><Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage} /></div>

        }

       }else{
        if(i===0){

          return <div k={i} key={i} id="last" ref={scroll}><Mess  open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage} /></div>

        }else{
          return <Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage} />

        }
    
 
       }}else{
       // messages[messages.length-1].createdAt=new Date('05 October 2011 14:48 UTC').toISOString()
        
        if(messagesfromdb.current?.length===messages.length || first1){
            
                  return <div className="flex flex-col"  key={i}><div className={`flex ml-3.5 self-center items-center justify-center px-2 rounded-lg text-sm ${darktext} ${textcolorblue}`}>{opt==="today" ? "Bugün":new Date((f[i]).createdAt).toLocaleDateString("tr-TR",opt)}</div><Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage} /></div>
          
          }


       }
       /* if(i === 0 ) {
        //sc = document.getElementById("src")
        return <div k={i} key={i} id="last" ref={scroll}><Mess key={i} open={setisopened} own={messages[i].sender} on={setimage} message={messages[i]} setmessage={setmessages} images={sendedimage}/></div>  
       }else{
        return <Mess key={i} media={media.current} open={setisopened} on={setimage} own={messages[i].sender} message={messages[i]} setmessage={setmessages} images={sendedimage} />
       } */

      
            }
            
            )}
            
             <span  className="flex w-full pl-4 pt-1 order-first justify-center text-[#B50BBA] text-xs ">{seen&&messages[0]?.sender===na.id&&!inchat? "görüldü":""}</span>
            </div>
            {!isopened && <form className="pb-2 pr-1 pl-2 relative justify-center items-center w-full">
          
               <input id="tex" className={`focus:outline-none w-full h-10 pr-[8rem]  pb-0.5 pl-1.5 focus:border-orange-500 border-solid ${bordercolor} ${textcolorblue} ${bginput} ${darkborderinput} border-[0.15rem] rounded-2xl`}
               //onInput={e => {setwrite(e.target.value)}} 
               
               name="password" type="text" autoComplete="text" onChange={()=>{
                onKeyDownNotEnter()
               }}/>
             <button id="kk" onClick={gon} className={`w-14 bg-gradient-to-r from-[#0295FF] via-[#664BFF] to-[#B50BBA] h-10 absolute right-1 bottom-2  border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white ${buttonbg} dark:bg-black border-solid border-2 ${bordercolor} dark:border-white hover:bg-indigo-700 focus:outline-none  focus:ring-indigo-500 active:bg-indigo-600`}>
             <Send1 className={`h-9  absolute left-1/2 -translate-x-1/2  -translate-y-1/2 right-1/2  `} width="1.7rem" height="1.7em"/>
             </button>
              <div className="absolute  right-[3.8rem] bottom-4 h-10  ">
              <button onClick={ (e)=> {
              e.preventDefault()
              opengallery()
              //nav("/image")
             //setimage(p=>!p)             
            }} className="w-8.5 h-8 items-center mt-3  bg border border-transparent focus:outline-none rounded-md  text-sm font-medium text-white hover:bg-indigo-700  active:bg-indigo-600">
              <Gallery1 className={`h-6 ${svgcamera} dark:text-black`} width="2rem" height="2rem"/>
              </button>
              <button onClick={ (e)=> {
              e.preventDefault()
              //nav("/image")
              takePicture()            
            }} className="w-8.5 h-8  items-center  border border-transparent rounded-md text-sm focus:outline-none font-medium text-white  hover:bg-indigo-700  active:bg-indigo-600">
              <Camera1 className={`h-6 ${svgcamera} dark:text-black`} width="2rem" height="2rem"/>
              </button>
              </div>
           </form>}
             </div>
           
       </div>):(   <div className="bg-indigo-100 grid mt-14 place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mb-3 pt-1 "> 
            
            Lütfen bir sohbet seçiniz
       </div>)}
    </div>
    </div>
    )
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
  