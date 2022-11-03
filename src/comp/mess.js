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
  let svgcolor="#097EFE"
  let bg="bg-[#097EFE]"
  let bordercolor="border-[#60ACFF]"
  let textcolorblue="text-[#097EFE]"
  const a = localStorage.getItem("token")
  const na=jose.decodeJwt(a)
  const mes=message.text
  const mest=message.createdAt
  let media = message.media
const alert =useAlert()
 // console.log(mes)
   if(own===na.id){
     own=false
   }else{
    own=true}
  return(
<div className="s">
{own ? (<><div className="flex items-center  pt-1 pl-2">
{media ? <><div className=""><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-10 rounded-full md:w-10  mb-1"></img>
<Download color={svgcolor} className="xs:w-10 h-10 rounded-full md:w-10" width="3rem" height="3rem" onClick={async()=>{
 const fileName = new Date().getTime() + '.jpeg';
  const ok = await Filesystem.writeFile({
   path: fileName,
   data: media,
   directory: Directory.Documents
   
 })
 if(ok){
  alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000,})
 }

}}/></div><img onClick={() => {
          open(true);
          on(true);
          console.log(media)
          images.current = media;
        } } src={media} alt="s" className="h-1/6 w-5/6 rounded-xl pl-1"></img></>:<><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-10 rounded-full md:w-10 mr-1"></img>
        <span className={`xs:text-base md:text-base bg-white break-all flex rounded-2xl px-3 ml-1 ${textcolorblue} border-solid border-2 ${bordercolor} max-w-xl`}>{mes}</span></>
 }

      </div><div className={`md:text-sm  xs:text-sm ${textcolorblue} ml-2`}>{format(mest)}</div></>):(
      
    <> 
      <div className="flex items-center justify-end pt-1 ml-2  ">
        {media ? <><img onClick={() => {

                open(true);

                on(true);
                images.current = media;

              } } src={media} alt="s" className="h-1/6  w-5/6 rounded-xl pr-1"></img><div><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-10  rounded-full md:w-10  mb-1"></img>
              <Download color={svgcolor} className="xs:w-10 h-10 rounded-full md:w-10" width="3rem" height="3rem" onClick={async()=>{
                const fileName = new Date().getTime() + '.jpeg';
                 const ok = await Filesystem.writeFile({
                  path: fileName,
                  data: media,
                  directory: Directory.Documents
                })
               if(ok){
                alert.success("RESİM YÜKLENDİ",{position:"middle",timeout:1000,})
               }
               }}/></div></>  :<>
               <span className={`xs:text-base md:text-base ${bg} break-all border-solid border-2 px-3 ${bordercolor}  flex rounded-2xl  mr-1 text-white max-w-xl`}>{mes}</span><img src="https://www.linkpicture.com/q/splash_2.png" alt="s" className="xs:w-10 rounded-full md:w-10 ml-1"></img></>
}
         

</div>

<div className={`md:text-sm  xs:text-sm  ${textcolorblue} flex justify-end`}>{format(mest)}</div>
 </>)}

    

</div>
  )

}