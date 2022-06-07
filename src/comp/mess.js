import React from "react";
import { format, render, cancel, register } from 'timeago.js';
import * as jose from 'jose'
export default function Mess({own,message,setmessage}){
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const mes=message.text
  const mest=message.createdAt
 // console.log(mes)
   if(own===na.id){
     own=false
   }else{
    own=true}
  return(
<div className="s">
{own ? (<><div className="flex items-center pt-1 "><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7 rounded-full md:w-10"></img>

        <span className=" xs:text-xs md:text-base bg-white break-words flex rounded-xl px-2 ml-1 text-black border-solid border-2 border-indigo-400 max-w-xl ">{mes}</span>

      </div><div className="md:text-xs  xs:text-xxs text-indigo-600">{format(mest)}</div></>):(
      
    <> 
      <div className="flex items-center justify-end pt-1">
         <span className="xs:text-xs md:text-base bg-blue-500 break-words border-solid border-2 border-indigo-600 flex rounded-xl px-3 mr-1 text-white max-w-xl ">{mes}</span>
         <img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7 rounded-full md:w-10"></img>

</div>
<div className="md:text-xs  xs:text-xxs  text-indigo-600  flex justify-end">{format(mest)}</div>
 </>)}

    

</div>
  )

}