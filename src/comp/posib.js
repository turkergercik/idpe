import axios from "axios";
import React, { useEffect,createContext,useContext } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import { setOptions } from "filepond";




export default function Possib({current,mesa,message,person,flag1,setflag1,setno,no,click,nos}){
  //const[mpeo,setmpeo]=useState([])
  let prt="https://smartifier.herokuapp.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a}; 
  let mpeo=[]

 
  async function b(){  
    if(nos!==undefined) {
      console.log("1ew")
      nos.current=nos.current
      console.log(nos.current)
     // setno(!no)
     // no(true)
      //no=true
      //setflag1(new Array(flag1?.length).fill(false))
    
    }
    await axios.get(`${prt}/conversations/${na.id}`,{headers})
    .then((res)=>{
        mpeo=res.data
        //console.log(mesa)
       
      })
      //herhangi silinme durunumun 
      //const a = mpeo.filter((c,i)=>(mpeo[i].members[2]===person.name&&mpeo[i].members[3]===na.name)||(mpeo[i].members[3]===person.name&&mpeo[i].members[2]===na.name))
      const a = mpeo.filter((c,i)=>(mpeo[i].members[2]===person.name||mpeo[i].members[3]===person.name))

      //(a[0].members[2]===na.name)&&(a[0].members[4]===false)
     
     if(a.length!==0){
      
      
        
      const id=a[0]._id
      if((a[0].members[2]===na.name)&&(a[0].members[4]===false)){
        a[0].members[4]=true
        message(pre=>[...pre,...a])
        
          await axios.put(`${prt}/conversations/${id}`,{

            senderdel:true,
          }).then((res)=>{
            //chec(person.name)
            
            
            //console.log("oldu")
          })

        }
        else if((a[0].members[3]===na.name)&&(a[0].members[5]===false)){
          a[0].members[5]=true
          message(pre=>[...pre,...a])
          await axios.put(`${prt}/conversations/${id}`,{

            receiverdel:true,
          }).then((res)=>{console.log(res)
            //chec(person.name)
            
            
            //console.log("buda")
          })

        }}
        else{
          //let ne=[{_id:"",members:[na.id,person._id,na.name,person.name,true,true]}] 
       await axios.post(`${prt}/conversations`,{
              senderid:na.id,
              receiverid:person._id,
              name:person.name,
              senderdel:true,
              receiverdel:true
       }).then((res)=>{
        //ne =[{_id:res.data._id,members:[na.id,person._id,na.name,person.name,true,true]}]
        //ne[0]._id=res.data._id
        message(pre=>[...pre,res.data])
       //chec(person.name)
       }).catch((err)=>{console.log(err)})
      }
    

        
    
      //chec(person.name)
    
      

  



   }
  /*  if(mpeop!==undefined){
    console.log(mpeop.members[4])
   } */
  
  if(person._id!==na.id){
    return(
      <div className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1 " onClick={b}>
          <img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-5 rounded-full md:w-10 "></img>
          <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" >{person.name}</span>
      </div>
        )
      
  }


}