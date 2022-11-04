import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { Link, useNavigate, useParams ,createSearchParams,useSearchParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import Conv from "../comp/conv";
import Possib, { b } from "../comp/posib";
import Mess from "../comp/mess";
import * as jose from 'jose'
import { get } from "../comp/conv";
import { render } from "timeago.js";
import { io } from "socket.io-client";
import { CameraPreview } from '@capacitor-community/camera-preview';
import { ReactComponent as Search } from "../pages/images/search.svg"
import { ReactComponent as Add } from "../pages/images/add.svg"
import { ReactComponent as Setting } from "../pages/images/setting.svg"
import { ReactComponent as Logout } from "../pages/images/log-out.svg"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
//70A1D7
let mp
function Chat({sock,db,setflag1,flag1,setDarkMode,isDarkMode,setcur,cur,curref}) {
  let bgblue ="bg-[#A6D1FF]"
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
  let prt="https://smartifier.herokuapp.com"
    //const [current, setcurrent] = useState({cid:"",cnm:""});
    const [write, setwrite] = useState('');
    const [Some, setSome] = useState('');
    const [ani, setAni] = useState(true);
    const [bni, setBni] = useState(true);
    const [height, setheight] = useState();
    const[peop,setpeop]=useState([])
    const[all,setall]=useState([])
    const[mpeop,setmpeop]=useState([])
    const[mpeopbackup,setmpeopbackup]=useState([])
    const mpeopbackupref =useRef([])
    const[messages,setmessages]=useState([])
    const[isOpenedPeople,setisOpenedPeople]=useState(false)
    const[isOpenedSettings,setisOpenedSettings]=useState(false)
    const [Some1,setSome1]= useState()
    const [peopbackup,setpeopbackup]=useState([])
    const[ne,setne]=useState([])
    const [scrollh,setscrollh]=useState()
    const href=useRef()
    const searchInput =useRef()
    const orientation1=useRef(true)
    const a = localStorage.getItem("token")
    const na=jose.decodeJwt(a)
    const headers = { Authorization:a};
    let nav = useNavigate()
    let n=[]
    const [click,setclick]=useState(true)
    //const socket = useRef()
    useEffect(()=>{
      
      if(sock.current){
      //sock.current=io(prt)
      sock.current.emit("no",na.id)
      /* sock.current.on("ho",(e)=> console.log(e)) */
      sock.current.on("get",(e)=> {
        setall(e)
    //  console.log(e)
    })
      /* sock.current.on("getm",(e)=> {
         n ={
          sender:e.sender,
          text:e.text,
          createdAt: Date.now(),
          receiver:e.receiver
        }
        setne(n)
        //setmessages((p)=>[...p,n])
        }) */
      }
        //return () => sock.current.disconnect()
    },[cur])
   
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
  console.log(cur)
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
        setpeopbackup(res.data)
       //console.log(res.data)
    }).catch((err)=>{
        console.log(err)
      })
    }
   get1()
   },[all])
   useEffect(()=>{
    setmessages([])
    let sd
    async function a(){
    setcur([])
    if(db!=null){
      let mp = await db.get("chats")
      if(mp===null){
        console.log("mp")
      const convers = await axios.get(`${prt}/conversations/${na.id}`,{headers}).then(async(res)=>{
        if(res.data==="tokExp"){
          localStorage.clear()
          nav("/login")
          window.location.reload()
          //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
        }
        setmpeop(res.data)
        setmpeopbackup(res.data)
        mpeopbackupref.current=res.data
        sd = res.data
        mp = res.data
        setflag1(new Array(res.data.length).fill(true))
        if(db!==undefined&&db!==null){
        await db.set("chats",mp)}
       //console.log(res.data.length)
    }).catch((err)=>{
        console.log("hata")
      })}else{
        console.log("1")
        let mp1=await db.get("chats")
        console.log(mp1)
        setmpeop(mp1)
        setflag1(new Array(mp1.length).fill(true))
      }
    }}
   a()
   },[ne,db])

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
    console.log("k")
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
  if(ani&&bni){
      return(
        <div className="" >
      <div ref={href} id="main" className={` dark:bg-black ${maincolor} h-screen flex flex-col px-2 lg:px-2 w-screen`}>
      
         
           <div id="msj" className={`flex flex-row  items-center${maincolor} md:text-xl xs:text-lg text-white rounded-lg p-1`}>
           <span className={` font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] py-8 rounded-lg md:px-1 text-[2.3rem] ${textcolorblue}`} onClick={async()=>{ 
            close()}}>Sohbetler</span>
            <span className="flex items-center ml-5 mt-1">
           <Setting className={`font-medium ${textcolorblue} ${darktext} mr-1 dark:opacity-100`} width="1.7rem" height="1.7rem" onClick={async()=>{opensettings()}} />
           </span>
           <span className="flex ml-auto mt-2">
           <DarkModeSwitch className=" focus:outline-black focus:invisible"
      style={{ marginBottom: '' }}
      checked={isDarkMode}
      onChange={()=>setDarkMode(!isDarkMode)}
      size={30}
    />
           </span>
           </div>
    <div className="h-10 relative">
     <input value={Some} ref={searchInput} onFocus={()=>close()} className={`${darkborderinput}  focus:outline-none pl-2 ${textcolorblue} h-10 ${bginput} ${focusborder} ${bordercolor} border-solid border-[0.15rem]  rounded-xl w-full`} id="name" onInput={e => setSome(e.target.value)}  name="name" type="text" autoComplete="name"/>
     <Search className={`absolute right-3 top-2 ${svgsearch} dark:text-black`} width="1.5rem" height="1.5rem"/>
     </div>
     <div id="scrollable" className={clas}>
   
    {mpeop.map((c,i)=> (<Conv db={db} height={height} curref={curref} setflag1={setflag1} flag1={flag1} key={i} k={i} mesa={mpeop} changeconv={setmpeop} setmessage={setmessages} messageler={messages} setcur={setcur} convs={mpeop[i]} setnewm={ne}/> )
    

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
      <Add width="2.5rem" height="2.5rem" className={`${svgsearch} ${darktext}`} onClick={()=>open()} />
     </span>

     {isOpenedPeople ? <div className={`absolute inset-0 h-screen dark:bg-black bg-white ${divisioncolor}`}><div className="flex px-2 flex-col h-full w-full p-1 ">
   <div className="flex flex-row" >
   <span className={`font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] text-[2.3rem] px-2 py-8 mb-1 transparent `}>
    Kişiler</span>
   <span className={`absolute top-3 right-2.5 rotate-45 rounded-full bg-white dark:opacity-100 dark:bg-black  ${textcolorblue} `} onClick={()=>close()}>
      <Add width="2rem" height="2rem" className={`${svgsearch} ${darktext}`} onClick={()=>open()} />
     </span>
     </div>
     <div className="relative">
     <input value={Some1} className={` focus:outline-none pl-2 mb-3 ${darkborderinput} ${textcolorblue} h-10 ${bginput} ${focusborder} ${bordercolor} border-solid border-[0.15rem]  rounded-xl w-full`} id="name" onInput={e => setSome1(e.target.value)}  name="name" type="text" autoComplete="name"/>
     <Search className={`absolute right-3 top-2 ${svgsearch} dark:text-black`} width="1.5rem" height="1.5rem"/>
     </div>
      <div className={`scrollbar scrollbar-track-transparent scrollbar-thumb-scroll dark:bg-black dark:scrollbar-thumb-dark bg-white divide-y-2  divide-opacity-75 dark:divide-opacity-30 mb-1 w-full ${divisionlinedark} ${divisioncolor}`}>



     { peop.map((c,i)=> (<Possib key={i} setisOpenedPeople={setisOpenedPeople} flag1={flag1} setflag1={setflag1} click={click}  setcur={setcur} mesa1={mp}  message={setmpeop}  person={peop[i]}  convs={mpeopbackup[i]}/>)
     

     )}
     </div></div></div>:null}
     {isOpenedSettings ? <><div className={`absolute inset-0 h-screen opacity-90 dark:opacity-95  bg-[#C0C0C0] dark:bg-[#242424] ${bordercolor}  ${divisioncolor}`} onClick={()=>setisOpenedSettings(false)}></div>
     <div className={`absolute inset-0 px-2  h-screen w-4/6 top-0 left-auto rounded-l-2xl dark:bg-black bg-white dark:border-opacity-100 ${darkborderinput}  ${bordercolor} border-4 ${divisioncolor}`}>
            
            <div className="flex py-1 px-1 flex-col h-full ">
              
              <span className={`font-bold w-32 bg-gradient-to-r bg-clip-text text-transparent from-[#0295FF] via-[#664BFF] to-[#B50BBA] text-[2rem] px-1 py-7`}>Ayarlar</span>
              <span className={`absolute top-3 right-2 rotate-45 rounded-full bg-white dark:bg-black ${textcolorblue} `} onClick={() => { close(); } }>
                <Add width="2rem" height="2rem" className={`${svgsearch} ${darktext} dark:opacity-100`}/>
              </span>
              

              <div className={`flex scrollbar-track-transparent scrollbar-thumb-scroll dark:bg-black bg-white divide-opacity-75   ${divisioncolor}`}>
                <span className={`flex mt-2 bg-[#F0F0F0] dark:bg-[#141414] text-center text-base font-medium items-center justify-center w-full h-12 rounded-xl mb-1 ${darktext} ${textcolorblue}`}>Profil Ayarları</span>
              </div>
              <span className=" flex justify-center mt-auto mb-1">
                <Logout className={`${textcolorblue} ${darktext} rotate-180`} preserveAspectRatio="none"  height="2rem" width="2.2rem" onClick={async()=>{ localStorage.clear()
  await db.clear()
  setTimeout(() => {
    nav("/login")
  }, 100);
  
   window.location.reload()}
 } />
                </span>
              </div>
              </div>
              </>:null}
       
    </div></div>)
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
  