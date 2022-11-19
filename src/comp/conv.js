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
export default function Conv({k,mesa,person,flag1,height,setflag1,convs,db,changeconv,setmessage,setcur,setnewm,messageler,curref}){
  let svgslide="text-[#90C5FF]"
  let svgslidedark="dark:text-[#F0EFE9]"
  let textcolorblue="text-[#459DFF]"
  let darktext="dark:text-[#F0EFE9]"
  let bg="bg-[#fcfbf4]"
  let maincolor="bg-white"
  let bordercolor="border-[#90C5FF]"
  let prt="https://smartifier.herokuapp.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a};
  const aftersilme={cid:""}
  let nav=useNavigate()
  let de
  const nos = useRef(false)
  const l = useRef(null)
  const f = useRef(null)
  const swiperightBol1 = useRef(true)
  const[flag,setflag]=useState(true)
  const [leftx,setleft]=useState(0)
  const [last,setlast]=useState()
  const [time,settime]=useState()
  const [divw,setdiv]=useState()
  let resp=[]
  if(convs.members[1]===na.id){
     de =convs.members[2]
  }else{

    de =convs.members[3]
  }
 /*  if(convs.members[0]===na.id){
    convs.members[4]=false}else{
      convs.members[5]=false
    } */



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
            console.log("78")
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
     //setleft(-divw2*1.5)
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
      async function lastm(){

        let last =  await db.get(convs._id)
        if(last!==null&&last.length!==0){
          setlast(last[0].text)
          const mest=new Date(last[0].createdAt).toLocaleTimeString("tr",{hour: '2-digit', minute:'2-digit'})
settime(mest)
        }
        
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
  function slide(bool){
    /* setTimeout(() => {
      swiperightBol1.current=true
    }, 10); */
    
    console.log("huh")
    console.log(nos.current)
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
      let result
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


    if((convs.members[0]===na.id&&convs.members[4]===true)||(convs.members[1]===na.id&&convs.members[5]===true)){
       
          return(
            <div className="overflow-hidden">
            <div className="relative max-w-screen ">
            <div className="absolute top-[2.5px] " style={{ right:`${8}px` }}><img id="sr2" src={delet} alt="s" className="xs:w-[2rem] rounded-full md:w-[2rem] mt-[1.1rem] " onClick={b}></img></div>
              <div id="sr1" className=" "  ref={l} style={{ position: "relative", left: `${leftx}px`}}>
              <div id="sr" className={`flex  flex-row max-w-full  items-center mt-1 ${maincolor} dark:bg-black ${bordercolor} rounded-lg p-1 h-[4.5rem]`}>
              <img src={pp} alt="s" className="xs:w-10 rounded-full md:w-10 mr-2 " onClick={get}></img>
              
              <div className={`flex w-full  justify-end  overflow-hidden  flex-col   ${textcolorblue} ${darktext} font-semibold  xs:text-lg md:text-base xs:pr-1 xs:pl-1 xs:break-words`} onClick={get}>
              
              <span className="relative"  >{de}</span>
              <span className={`relative ${darktext} font-normal ${textcolorblue} truncate  text-base`}  >{last}</span>
              </div>
              <span className={`relative ${textcolorblue} ${darktext} ml-auto text-sm text- self-center mr-2 font-normal`}  >{time}</span>
   
              
              
         
              <div className="flex self-end justify-end w-[3rem] h-[3rem]"> 
             
              {swiperightBol1.current ?  <Arrow className={` mr-1 w-[2rem] h-[2rem] ${svgslide} ${svgslidedark}`}  onClick={slide}/>:<div className="mr-1 w-[2rem] h-[2rem]" ></div>}
              </div>
              </div>
             
            </div></div></div>
              )

        
     }
} 