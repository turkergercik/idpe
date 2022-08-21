import React from "react";
import { format, render, cancel, register } from 'timeago.js';
import * as jose from 'jose'
import d from "../pages/images/download.png"
import { useAlert } from 'react-alert'
import Alert from 'react-s-alert';
import {openAlert} from "simple-react-alert"
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-default.css';
export default function Mess({own,message,setmessage,images,open,on}){
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const mes=message.text
  const mest=message.createdAt
const alert =useAlert()
 // console.log(mes)
   if(own===na.id){
     own=false
   }else{
    own=true}
  return(
<div className="s">
{own ? (<><div className="flex items-center pt-1 ml-2 ">
{message.media ? <><div><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7 rounded-full md:w-10 mr-1 mb-1"></img><img onClick={async()=>{
 const fileName = new Date().getTime() + '.jpeg';
  const ok = await Filesystem.writeFile({
   path: fileName,
   data: message.media,
   directory: Directory.Documents
   
 })
 if(ok){
  alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000,})
 }

}} src={d} alt="s" className="xs:w-7 rounded-full md:w-10 mr-1"></img></div><img onClick={() => {
          open(true);
          on(true);
          
          images.current = message.media;
        } } src={message.media} alt="s" className="h-1/6 w-5/6 rounded-xl"></img></>:<><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7 rounded-full md:w-10 mr-1"></img><span className=" xs:text-xs md:text-base bg-white break-all flex rounded-xl px-2 ml-1 text-black border-solid border-2 border-indigo-400 max-w-xl ">{mes}</span></>
 }

      </div><div className="md:text-xs  xs:text-xxs text-indigo-600 ml-2">{format(mest)}</div></>):(
      
    <> 
      <div className="flex items-center justify-end pt-1 ml-2 md:pl-10 sm:pl-10 xs:pl-2">
        {message.media ? <><img onClick={() => {

                open(true);

                on(true);
                images.current = message.media;

              } } src={message.media} alt="s" className="h-1/6  w-5/6 rounded-xl"></img><div><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7  rounded-full md:w-10 ml-1 mb-1"></img><img  onClick={async()=>{
                const fileName = new Date().getTime() + '.jpeg';
                 const ok = await Filesystem.writeFile({
                  path: fileName,
                  data: message.media,
                  directory: Directory.Documents
                })
               if(ok){
                alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000,})
               }
               }} src={d} alt="s" className="xs:w-7 rounded-full md:w-10 ml-1"></img></div></>  :<><span className="xs:text-xs md:text-base bg-blue-500 break-all border-solid border-2 border-indigo-600 flex rounded-xl px-3 mr-1 text-white max-w-xl ">{mes}</span><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-7  rounded-full md:w-10 ml-1 "></img></>
}
         

</div>
<div className="md:text-xs  xs:text-xxs  text-indigo-600  flex justify-end">{format(mest)}</div>
 </>)}

    

</div>
  )

}