import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import pp from "../pages/images/splash1.png"
import del from "../pages/images/del.png"

export default function Conv({k,mesa,convs,db,changeconv,setmessage,cur,setnewm,messageler}){
  let prt="https://smartifier.herokuapp.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a};
  const aftersilme={cid:""}
  let nav=useNavigate()
  let de
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
    async function b(){
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
      .then(()=>{
       cur(aftersilme)
        })
      .catch((err)=>{console.log(err)})
      setmessage([])
    }
     }
     async function get(){
       let up={}
       if(na.id===convs.members[0]){
         up ={cid:convs._id,cnm:de,cri:convs.members[1],csi:convs.members[0],cam:[convs.members[1],convs.members[0]]}}
      else{

         up ={cid:convs._id,cnm:de,cri:convs.members[0],csi:convs.members[1],cam:[convs.members[1],convs.members[0]]}
      }
      cur(up)
      //console.log(vur)
      nav(`/chat/${convs._id}`)
       setTimeout(() => {
        let sc = document.getElementById("src")
        if(sc){
         sc.scrollTop=sc.scrollHeight
        }
       }, 0);
      
      }
      
      //silme()
    if(convs.members[0]===na.id){
        if(convs.members[4]===true){
          return(
            <div className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1">
                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 " onClick={get}></img>
                <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" onClick={get} >{de}</span>
                 <img src={del} alt="s" className="xs:w-3 flex md:w-10 mr-2 mx-auto" onClick={b}></img>
            </div>
              )

        }
     }else if(convs.members[1]===na.id){
        if(convs.members[5]===true){
          return(
            <div className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1">
                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 " onClick={get}></img>
                <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" onClick={get} >{de}</span>
                 <img src={del} alt="s" className="xs:w-3 flex md:w-10 mr-2 mx-auto" onClick={b}></img>
            </div>
              )
        }
    
     }


} 