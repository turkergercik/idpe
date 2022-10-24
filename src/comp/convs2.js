import axios from "axios";
import React, { forward, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import pp from "../pages/images/splash1.png"
import del from "../pages/images/del.png"
import { async } from "@firebase/util";
import delet from "../pages/images/delete.png"
import arrow from "../pages/images/arrow.png"
import { setOptions } from "filepond";



export default function Convs2({k,nos,page,setpop,flag1,flag2,no,setno,setflag1,mfd,db,curr,load,mesa,convs,changeconv,setmessage,cur,setnewm,pages,src}){


  const{id}=useParams()
  let prt="https://smartifier.herokuapp.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a,page:1};
  const aftersilme={cid:""}
  //const [no.current,setno.current]= useState(true)
  //const no = useRef(false)
  const l = useRef(null)
  let nav=useNavigate()
  let de
 const[flag,setflag]=useState(true)
 const [leftx,setleft]=useState(0)
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
/* useEffect(()=>{


get()
},[]) */
const [divw,setdiv]=useState()




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
      allowedTime = 200, // maximum time allowed to travel that distance
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
    console.log("deli")
      //touchsurface.innerHTML = ''
      var touchobj = e.changedTouches[0]
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
  }, false)

 touchsurface.addEventListener('touchmove',bb =function(e){
    var touchobj = e.changedTouches[0]
    //console.log(Math.round(touchobj.pageX))
    let distance = Math.round(touchobj.pageX)
    //console.log(divw1,divw2)
    setleft(Math.round(touchobj.pageX)-startX+"px")
   if(distance<=(divw1/3)){
    
      //slide()
  }else{
//setleft(0)
  }

  
      e.preventDefault() // prevent scrolling when inside DIV
  }, false)
      touchsurface.addEventListener('touchend',cc=function(e){
      var touchobj = e.changedTouches[0]
      dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
      var swiperightBol = (elapsedTime <= allowedTime && dist <= -divw1/3 && Math.abs(touchobj.pageY - startY) <= 100)
      if(swiperightBol) {
      //console.log(flag1)
      slide(true)
      
      }else if(dist<=20){
      get()
      }else if(!swiperightBol&&dist>=divw1/3){
        //console.log(flag1)
        //console.log(no.current)
      slide(false)
      
      }//get()
      //handleswipe(swiperightBol)

      e.preventDefault()
  }, false)}
function ff(){
  if(aa!==undefined){
    console.log("12")
    touchsurface.removeEventListener("touchstart", aa)
  touchsurface.removeEventListener("touchmove", bb)
  touchsurface.removeEventListener("touchend", cc)
  
}
}

return ()=>{
ff()

}


},[flag1])



/* useEffect(()=>{
console.log("erere")
console.log(flag1.filter(Boolean).length)
console.log(flag1.length)

/* if((flag1.length)-flag1.filter(Boolean).length>=2){
  setleft(0)
  let yen =new Array(flag1.length).fill(true)
 
  setflag1(yen)
 
} 

},[flag1]) */

/* useEffect(()=>{

 console.log("ok")
 if((flag1.length)-flag1.filter(Boolean).length===0){
  setleft(0)
  let yen =new Array(flag1.length).fill(true)
 
  setflag1(yen)
 
}
    //setleft(0)

  
  },[get]) */
  useEffect(()=>{
    if(!flag1[k]){
    let divw2= document.getElementById("sr2")?.offsetWidth
    let eee = new Array(flag1.length).fill(true)
     eee[k]=false
   setflag1(eee)
   setleft(-divw2-10)
   console.log("eee")
    } else{
     //let eee = new Array(flag1.length).fill(true)
     //eee[k]=false
     //setflag1(eee)
   setleft(0)
    }
    console.log("no")
   
/* if(no){
console.log("wewe")
  let eee = new Array(flag1.length).fill(false)
   setflag1(eee)
  
setno(false)
} */


   },[flag1[k]])

   useEffect(()=>{
    let divw2= document.getElementById("sr2")?.offsetWidth

    let eee = new Array(flag1.length+1).fill(true)
    setflag1(eee)
    /* if(!nos.current){
      setleft(0)
    } */
    //nos.current=!nos.current

console.log("12")

   },[nos.current])
function slide(bool){
  console.log("huh")
  console.log(nos.current)
  //nos.current=!bool
  //nos.current=!nos.current
  //console.log(flag1[k])
  //setflag1([flag1[k]])
  if(flag1[k]&&bool){
  
  //setno.current(false)

  //setleft(-divw2-10) 
  setflag(false)
   //flag1[k]=false
   let newar=[...flag1]
   newar[k]=false
   setflag1(newar)
   flag2(k)
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
      flag2(null)
    }   
  
  }
    async function b(){
      nos.current=!nos.current
      
      await db.remove(convs._id)
      if(convs.members[0]===na.id){ 
       
        mesa.splice(k,1)
        //let a=chec.filter(()=> chec._id===convs._id)
        //console.log(a)
        //message(pre=>{pre.filter(()=> pre._id===convs._id)}) 
      await axios.put(`${prt}/conversations/${convs._id}`,{
        
        senderdel:false,
      }).then((res)=>{
        resp=[res.data.members[4],res.data.members[5]]
        cur(aftersilme)

        //console.log("oldu")
      })
        
        
    }else if(convs.members[1]===na.id){
      mesa.splice(k,1)
      await axios.put(`${prt}/conversations/${convs._id}`,{

        receiverdel:false,
      }).then((res)=>{
        resp=[res.data.members[4],res.data.members[5]]
        cur(aftersilme)
    
       
        //console.log("bu da")
      })
    }
    
    if(resp[0]===false&&resp[1]===false){
      
      await axios.delete(`${prt}/messages/${convs._id}`)
      .then(()=>{
        cur(aftersilme)
        })
      .catch((err)=>{console.log(err)})
      await axios.delete(`${prt}/conversations/${convs.members[1]}`)
      .then(async()=>{ 
       cur(aftersilme)
        })
      .catch((err)=>{console.log(err)})
      setmessage([])
      
    }


    }

     async function get(){
      //setno.current(true)
       //nos.current=!nos.current
       //setno(!no)
       let up={}
       if(na.id===convs.members[0]){
         up ={cid:convs._id,cnm:de,cri:convs.members[1],csi:convs.members[0],cam:[convs.members[1],convs.members[0]]}}
      else{

         up ={cid:convs._id,cnm:de,cri:convs.members[0],csi:convs.members[1],cam:[convs.members[1],convs.members[0]]}
      }
      cur(up)
      //console.log(vur)
      //console.log(up.cid)
        
    const messagesfromdb = await db.get(convs._id)
   
   //console.log(messagesfromdb)
    if(messagesfromdb===null){
      console.log("boş")
     await axios.get(`${prt}/messages/${convs._id}`,{headers}).then(async(res)=>{
    
      if(res.data==="tokExp"){
        localStorage.clear()
        nav("/login")
        window.location.reload()
        //localStorage.setItem("aut",JSON.stringify({"isA":false,"tok":"tokExp"}))
      }
      //let mm =res.data
      
       nav(`/chat/${convs._id}`)
       setmessage(res.data)
      const obj = {[convs._id]: res.data.slice(0,20)}
      console.log(obj)
       
       await db.set(convs._id,res.data)
       //console.log(message)
       })}else{
        //
        //setmessage(allm.convs._id)
        nav(`/chat/${convs._id}`)
        page.current=1
        setTimeout(() => {
          load=false
        }, 0);
        const newmessages10 = messagesfromdb.slice(0,10)
        const newmessages20 = messagesfromdb.slice(0,20)
        
        let a = newmessages10.map((a)=>a.media!==undefined).filter(Boolean).length
        
        if(a>=4){
          setmessage(newmessages10)
          mfd.current=10
        }else{ 
          setmessage(newmessages20)
          mfd.current=20
        }
          
        
        

       }
   /*     setTimeout(() => {
        let sc = document.getElementById("src")
        if(sc){
         sc.scrollTop=sc.scrollHeight
        }
       }, 0); */
      
      }

      //silme()
    if(convs.members[0]===na.id){
        if(convs.members[4]===true){
          return(

            <><div className="absolute mt-2.5 " style={{left:`${divw}px`}} ><img id="sr2" src={delet} alt="s" className="xs:w-5 rounded-full md:w-10 "onClick={b} ></img></div>
            <div id="sr1" className=" "  ref={l} style={{ position: "relative", left: `${leftx}px`}}>
              <div id="sr" className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1 z-10" >

                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 "onClick={get} ></img>
                <span className="flex justify-center w-full h-full xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words"onClick={get}>{de}</span>
                <img src={arrow} alt="s" className="xs:w-3 flex md:w-11 mr-2 mx-auto" onClick={slide}></img>
              </div>

            </div></>
              )

        }
     }else if(convs.members[1]===na.id){
        if(convs.members[5]===true){
          return(
            <div ref={l} id="sr" className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1"style={{position: "absolute",left:"12px"}}>
                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 " onClick={get}></img>
                <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" onClick={get}>{de}</span>
                 <img src={del} alt="s" className="xs:w-3 flex md:w-10 mr-2 mx-auto" onClick={b}></img>
            </div>
              )
        }
    
     }


}
//Convs2 = forward(Convs2)