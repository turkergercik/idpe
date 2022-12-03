import axios from "axios";
import React, { useEffect,createContext,useContext,useRef } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import { setOptions } from "filepond";
import pp from "../pages/images/splash1.png"



export default function Possib({prt,current,messagesfromdb,mesa1,db,message,person,flag1,setflag1,setno,no,click,nos,setisOpenedPeople,convs,setcur}){
  //const[mpeo,setmpeo]=useState([])
  let focusborder="focus:border-[#097EFE]"
  let darktext="dark:text-[#F0EFE9]"
  let svgsearch="#60ACFF"
  let focusvgsearch="focus:border-[#097EFE]"
  let textcolorblue="text-[#459DFF]"
  let divisioncolor="divide-[#90C5FF]"
  let divisioncolorforfirstline="border-[#90C5FF]"
  let maincolor="bg-white"
  let bg="bg-[#E8E8E8]"
  let bordercolor="border-[#60ACFF]"
  //let prt="https://smartifier.onrender.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a}; 
  let mpeo=[]
  let de =person.name
  let nav =useNavigate()
  const backup =useRef()
  let result
  async function b(){  
    setisOpenedPeople(false)
    console.log(backup.current)
    let m
    /* let backup= await db.get("chatsbackup")
    let backup1= await db.get("chats") */
    //et m = backup.current.filter(v=>v.members[1]===person._id||v.members[0]===person._id)

    
  if(backup.current.length!==0){
    let filtered= backup.current.forEach((v,i) => {
  
      if(v.members[1]===person._id||v.members[0]===person._id){
        result=i
      }
    

  })
  m=backup.current[result]
 console.log(result)}
    //let [v] = backup1.filter(v=>v.members[1]===person._id||v.members[0]===person._id)
    if(m!==0&&m!==undefined){
      console.log(m)
/*       //console.log(v)
      console.log(m)
      await db.set("chats",[...backup1,m])
      //message(p=>[ m,...p])


    }else{
      console.log("boş") */
   


    if(nos!==undefined) {
      console.log("1ew")
      nos.current=nos.current
      console.log(nos.current)
     // setno(!no)
     // no(true)
      //no=true
      //setflag1(new Array(flag1?.length).fill(false))
    
    }
   /*  await axios.get(`${prt}/conversations/${na.id}`,{headers})
    .then((res)=>{
      console.log("12")
        mpeo=res.data
        //console.log(mesa1)
       
      }).catch(()=>{console.log("ok")}) */
      //herhangi silinme durunumun 
      //const a = mpeo.filter((c,i)=>(mpeo[i].members[2]===person.name&&mpeo[i].members[3]===na.name)||(mpeo[i].members[3]===person.name&&mpeo[i].members[2]===na.name))
     // const a = mpeo.filter((c,i)=>(mpeo[i].members[2]===person.name||mpeo[i].members[3]===person.name))
      let a = [m]
      
      //(a[0].members[2]===na.name)&&(a[0].members[4]===false)
     
     if(a.length!==0){
      
      
        
      const id=a[0]._id
      if((a[0].members[2]===na.name)&&(a[0].members[4]===false&&result!=null)){
        a[0].members[4]=true
       backup.current[result].members[4]=true
       console.log(backup.current)
       await db.set("chatsbackup",backup.current)
        /* m.members[4]=true
        m.members[5]=true */
        console.log(backup.current)
        //message(pre=>[...pre,...backup.current])
        
          await axios.put(`${prt}/conversations/${id}`,{

            senderdel:true,
          }).then((res)=>{
            //chec(person.name)
            
            
            //console.log("oldu")
          })

        }
        else if((a[0].members[3]===na.name)&&(a[0].members[5]===false)){
          a[0].members[5]=true
          backup.current[result].members[5]=true
          console.log(backup.current)
          await db.set("chatsbackup",backup.current)
          //message(pre=>[...pre,...backup.current])
          //await db.set("chatbackup",[...backup.current])
          await axios.put(`${prt}/conversations/${id}`,{

            receiverdel:true,
          }).then((res)=>{console.log(res)
            //chec(person.name)
            
            
            //console.log("buda")
          })

        }}
      }
        else{
          console.log("yok")
          //let ne=[{_id:"",members:[na.id,person._id,na.name,person.name,true,true]}] 
       await axios.post(`${prt}/conversations`,{
              senderid:na.id,
              receiverid:person._id,
              name:person.name,
              senderdel:true,
              receiverdel:true
       }).then(async(res)=>{
        console.log(res.data)
        await db.set("chatsbackup",[...backup.current,res.data])
        backup.current=[...backup.current,res.data]
        console.log(backup.current)
        //ne =[{_id:res.data._id,members:[na.id,person._id,na.name,person.name,true,true]}]
        //ne[0]._id=res.data._id
        //message(pre=>[...pre,res.data])
       //chec(person.name)
       }).catch((err)=>{console.log(err)})
      }
    

        
    
      //chec(person.name)
    
      

  


    
   }
   async function get(){
    console.log("et")
    //console.log(mesa1)
    let up={}
    let m1= await db.get("chatsbackup")
    //console.log(m1)
    console.log(backup.current)
    let m = backup.current.filter(v=>v.members[1]===person._id||v.members[0]===person._id)
    console.log(m)
    if(m.length!==0){
   
    if(na.id===m[0].members[0]){
      up ={cid:m[0]._id,cnm:de,cri:m[0].members[1],csi:m[0].members[0],cam:[m[0].members[1],m[0].members[0]]}}
   else{

      up ={cid:m[0]._id,cnm:de,cri:m[0].members[0],csi:m[0].members[1],cam:[m[0].members[1],m[0].members[0]]}
   }
   setcur(up)
   //console.log(up)
   //console.log(vur)
   nav(`/chat/${m[0]._id}`)
    setTimeout(() => {
     let sc = document.getElementById("src")
     if(sc){
      sc.scrollTop=sc.scrollHeight
     }
    }, 0);
   
   
  /*  if(mpeop!==undefined){
    console.log(mpeop.members[4])
   } */}}
  async function bb(){
    console.log(messagesfromdb)
    //messagesfromdb.current="12"
    backup.current = await db.get("chatsbackup")
    /* console.log(mesa1[2].members[1]===person._id)
    console.log(mesa1[2].members[0]) */
    //b().then(()=>get())
   get().then(()=>{b()})
    
    
 
    
    
      
    
   
    //get()
  }
  if(person._id!==na.id){
    return(
      <div className="flex flex-row items-center">
         <div id="sr" className={`flex items-center dark:bg-black  ${maincolor}  ${bordercolor} rounded-lg p-1 mt-1 h-[4.5rem]`}>
         <img src={pp} alt="s" className="xs:w-10 rounded-full md:w-10 mr-2 " onClick={b}></img>
         <span className={`flex justify-start text w-full ${darktext} ${textcolorblue} font-semibold   xs:text-lg md:text-base xs:pr-1 xs:pl-1 xs:break-words`} onClick={bb}>{person.name}</span>
       </div>
      </div>
        )
      
  }


}