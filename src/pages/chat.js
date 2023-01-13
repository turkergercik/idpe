import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { Link, useNavigate, useParams ,createSearchParams,useSearchParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Conv from "../comp/conv";
import Possib, { b } from "../comp/posib";
import Mess from "../comp/mess";
import { Capacitor } from "@capacitor/core";
import * as jose from 'jose'
import { get } from "../comp/conv";
import { render } from "timeago.js";
import { io } from "socket.io-client";
import { CameraPreview } from '@capacitor-community/camera-preview';
import { ReactComponent as Search } from "../pages/images/search.svg"
import { ReactComponent as Add } from "../pages/images/add.svg"
import { ReactComponent as Back } from "../pages/images/back.svg"
import { ReactComponent as Setting } from "../pages/images/setting.svg"
import { ReactComponent as Logout } from "../pages/images/log-out.svg"
import { ReactComponent as Profilepic } from "../pages/images/user.svg"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ReactComponent as Accept } from "../pages/images/accept.svg"
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { async } from "@firebase/util";
import { App as app } from '@capacitor/app';

//70A1D7
let mp
let sd
function Chat({ typing,ppch,ppcheck,setppcheck,pprenew,peop,setpeop,prt,profilepicture,setprofilepicture,all,sock,db,e,setflag1,flag1,setDarkMode,isDarkMode,setcur,cur,curref}) {
  let bgfordarkmode="dark:bg-[#1a1a1a]"
  let bgblue ="bg-[#A6D1FF]"
  let specialwhitetextdark="dark:text-[#F0EFE9]"
  let specialwhitetext="text-[#F0EFE9]"
  let bluebg = "bg-[#097EFE]"
  let focusborder="focus:border-[#097EFE]"
  let svgsearch="text-[#60ACFF]"
  let bginput="bg-[#F0EFE9]"
  let divisionlinedark="dark:divide-[#F0EFE9]"
  let darkborderinput="dark:border-[#F0EFE9]"
  let darktext="dark:text-[#F0EFE9]"
  let focusvgsearch="focus:border-[#097EFE]"
  let textcolorblue="text-[#097EFE]"
  let divisioncolor="divide-[#90C5FF]"
  let divisioncolorforfirstline="border-[#90C5FF]"
  let maincolor="bg-white"
  let bg="bg-[#E8E8E8]"
  let bordercolor="border-[#60ACFF]"
  //let prt="https://smartifier.herokuapp.com"
    //const [current, setcurrent] = useState({cid:"",cnm:""});
    const [write, setwrite] = useState('');
    const [Some, setSome] = useState('');
    const [ani, setAni] = useState(true);
    const [bni, setBni] = useState(true);
    const [height, setheight] = useState();
    //const[peop,setpeop]=useState([])
    const [check,setcheck]=useState()
    const [ppc,setppc]=useState()
    //const[all,setall]=useState([])
    const[mpeop,setmpeop]=useState([])
    const [sendimage, setsendimage] = useState(null);
    const[mpeopbackup,setmpeopbackup]=useState([])
    const mpeopbackupref =useRef([])
    const[messages,setmessages]=useState([])
    const[isOpenedPeople,setisOpenedPeople]=useState(false)
    const[isOpenedSettings,setisOpenedSettings]=useState(false)
    const [Some1,setSome1]= useState()
    const [delorchange,setdelorchange]=useState(false)
    const [viewpp,setviewpp]= useState(null)
    const[showback,setshowback]=useState(false)
    const [peopbackup,setpeopbackup]=useState([])
    const [pp,setpp]=useState([])
    const [userpp,setuserpp]=useState(null)
    const[ne,setne]=useState([])
    const [scrollh,setscrollh]=useState()
    const href=useRef()
    const people=useRef(null)
    const searchInput =useRef()
    const orientation1=useRef(true)
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = { Authorization:a};
    let nav = useNavigate()
    let n=[]
    const [click,setclick]=useState(true)
    //const socket = useRef()
   

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
  //console.log(cur)
  useEffect(()=>{

 
    //alert("ık")
      app.addListener("backButton",e=>{
        
        if(isOpenedPeople){
          setisOpenedPeople(false)
         
          //alert("ok")
          
 
          //alert(d)
          // alert(c)
        }else if(delorchange){
          setdelorchange(false)
        
          //nav("/chat")
    
      
       
        
     
     
      
    }else if(isOpenedSettings){
      setisOpenedSettings(false)
      //nav("/chat")

  
   
    
 
 
  
}else if(viewpp){
setviewpp(null)
    }
      })
    
      return ()=>{
        //app.removeAllListeners()
      }
     },[isOpenedPeople,isOpenedSettings,viewpp,delorchange])
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
   setprofilepicture(resized)
   
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
  useEffect(()=>{
    setdelorchange(false)
    async function send(){
      
      const time=new Date(Date.now()).toISOString()
      if(profilepicture!==undefined){
      if(profilepicture!==null&&profilepicture!=="null")
   {   
console.log("56")
    setuserpp(profilepicture)
   /*  setmessages(prev =>[{sender:na.id,receiver:cur.cri,media:sendimage,createdAt:time},...prev])
      sock.current.emit("send",{sender:na.id,receiver:cur.cri,media:sendimage,conversationid:cur.cid,createdAt:time}) */
       await axios.put(`${prt}/user`,{
        name:na.name,
        profilepicture:profilepicture,
       },{headers}).then(async(res)=>{ 
        await db.set("profilepicture",profilepicture)
        sock.current.emit("newpp",na.id)
        //setwrite("")
        
         //console.log(messages)
         
         
       }).catch((err)=>{
        console.log("hata")
      })}else if(profilepicture==="null"){
       
        //setuserpp(null)
        
        await axios.put(`${prt}/user`,{
          name:na.name,
          profilepicture:null,
         },{headers}).then(async(res)=>{ 
          await db.set("profilepicture","null")
         sock.current.emit("newpp",na.id)
          //setwrite("")
          
           //console.log(messages)
           
           
         }).catch((err)=>{
          console.log("hata")
        })


      }}
    }
    send()

  },[profilepicture,db])



   useEffect(()=>{
  

    async function get1(){
      const convers = await axios.get(`${prt}/all`,{headers}).then(async(res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
       //await db.remove("pp")
        setpeop(res.data)
        setAni(true)
        setppcheck(true)
        ppch.current=res.data
        setpeopbackup(res.data)
       //console.log(res.data)
    }).catch((err)=>{
        console.log(err)
      })
    }
   get1()
   },[all,pprenew])


   /* useEffect(()=>{
async function pp(){
  console.log(peop)
  let pp1=[]
  if(db!==null){
    let chat= await db.get("chatsbackup")
    let a =await db.get("pp")
 if(a===null&&peop.length!==0){
 console.log(chat)
  peop.forEach(e => {

    chat.forEach(a=>{
     
    if(a.members[0]!==na.id &&a.members[0]===e._id||a.members[1]!==na.id &&a.members[1]==e._id){
      
    pp1=[...pp1,e]
    }
    })
  });
  await db.set("pp",pp1)
  setpp(pp1)
  console.log(pp1)
}else{
  if(pp.length===0){
  setpp(a)
}
}}


}
//pp()

},[peop,db]) */
useEffect(()=>{
  async function profilepic(){
    
    let a = await db?.get("profilepicture")
    
  if(a===null && peop.length!==0){
    peop.forEach(async(c,i)=>{
      if(c._id===na.id &&c.profilepicture!==undefined){
      console.log("ok")
     console.log(c.profilepicture)
     if(c.profilepicture===null){
      
     setuserpp(c.profilepicture)
      //setprofilepicture(a)
      await db.set("profilepicture","null")
    }else{
      setuserpp(c.profilepicture)
      //setprofilepicture(a)
      await db.set("profilepicture",c.profilepicture)

    }
      
      
      }
      })
   
  }else if(a==="null"){
    setuserpp(null)

    //setprofilepicture(a)
  
    
    
  }else{
    setuserpp(a)
  }

    }
    profilepic()

},[peop,db])
   
   useEffect(()=>{

    setmessages([])
    let sd
    async function a(){
    setcur([])
    if(db!=null){
       mp = await db.get("chatsbackup")
      if(mp===null){
        console.log("mp")
      const convers = await axios.get(`${prt}/conversations/${na.id}`,{headers}).then(async(res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        //.sort((a,b)=>a.members[3].localeCompare(b.members[3]))
        setmpeop(res.data)
        setmpeopbackup(res.data)
        mpeopbackupref.current=res.data
        sd = res.data
        mp = res.data
        console.log(peop)
        setflag1(new Array(res.data.length).fill(true))
        if(db!==undefined&&db!==null){
        //await db.set("chats",mp)
         await db.set("chatsbackup",mp)
      }
       //console.log(res.data.length)
    }).catch((err)=>{
        console.log("hata")
      })}else{
        /* console.log(people.current)
        console.log(mp) */
        let mp1=await db.get("chatsbackup")
        /* mp1.forEach((v)=>{
v.members[4]=true
v.members[5]=true

        }) */
        //console.log(mp1)
        await db.set("chatsbackup",mp)
        setmpeopbackup(mp)
        setmpeop(mp)
        setflag1(new Array(mp.length).fill(true))
      }
    }}
   a()
   },[ne,db,e])
   

   useEffect(()=>{
  
    if(Some!==undefined){
    setmpeop([])
mpeopbackup.filter(val=>{
 if((val.members[0]!==na.id&&val.members[2].toLocaleLowerCase('tr').includes(Some.toLocaleLowerCase('tr')) )||(val.members[1]!==na.id&&val.members[3].toLocaleLowerCase('tr').includes(Some.toLocaleLowerCase('tr'))) ){
  setmpeop(p=>[...p,val])
}
})
}
   },[Some])
   document.addEventListener('backbutton', function(){
   console.log("hello")
  })
   useEffect(()=>{
    if(Some1!==undefined){
    setpeop([])   
peopbackup.filter(val=>{
 if(val.name.toLocaleLowerCase('tr').includes(Some1.toLocaleLowerCase('tr'))){
  
  setpeop(p=>[...p,val])
}

})}

   },[Some1])
 //  console.log(mpeop.members[2].toLowerCase(),mpeop[0].members[3].toLowerCase())
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
    sock.current.emit("send",{sender:na.id,receiver:current.cri,text:t.value})
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
 /*  window.addEventListener("orientationchange", function(e) {
    orientation1.current=false
    let availh=window.screen.availHeight
    //console.log(availh)
    let msj=document.getElementById("msj")?.offsetHeight
    let rltv=document.getElementById("rltv")?.offsetHeight
    let scrollh1
    if(window.screen.height<=window.screen.width){
      scrollh1= availh-(msj+rltv)+"px"
    }else{
      scrollh1= availh-(msj+rltv)+"px"
    }
    setTimeout(() => {
      setscrollh(scrollh1)
    }, 0);

  }, false);
useEffect(()=>{
  let availh  
  if(!orientation1.current){
    availh =window.screen.availHeight    
  }else{
    availh=window.innerHeight
  }


    let msj=document.getElementById("msj")?.offsetHeight
    let rltv=document.getElementById("rltv")?.offsetHeight
    let scrollh1
   
    scrollh1= availh-(msj+rltv)+"px"

    setscrollh(scrollh1)
  

},[]) */

const [searchParams, setSearchParams] = useSearchParams();
/* useEffect(()=>{
  if(searchParams.get("modal")!=="people"&&searchParams.get("modal"!==null)){

    nav("/chat",{replace:false})
  }
console.log(searchParams.get("modal"))

},[searchParams]) */

//console.log(window.innerHeight) 
 // console.log(scrollh1,msj,rltv,availh)
//console.log(document.getElementById("main")?.offsetHeight)

  //console.log(current.cid)
 // if(mpeop!==undefined){console.log(mpeop[0].members[2],mpeop[0].members[3])}

function open(){
  nav({
    pathname: "",
    search: createSearchParams({
        modal: "people"
    }).toString()
});
  setisOpenedPeople(true)
 
}

function opensettings(){
  nav({
    pathname: "",
    search: createSearchParams({
        modal: "settings"
    }).toString()
});
  setisOpenedSettings(true)
}

let close = window.onpopstate = e => {
  //your code...

  if(isOpenedSettings){
    setisOpenedSettings(false)
    nav("/chat",{replace:false})
  }
  if(isOpenedPeople){
  
    setisOpenedPeople(false) 
    nav("/chat",{replace:false})}
  
}


let aa = document.getElementById("scrollable")

let clas =`divide-y-2 mb-1 divide-opacity-75 dark:divide-opacity-30 mt-3 ${divisioncolor} ${divisionlinedark}  border-opacity-50 ${divisioncolorforfirstline} scrollbar scrollbar-track-transparent  scrollbar-thumb-scroll dark:scrollbar-thumb-dark overflow-y-auto  scrollbar-width-1`
let clas1 =`divide-y-2 mb-1 divide-opacity-75 dark:divide-opacity-30  mt-3 ${divisioncolor} ${divisionlinedark}  border-opacity-50 ${divisioncolorforfirstline} scrollbar scrollbar-track-transparent  scrollbar-thumb-transparent dark:scrollbar-thumb-transparent overflow-y-auto  scrollbar-width-1`
if(aa){ 
  aa.addEventListener("scroll",function(e){
    let time 
    aa.className=clas     
    clearTimeout(time)
    time=setTimeout(() => {
      aa.className=clas1
    
    },500) 

  })



}
function handleGesture(event,elapsedTime) {
  //setn1(event.touches.length)
   //alert(n2.current)
    console.log("ewq")
  if(elapsedTime<=200){  if (touchendX < touchstartX) {

        //alert('Swiped left');
    }
    
    if (touchendX > touchstartX) {
        //alert('Swiped right');
     
    
    }
    
    
    
    if (touchendY-touchstartY>=100) {
      //down
      console.log("kks")
  setviewpp(null)
     
      //setisopened(false);
    }else if(touchstartY-touchendY&&touchstartY-touchendY>=100) {
      setviewpp(null)
      //document.getElementById("tex").focus()
      //up
   
 
    }
    
    if (touchendY === touchstartY) {
       //tap
    }}
}
let touchstartX
let touchstartY
let touchendX
let touchendY
let startTime
let elapsedTime
useEffect(()=>{

  let gestureZone = document.getElementById("view")
  let aa
  let bb
  let cc
  if(gestureZone){
  gestureZone?.addEventListener('touchstart',aa= function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    startTime = new Date().getTime()
    //alert(event.touches.length)
    
    handleGesture(event)
   
    //alert("dy")
        //event.preventDefault();
        //action on double tap goes below
       
     
    
    
}, false);
gestureZone?.addEventListener('touchmove',bb= function(event) {
  console.log("a")
 //handleGesture(event,0)
 
}, false); 

gestureZone?.addEventListener('touchend',cc= function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    elapsedTime = new Date().getTime() - startTime 
    //alert(event.touches.length)
  
              
   
    handleGesture(event,elapsedTime);
   
}, false); }



//console.log(dd)
return ()=>{
  if(gestureZone){
  gestureZone.removeEventListener('touchstart',aa)
  gestureZone.removeEventListener('touchend',cc)}
}

},[viewpp])
//document.getElementById("name")?.addEventListener('paste', e => e.preventDefault());

if(ani&&bni){
      return(
        <div className={isDarkMode ? "absolute  bg-black top-0 bottom-0 right-0 left-0 ":null}>
          <div className="animate-wiggle1">
          <div className={ !ppc&&isDarkMode ? `absolute z-10 bg-black inset-0 `:null || !ppc&&!isDarkMode ? `absolute z-10 bg-white inset-0 `:null}></div><div ref={href} id="main" className={` dark:bg-black ${maincolor} h-screen flex flex-col px-2 lg:px-2 w-screen`}>

          <div id="msj" className={isDarkMode? `snow3 pointer-events-auto flex flex-row  items-center${maincolor} md:text-xl xs:text-lg text-white  p-1`:`flex flex-row  items-center${maincolor} md:text-xl xs:text-lg text-white  p-1`}>
  
           
           <div className={isDarkMode? " absolute inset-0 pointer-events-none opacity-30 snow2":null}></div>
           <div className={isDarkMode? " absolute inset-0 pointer-events-none snow1":null}></div>
            <span className={` font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] py-8 mt-1 rounded-lg md:px-1 text-[2.3rem] ${textcolorblue}`} onClick={async () => {
              close();
            } }>Sohbetler</span>
            
            <span className="flex items-center ml-auto pl-1 mt-1">
              <Setting className={`flex  font-medium ${textcolorblue} ${darktext} mr-1 dark:opacity-100`} width="1.7rem" height="1.7rem" onClick={async () => { opensettings(); } } />
            </span>
            {/*  <span className="flex ml-auto mt-2">
     <DarkModeSwitch className=" focus:outline-black focus:invisible"
style={{ marginBottom: '' }}
checked={isDarkMode}
onChange={()=>setDarkMode(!isDarkMode)}
size={30}
/>
     </span> */}
          </div>
          <div className="h-10 relative">
            <input value={Some} ref={searchInput} onFocus={() => close()} className={`unselectable ${darkborderinput} focus:outline-none pl-2 ${textcolorblue} h-10 ${bginput} ${focusborder} ${bordercolor} border-solid border-[0.15rem]  rounded-xl w-full`} id="name" onInput={e => setSome(e.target.value)} name="name" type="text" />

            <Search className={`absolute right-3 top-2 ${svgsearch} dark:text-black`} width="1.5rem" height="1.5rem" />
          </div>
          <div id="scrollable" className={clas}>

            {mpeop.sort(function (a, b) {
              if (a.updatedAt < b.updatedAt)
                return 1;
              if (a.updatedAt > b.updatedAt)
                return -1;
              return 0;
            }).map((c, i) => (<Conv  typing={typing} ppcheck={ppcheck} setppcheck={setppcheck} pprenew={pprenew} e={e} setppc={setppc} all={all} viewpp={viewpp} setviewpp={setviewpp} pp={pp} check={check} setcheck={setcheck} db={db} person={peop} height={height} curref={curref} setflag1={setflag1} flag1={flag1} key={i} k={i} mesa={mpeop} changeconv={setmpeop} setmessage={setmessages} messageler={messages} setcur={setcur} convs={mpeop[i]} setnewm={ne} />)


            )}
          </div>

          {/* <div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 ">
                
                Lütfen bir sohbet seçiniz
           </div> */}


          {/* <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
  <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Kişiler</span>
</div> */}
          {/*  {peop.map((c,i)=> (<Possib key={i} click={setclick}  cur={setcurrent} mesa={mpeop} message={setmpeop} person={peop[i]}/>)
  

  )} */}

          <span className={`fixed bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-[#097EFE] dark:bg-black opacity-90 dark:opacity-100  ${textcolorblue}`}>
            <Add width="2.5rem" height="2.5rem" className={`${svgsearch} ${darktext}`} onClick={() => open()} />
          </span>
{/* {viewpp!==null ? <><div id="view" className={`absolute bg-black inset-0 h-screen w-screen`} onClick={()=>setshowback(!showback)}>


             <TransformWrapper > 
             <TransformComponent>
                <img id="img"   className="h-screen w-screen object-contain" src={viewpp} alt=""/>
                </TransformComponent>
  
              
               </TransformWrapper>
             </div>
            {showback ? <><div className="absolute h-20 opacity-60 bg-black top-0 right-0 left-0 "></div><div className="absolute h-20 opacity-60 bg-black bottom-0 right-0 left-0 "></div><Back className={`${specialwhitetext} ${specialwhitetextdark} absolute h-[1.7rem]  w-[1.5rem] top-[1.7rem] left-[1.7rem]`} onClick={()=>{
              setshowback(false)
              setviewpp(null)}} /></>:null}</>
             :null
    



} */}
          {isOpenedPeople ? <div className={`absolute  inset-0 h-screen dark:bg-black bg-white ${divisioncolor}`}><div className="flex pt-2 flex-col h-full w-full p-2 ">
            <div className="flex flex-row">
              <span className={`font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] text-[2.3rem] px-1 py-8 mb-1 transparent `}>
                Kişiler</span>
              <span className={`absolute top-3 right-2.5 rotate-45 rounded-full bg-white dark:opacity-100 dark:bg-black  ${textcolorblue} `} onClick={() => close()}>
                <Add width="2rem" height="2rem" className={`${svgsearch} ${darktext}`} onClick={() => open()} />
              </span>
            </div>
            <div className="relative">
              <input value={Some1} className={` focus:outline-none pl-2 mb-3 ${darkborderinput} ${textcolorblue} h-10 ${bginput} ${focusborder} ${bordercolor} border-solid border-[0.15rem]  rounded-xl w-full`} id="name" onInput={e => setSome1(e.target.value)} name="name" type="text" autoComplete="name" />
              <Search className={`absolute right-3 top-2 ${svgsearch} dark:text-black`} width="1.5rem" height="1.5rem" />
            </div>
            <div className={`scrollbar scrollbar-track-transparent scrollbar-thumb-scroll dark:bg-black dark:scrollbar-thumb-dark bg-white divide-y-2  divide-opacity-75 dark:divide-opacity-30 mb-1 w-full ${divisionlinedark} ${divisioncolor}`}>



              {peop.map((c, i) => (<Possib prt={prt} db={db} key={i} setisOpenedPeople={setisOpenedPeople} flag1={flag1} setflag1={setflag1} click={click} setcur={setcur} mesa1={mp} message={setmpeop} person={peop[i]} convs={mpeopbackup[i]} />)


              )}
            </div></div></div> : null}
          {isOpenedSettings ? <><div className={`absolute inset-0 h-screen opacity-90 dark:opacity-95  bg-[#C0C0C0] dark:bg-[#242424] ${bordercolor}  ${divisioncolor}`} onClick={() => setisOpenedSettings(false)}></div>
            <div className={`absolute inset-0 px-2  h-screen w-4/6 top-0 left-auto rounded-l-2xl dark:bg-black bg-white dark:border-opacity-100 ${darkborderinput}  ${bordercolor} border-4 ${divisioncolor}`}>

              <div className="flex py-1  flex-col h-full ">
                <span className={` mt-1 w-[2rem] h-[2rem] rotate-45 flex self-end rounded-full  bg-white dark:bg-black ${textcolorblue} `} onClick={() => { close(); } }>
                  <Add width="1.8rem" height="1.8rem" className={`${svgsearch} ${darktext} dark:opacity-100`} />
                </span>
                {userpp !== null ? <img src={userpp} onClick={() => {
                  setdelorchange(true)
                  //opengallery()
                }
              } className="h-[5rem] min-w-[5rem] max-w-[5rem] object-cover self-center rounded-full " /> : <Profilepic onClick={() => {
                  
                  opengallery();


                } } className={`${textcolorblue} ${darktext} h-[5rem] w-[5rem]  opacity-30 self-center rounded-full`} />
                }
                {delorchange ? <><div className={`fixed  dark:bg-black inset-0 ${maincolor} z-10`} onClick={() => setdelorchange(false)}>

                    </div><div className={`fixed ${bluebg} ${bgfordarkmode}  px-2 z-10 w-5/6 h-1/6 min-h-[3rem] max-h-[7rem] rounded-xl  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} onClick={() => { console.log("koko") } }>
                      <div className="flex flex-col  divide-y-2 w-full h-full">
<div className={`w-full flex font-semibold ${specialwhitetextdark} ${specialwhitetext}  justify-center items-center h-1/2`} onClick={()=>{
  opengallery()
  
}} >Değiştir </div>
<div className={`w-full flex font-semibold ${specialwhitetextdark} ${specialwhitetext} justify-center items-center h-1/2`} onClick={()=>{
setuserpp(null)
  setprofilepicture("null")
}} >Kaldır</div>

                      </div>
                      </div></>:null

                }
                <div className="flex flex-row items-start ">
                  <span className={`pb-7 font-bold w-32 bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] text-[2rem] px-1 `}>Ayarlar</span>
                  <span className="flex ml-auto mt-2 mr-0.5">
                    <DarkModeSwitch className=" focus:outline-black focus:invisible"
                      style={{ marginBottom: '' }}
                      checked={isDarkMode}
                      onChange={() => {
                        if (isDarkMode) {
                          let x = localStorage.setItem("darkmode", false);
                          setDarkMode(false);
                        } else {
                          let x = localStorage.setItem("darkmode", true);
                          setDarkMode(true);
                        }

                      } }
                      size={30} />
                  </span>
                </div>

                <div className={`flex scrollbar-track-transparent scrollbar-thumb-scroll dark:bg-black bg-white divide-opacity-75   ${divisioncolor}`}>
                  <span className={`flex mt-2 bg-[#F0F0F0] dark:bg-[#141414] text-center text-base font-medium items-center justify-center w-full h-12 rounded-xl mb-1 ${darktext} ${textcolorblue}`}>Profil Ayarları</span>
                </div>
                <span className=" flex justify-center mt-auto mb-1">
                  <Logout className={`${textcolorblue} ${darktext} rotate-180`} preserveAspectRatio="none" height="2rem" width="2.2rem" onClick={async () => {
                    localStorage.clear();
                    await db.clear();
                    setTimeout(() => {
                      nav("/login");
                    }, 100);

                    window.location.reload();
                  } } />
                </span>
              </div>
            </div>
          </> : null}

        </div></div></div>)
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
  