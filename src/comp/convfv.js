import axios from "axios";
import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import * as jose from 'jose'
import { io } from "socket.io-client";
import Peer from "simple-peer"
import pp from "../pages/images/splash1.png"


export default function Convfv({soc,call,roomid,changeconv,convs,cur}){
  let prt="http://192.168.2.131:3001"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const headers = { Authorization:a};
  const aftersilme={cid:""}
  let nav=useNavigate()
  let de
  let idof
  let resp=[]
  if(convs.members[1]===na.id){
     de =convs.members[2]
     idof =convs.members[0]
  }else{
    de =convs.members[3]
    idof =convs.members[1]
  }
/*   useEffect(()=>{
    const cu ={cid:"",cnm:de}
    cur(cu)

  },[]) */

/*   useEffect(()=>{
    //soc.emit("who",idof)
    console.log()
    soc.on("m",(r)=>{
      console.log(r.socketId)
    })


  },[]) */
function get(){
  console.log(de,idof)
  soc.emit("who",idof,na.id)
  
  /*   soc.on("m",(r)=>{
      console.log(r.socketId)
    }) */

 call()
}
    
    if(convs.members[0]===na.id){
        if(convs.members[4]===true){
          return(
            <div className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1">
                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 " onClick={get}></img>
                <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" onClick={get} >{de}</span>
            </div>
              )

        }
     }else if(convs.members[1]===na.id){
        if(convs.members[5]===true){
          return(
            <div className="flex items-center mt-1 bg-indigo-100 rounded-lg p-1">
                <img src={pp} alt="s" className="xs:w-5 rounded-full md:w-10 " onClick={get}></img>
                <span className="flex justify-center xs:text-xs md:text-base xs:pr-1 xs:pl-1 xs:break-words" onClick={get} >{de}</span>
            </div>
              )
        }
    
     }


}