import axios from "axios";
import React, { useEffect } from "react";
import { useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import pp from "../pages/images/splash1.png"
import del from "../pages/images/del.png"
import delet from "../pages/images/delete.png"
import { ReactComponent as Arrow } from "../pages/images/arrow.svg"
import { async } from "@firebase/util";
import { setPlatform } from "@capacitor/core";
import { ReactComponent as Profilepic } from "../pages/images/user.svg"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
/* import IonPhotoViewer from '@codesyntax/ionic-react-photo-viewer'; */
let resulte
export default function Conv({profilepictures,settyping,typing,ppcheck,setppcheck,pprenew,e,setppc,ppc,all,viewpp,setviewpp,check,setcheck,k,mesa,person,flag1,height,setflag1,convs,db,changeconv,setmessage,setcur,setnewm,messageler,curref}){
  let svgslide="text-[#90C5FF]"
  let svgslidedark="dark:text-[#F0EFE9]"
  let textcolorblue="text-[#459DFF]"
  let darktext="dark:text-[#F0EFE9]"
  let bg="bg-[#fcfbf4]"
  let maincolor="bg-white"
  let bordercolor="border-[#90C5FF]"
  let prt="https://smartifier.onrender.com"
  //let prt="http://192.168.1.101:3001"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a};
  const aftersilme={cid:""}
  let nav=useNavigate()
  let de
  let kar
  const nos = useRef(false)
  const l = useRef(null)
  const f = useRef(null)
  const swiperightBol1 = useRef(true)
  const[flag,setflag]=useState(true)
  const [leftx,setleft]=useState(0)
  const [last,setlast]=useState()
  const [pp,setpp]=useState([])
  const ppf = useRef(null)
  //const [ppc,setppc]=useState(false)
  const [online,setonline]=useState(false)
  const [time,settime]=useState()
  const [divw,setdiv]=useState()
  let resp=[]
  let result
  let arr
  if(convs.members[1]===na.id){
     de =convs.members[2]
   kar=convs.members[0]
  }else{
    kar=convs.members[1]
    de =convs.members[3]
  }
  arr=de.split(" ");
         
        for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     
         }
         de = arr.join(" ");
 /*  if(convs.members[0]===na.id){
    convs.members[4]=false}else{
      convs.members[5]=false
    } */
useEffect(()=>{

  let x= false
if(all!==null&&all.length!==0){
all.forEach(e => {
  if(!x){
 if( e.userId===kar){
  
 
setonline(true)
x=true
 }else{
  setonline(false)
  x=false
 }}

})


}


},[all])
useEffect(()=>{
  if(!online){
 
  settyping({status:false})
  }
  
  },[online])

    useEffect(()=>{
      
      //setflag1(new Array(flag1.length).fill(true))
     let aa
     let bb
     let cc
      let divw1= document.getElementById("sr")?.offsetWidth
      let divw2= document.getElementById("sr2")?.offsetWidth
      setdiv(divw1-divw2)
      let touchsurface = l.current,
          startX,
          startY,
          dist,
          threshold = 100, //required min distance traveled to be considered swipe
          allowedTime = 400, // maximum time allowed to travel that distance
          elapsedTime,
          startTime
    if(touchsurface){
      
      function handleswipe(isrightswipe){
          if (isrightswipe){
            //slide()
            console.log("oldu")
              touchsurface.innerHTML = 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>'
          }else{
        
         
            console.log("olmadı")
             // touchsurface.innerHTML = 'Condition for right swipe no.currentt met yet'
          }
      }
    
     touchsurface.addEventListener("touchstart",aa=function(e){
        //console.log("deli")
          //touchsurface.innerHTML = ''
          var touchobj = e.changedTouches[0]
          dist = 0
          startX = touchobj.pageX
          startY = touchobj.pageY
          startTime = new Date().getTime() // record time when finger first makes contact with surface
          //if (e.cancelable) e.preventDefault();
      }, false)
      touchsurface.addEventListener("touchmove",aa=function(e){
        var touchobj = e.changedTouches[0]
        console.log(Math.round(touchobj.pageX))
        setleft(Math.round(touchobj.pageX)-startX)

        if(touchobj.pageX<=startX){
        
          if((Math.abs(touchobj.pageX-startX)>=divw1/7)){
            
            console.log(touchobj.pageX-startX)
           
            setleft(-divw2*1.5)
            //swiperightBol1.current=false
            //slide(true)
            f.current=true

          }else{
            f.current=false
          }
          //Math.round(touchobj.pageX)-startX<=(divw1/3)
          console.log("ok")

         
        }else{
          console.log("değil")
          f.current=false
          setleft(0)
          //swiperightBol1.current=true
          //setleft(0)
        }
    


      }, false)
    /*  touchsurface.addEventListener('touchmove',bb =function(e){
        var touchobj = e.changedTouches[0]
        //console.log(Math.round(touchobj.pageX))
        let distance = Math.round(touchobj.pageX)
        //console.log(divw1,divw2)
        //setleft(Math.round(touchobj.pageX)-startX+"px")
       if(distance<=(divw1/3)){
        
          //slide()
      }else{
    //setleft(0)
      }
    
      
      //if (e.cancelable) e.preventDefault(); // prevent scrolling when inside DIV
      }, false) */
          touchsurface.addEventListener('touchend',cc=function(e){
          var touchobj = e.changedTouches[0]
          dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
          elapsedTime = new Date().getTime() - startTime // get time elapsed
          // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
          var swiperightBol = (elapsedTime <= allowedTime && dist <= -divw1/3 && Math.abs(touchobj.pageY - startY) <= 100)
          if(f.current) {
            swiperightBol1.current=false
          //console.log(flag1)
          slide(true)
          
          console.log("rrrr")
          }else if(!f.current){
            setleft(0)
           
            //console.log(flag1)
            //console.log(no.current)
          slide(false)
          //swiperightBol1.current=true
          }else if(Math.abs(touchobj.pageY - startY) <=window.screen.availHeight){
           // console.log("yukarı")
           // console.log(window.screen.availHeight)
          } else if(dist<=20){
         
            get()
          }//get()
          //handleswipe(swiperightBol)
    
          //if (e.cancelable) e.preventDefault();
      }, false)}
    function ff(){
      if(aa!==undefined){
        
        touchsurface.removeEventListener("touchstart", aa)
      touchsurface.removeEventListener("touchmove", bb)
      touchsurface.removeEventListener("touchend", cc)
      
    }
    }
    
    return ()=>{
    ff()
    
    }
    
    
    },[flag1])
    useEffect(()=>{
      
      if(!flag1[k]){
      let divw2= document.getElementById("sr2")?.offsetWidth
      let eee = new Array(flag1.length).fill(true)
       eee[k]=false
     setflag1(eee)
     setleft(-divw2*1.5)
     setflag(true)
      } else{
        swiperightBol1.current=true
        setflag(false)
       //let eee = new Array(flag1.length).fill(true)
       //eee[k]=false
       //setflag1(eee)
     setleft(0)
      }
      
     
  /* if(no){
  console.log("wewe")
    let eee = new Array(flag1.length).fill(false)
     setflag1(eee)
    
  setno(false)
  } */
  
  
     },[flag1[k]])

    
    
useEffect(()=>{
 
  async function pp(){
    let pp1
   
      console.log("4")
      //pp1 = profilepictures
      //pp1=[...person]
   //pp1=await db.get("pp")

      
    
   
    //let x= await db.get("chatsbackup")
 
    //console.log("g")
    
    let pp2=[]
    if(profilepictures){
      profilepictures.forEach((v,i) => {
   
        if(v._id===kar){
          resulte=i
        }})
        ppf.current=profilepictures[resulte].profilepicture
        setpp(profilepictures[resulte])
       
        setppcheck([])
      
    }
   /*  if(pp1===null&&person.length!==0){
     console.log("ko")
      
    // await db.set("pp",person)
     let filtered= person.forEach((v,i) => {
   
       if(v._id===kar){
         resulte=i
       }})
       ppf.current=pp1[resulte].profilepicture
       setpp(pp1[resulte])
      
       setppcheck([])
    }else{
      if(pp1!==null&&person.length!==0&&person!==1){
     //console.log(0)
    
   
    let filtered= person.forEach((v,i) => {

      if(v._id===kar){
 
        resulte=i
      }})
      ppf.current=pp1[resulte].profilepicture
      //await db.set("pp",person)


    setpp(pp1[resulte])
    setppcheck([])
    //setppcheck(null)
  }else{
    if(pp1!==null){
      console.log("ko2")
    let filtered= pp1.forEach((v,i) => {

      if(v._id===kar){
 
        resulte=i
      }})
 
      ppf.current=pp1[resulte]?.profilepicture
     setpp(pp1[resulte])
     //setppcheck(2)
}
  }
   } */  
   /* setTimeout(() => {
    //setppc(true)
    
  }, 0); */
     }
     pp()

},[profilepictures,db])
useEffect(()=>{
  
if(pp?.length!==0){
 

    
    //setppc(true)
    
  

}
},[pp])

    useEffect(()=>{
  
      async function lastm(){
    
        let last =  await db.get(convs._id)
        if(last!==null&&last.length!==0){
          if(last[0].text!==undefined){
            let r ={text:last[0].text,media:false}
          setlast(r)
        }else{
          let r ={text:"Resim Gönderdi",media:true}
          setlast(r)

        }
          if(new Date(last[0].createdAt).toLocaleDateString("tr-TR")===new Date().toLocaleDateString("tr-TR")){
            const mest=new Date(last[0].createdAt).toLocaleTimeString("tr",{hour: '2-digit', minute:'2-digit'})
            settime(mest)
          }else{
            const mest1=new Date(last[0].createdAt).toLocaleDateString("tr-TR",{day:"numeric",month:"numeric",year:"numeric"})

            //const mest=new Date(last[0].createdAt).toLocaleTimeString("tr",{hour: '2-digit', minute:'2-digit'})
  settime(mest1)

          }
        }else {
/* console.log(last)

  let r =document.querySelectorAll("[id='1']")
  console.log(r)
if(r!=undefined){
 r.forEach((c,i)=>{
   //c.classList.add("text-transparent")
   c.innerHTML=""

 })

 
 } */

        

         


        }
        setTimeout(() => {
          setcheck(true)
          
        }, 25);
      }
      lastm()
      let divw2= document.getElementById("sr2")?.offsetWidth
  
      let eee = new Array(flag1.length+1).fill(true)
      setflag1(eee)
      /* if(!nos.current){
        setleft(0)
      } */
      //nos.current=!nos.current
  
  
     },[nos.current,mesa])
    /*  useEffect(()=>{
console.log(last)
     },[last]) */
  function slide(bool){
    /* setTimeout(() => {
      swiperightBol1.current=true
    }, 10); */
    
    //nos.current=!bool
    //nos.current=!nos.current
    //console.log(flag1[k])
    //setflag1([flag1[k]])
    if(flag1[k]&&bool){
    console.log("tt")
    //setno.current(false)
  
    //setleft(-divw2-10) 
    setflag(false)
     //flag1[k]=false
     let newar=[...flag1]
     newar[k]=false
     setflag1(newar)

     //setno(false)
     //nos.current=false
    }else{
      //setno.current(true)
      //nos.current=true
      setflag(true)
  
      //setno(true)
        //setleft(0)
        //flag1[k]=true
        let newar=[...flag1]
        newar[k]=true
        setflag1(newar)
     
      }   
    
    }
    async function b(){
      console.log("yazdım")
      nos.current=!nos.current
      await db.remove(convs._id)
      let x = await db.get("chatsbackup") 
      
      console.log(x)
      let filtered= x.forEach((v,i) => {
    
        if(v._id===convs._id){
          result=i
        }
      

   })
   //x.splice(result,1)
   
   
   //let y= await db.set("chatsbackup",x)
   

      if(convs.members[0]===na.id){ 
        x[result].members[4]=false
        console.log(x[result],"pl")
        await db.set("chatsbackup",x)
        changeconv(x)
       /* let mes = [...mesa]
        mes.splice(k,1) */
        
      
        //let a=chec.filter(()=> chec._id===convs._id)
        //console.log(a)
        //message(pre=>{pre.filter(()=> pre._id===convs._id)}) 
      await axios.put(`${prt}/conversations/${convs._id}`,{
        
        senderdel:false,
      }).then((res)=>{
        console.log(res.data)
        resp=[res.data.members[4],res.data.members[5]]
        setcur(aftersilme)

        //console.log("oldu")
      }).catch(()=>{console.log("olmadı bee")})
        
        
    }else if(convs.members[1]===na.id){
      x[result].members[5]=false
      console.log(x[result],"pl")
      await db.set("chatsbackup",x)
      changeconv(x)

/* 

      let mes = [...mesa]
      mes.splice(k,1)
      changeconv(mes) */
      await axios.put(`${prt}/conversations/${convs._id}`,{

        receiverdel:false,
      }).then((res)=>{
        console.log(res)
        resp=[res.data.members[4],res.data.members[5]]
        setcur(aftersilme)
    
       
        //console.log("bu da")
      })
    }
    
    if(resp[0]===false&&resp[1]===false){
      console.log("silindi")
      x.slice(result,1)
      await db.set("chatsbackup",x)
      await axios.delete(`${prt}/messages/${convs._id}`)
      .then(()=>{
        setcur(aftersilme)
        })
      .catch((err)=>{console.log(err)})
      await axios.delete(`${prt}/conversations/${convs.members[1]}`)
      .then(()=>{
       setcur(aftersilme)
        })
      .catch((err)=>{console.log(err)})
      setmessage([])
    }
     }
     async function get(){
      //setmessage([])
      //console.log("r")
       let up={}
       if(na.id===convs.members[0]){
         up ={cid:convs._id,cnm:de,cri:convs.members[1],csi:convs.members[0],cam:[convs.members[1],convs.members[0]]}}
      else{

         up ={cid:convs._id,cnm:de,cri:convs.members[0],csi:convs.members[1],cam:[convs.members[1],convs.members[0]]}
      }
      setcur(up)
      //console.log(up)
      //console.log(vur)
      setTimeout(() => {
        nav(`/chat/${convs._id}`)
      }, 0);
      
       setTimeout(() => {
        let sc = document.getElementById("src")
        if(sc){
         sc.scrollTop=sc.scrollHeight
        }
       }, 0);
      
      }
      
      //silme()
      //if(convs!==undefined)console.log(convs._id)

    if((convs.members[0]===na.id&&convs.members[4]===true)||(convs.members[1]===na.id&&convs.members[5]===true)){
       
          return(
            <div className="">
            <div className="relative max-w-screen">
            
            <div className="absolute  top-[2.5px] " style={{ right:`${8}px` }}><img id="sr2" src={delet} alt="s" className="xs:w-[2rem] rounded-full md:w-[2rem] mt-[1.1rem] " onClick={b}></img></div>
              <div id="sr1" className=" "  ref={l} style={{ position: "relative", left: `${leftx}px`}}>
              <div id="sr" className={ppf.current!==undefined && ppf.current!==null ? `flex flex-row max-w-full items-center mt-1 ${maincolor} dark:bg-black ${bordercolor} rounded-lg p-1 h-[4.5rem]`:`flex  flex-row max-w-full items-center mt-1 ${maincolor} dark:bg-black ${bordercolor} rounded-lg p-1  h-[4.5rem]`}>
             
              {ppf.current!==undefined && ppf.current!==null ? <div className="mr-2.5 relative max-w-[4.1rem] min-w-[4.1rem]  max-h-[4.1rem] min-h-[4.1rem] mb-1 " >
              <div className={online ? 
              `absolute inset-0 bg-gradient-to-r   from-[#0295FF] via-[#664BFF] to-[#B50BBA]  w-full h-full rounded-full`:
              ` absolute  bg-transparent top-0 right-0  w-full h-full  rounded-full`}></div>
              
              {/* <IonPhotoViewer  className={"rounded-full"}
          title="Martin arrantzalea"
          src={pp.profilepicture}
          licenseKey='your-license-key'
        >
            <img className="absolute z-10 rounded-full "
            src={pp.profilepicture}
            alt="Martin arrantzalea"
          />
        </IonPhotoViewer> */}
              
              
              <img src={ppf.current} alt="s" className={ online ?`p-0.5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-1 object-cover rounded-full max-h-[3.75rem] min-h-[3.75rem]  max-w-[3.75rem] min-w-[3.75rem]  `:` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-1 object-cover rounded-full max-h-[4rem] min-h-[4rem]  max-w-full min-w-full  `} onClick={() => { setviewpp(pp.profilepicture); } } />
              
              
              </div>:
              
              
              <div className="relative mr-2.5  mb-1 max-w-[4.1rem] min-w-[4.1rem]  max-h-[4.1rem] min-h-[4.1rem] " ><div className={online ? 
              `  absolute top-0 right-0 bg-gradient-to-r bg-[#B50BBA] from-[#0295FF] via-[#664BFF] to-[#B50BBA] w-full h-full rounded-full` : 
              `  absolute top-0 right-0 bg-transparent w-full h-full rounded-full`}></div ><Profilepic className={online ? `absolute  text-[#8fc4ff] dark:text-[#484745]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black  rounded-full w-[3.575rem] h-[3.575rem] mr-2.5`:`absolute  ${textcolorblue}  ${darktext} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black opacity-60 dark:opacity-30 rounded-full w-[4.55rem] h-[4.55rem] mr-2.5`} onClick={get} /></div>}
             
              <div className={`flex flex-col w-full  justify-end  overflow-hidden    ${textcolorblue} ${darktext} font-semibold  xs:text-lg md:text-base px-1 xs:break-words`} onClick={get}>
              <span className="relative">{de}</span>
              {typing.status==true&&typing.conversationid===convs._id ? <div className="relative text-[#B50BBA]  font-normal text-base">yazıyor
              <span className={`text-[#B50BBA]  dot1 mx-[1.5px]`}>.</span>
       <span className={`text-[#B50BBA] dot2 mr-[1.5px]`}>.</span>
       <span className={`text-[#B50BBA] dot3`}>.</span>
              
              </div>:
              <span id="1" className={last?.media===true? `relative text-[#B50BBA] font-normal truncate  text-base`:`relative ${darktext} font-normal ${textcolorblue} truncate  text-base`} >{last?.text}</span>
            }
              </div>
              <span className={`flex items-center h-full ${textcolorblue} ${darktext} ml-auto text-sm text- self-center mr-2 font-normal`} onClick={get}  >{time}</span>

              
              
         
              <div className="flex self-end justify-end w-[3rem] h-[3rem]"> 
             
              {swiperightBol1.current ?  <Arrow className={`mr-1 w-[2rem] h-[2rem] ${svgslide} ${svgslidedark}`}  onClick={()=>{
                //setleft(-30)
                slide(true)}}/>:<div className="mr-1 w-[2rem] h-[2rem]" ></div>}
              </div>
              </div>
             
             
            </div></div></div>
              )

        
     }
} 