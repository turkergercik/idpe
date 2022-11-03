import axios from "axios";
import React, { useEffect,createContext,useContext } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import { setOptions } from "filepond";
import pp from "../pages/images/splash1.png"



export default function Possib({current,mesa1,message,person,flag1,setflag1,setno,no,click,nos,setisOpened,convs,cur}){
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
  let prt="https://smartifier.herokuapp.com"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a}; 
  let mpeo=[]
  let de =person.name
  let nav =useNavigate()
  async function b(){  
    setisOpened(false)
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
        //console.log(mesa1)
       
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
   async function get(){
    console.log(mesa1)
    let up={}

    let m = mesa1.filter(v=>v.members[1]===person._id||v.members[0]===person._id)
    console.log(m)
    
   
    if(na.id===m[0].members[0]){
      up ={cid:m[0]._id,cnm:de,cri:m[0].members[1],csi:m[0].members[0],cam:[m[0].members[1],m[0].members[0]]}}
   else{

      up ={cid:m[0]._id,cnm:de,cri:m[0].members[0],csi:m[0].members[1],cam:[m[0].members[1],m[0].members[0]]}
   }
   cur(up)
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
   } */}
  function bb(){
    

    /* console.log(mesa1[2].members[1]===person._id)
    console.log(mesa1[2].members[0]) */
   
  
    get()
    b()
 
      
    
   
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