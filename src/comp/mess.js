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
import { ReactComponent as Download } from "../pages/images/download.svg"
export default function Mess({own,message,setmessage,images,open,on}){
  //[#60ACFF]
  let darktext="dark:text-[#F0EFE9]"
  let bgfordarkmode="dark:bg-[#1a1a1a]"
  let whitefordark="dark:text-[#F0EFE9]"
  let svgcolor="text-[#097EFE]"
  let bg="bg-[#097EFE]"
  let specialwhitebg="bg-[#F0EFE9]"
  let specialwhitetext="text-[#F0EFE9]"
  let bordercolor="border-[#097EFE]"
  let textcolorblue="text-[#097EFE]"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const mes=message.text
  const mest=new Date(message.createdAt).toLocaleTimeString("tr",{hour: '2-digit', minute:'2-digit'})
  let media = message.media
const alert =useAlert()
  console.log()
   if(own===na.id){
     own=false
   }else{
    own=true}
  return(
<div className="">
{own ? (<><div className="w-full flex items-center   pt-1.5 pl-1.5">
<div className={media? `${bgfordarkmode} ${bg}  h-[20rem] w-5/6 flex p-2 pl-0 pb-2.5 flex-col justify-center items-start rounded-t-2xl rounded-br-2xl`:
`${bgfordarkmode} ${bg} max-w-[20rem]  flex p-1 pb-0 pl-0.5 flex-row-reverse justify-start items-end rounded-t-xl rounded-br-xl`}>
{media ?<div className="flex flex-row min-h-full w-full pt-2.5 pl-2 items-center">
  <Download className={`${svgcolor} hidden  ${specialwhitetext}  ${whitefordark} xs:w-10 h-10 rounded-full md:w-10 `} width="3rem" height="3rem" onClick={async()=>{
   const fileName = new Date().getTime() + '.jpeg';
   const ok = await Filesystem.writeFile({
   path: fileName,
   data: media,
   directory: Directory.Documents
   
   })
   if(ok){
    alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000})
   }}}/>
      <img onClick={() => {
          open(true);
          on(true);
          console.log(media)
          images.current = media;
        } } src={media} alt="s" className=" w-full h-full object-cover rounded-xl pl-0"></img>

      </div>
        
        :<>
        <div className={`flex mx-1 mb-1 pl-1.5  [word-break:break-word]   xs:text-lg md:text-xl ${bg} ${bgfordarkmode} ${darktext} dark:border-[#1a1a1a] border-solid border-2  ${specialwhitetext} ${bordercolor} rounded-lg `}>{mes}

               </div>
       </>
 }
<span className={`text-[0.82rem]  ${specialwhitetext}  ${textcolorblue} dark:text-[#838383] ml-1 flex items-end`}>{mest}</span>
 </div></div></>):(
      
    <> 
      <div className={`flex  items-center justify-end  pt-1.5 pl-2 w-full`}>
      <div className={media ? `${bgfordarkmode} ${bg} h-[20rem] w-5/6 flex p-2 pr-0 pb-2.5  flex-col justify-center rounded-t-2xl rounded-bl-2xl`:
      `${bgfordarkmode} ${bg} [word-wrap:break-word] flex p-1 max-w-[20rem]  pb-0 pr-0.5 flex-row justify-end rounded-t-xl rounded-bl-xl`}>
        {media ? <div className="flex flex-row-reverse pr-2 min-h-full w-full pt-2.5 items-center">
                <Download  className={`${svgcolor} hidden  ${specialwhitetext}   ${whitefordark} xs:w-10 h-10 rounded-full md:w-10`} width="3rem" height="3rem" onClick={async()=>{
                const fileName = new Date().getTime() + '.jpeg';
                 const ok = await Filesystem.writeFile({
                  path: fileName,
                  data: media,
                  directory: Directory.Documents
                })
                if(ok){
                alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000})
                }
                }}/>
                <img onClick={() => {

                   open(true);
                   on(true);
                   images.current = media;

                   }} src={media} alt="s" className=" h-full  w-full object-cover rounded-xl"></img>
               </div>:<>
               <div className={`flex mx-1 mb-1 pr-1.5 align-start [word-break:break-word]  items-center xs:text-lg md:text-xl ${bg} ${bgfordarkmode} ${darktext} dark:border-[#1a1a1a]  border-solid border-2 ${bordercolor} rounded-lg  ${specialwhitetext}`}>{mes}

               </div></>
}
<span className={`text-[0.82rem]   flex items-end ${specialwhitetext} ${textcolorblue} dark:text-[#838383] flex justify-end mr-1`}>{mest}</span>

</div></div></>)}

    

</div>
  )

}