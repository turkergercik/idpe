import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import ConvRedirect from "../comp/convforredirect";
import Possib from "../comp/posib";

function R({}) {
    let mpeop = []
    let peop =[]
 return(<div className="min-h-screen bg-[#c4b5fd]  justify-center pt-10 px-2 lg:px-2 grid grid-cols-8  gap-2 ">
      
 <div className="sm:mx-auto sm:w-full sm:max-w-md pt-3 col-span-2">
 <input className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name" 
   name="name" type="text" autoComplete="name" />
 <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
 <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Mesajlar</span>
</div>
{mpeop.map((c,i)=> (<ConvRedirect />)


)}


 </div>

<div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 "> 
       
       Lütfen bir sohbet seçiniz
  </div>

   <div className="pt-2 col-span-2">
   <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
 <span className="bg-indigo-700 p-1 rounded-lg md:px-2">Kişiler</span>
</div>
   {peop.map((c,i)=> (<Possib />)


)}


   </div>
</div>)
  
  }
  
  export default R;
  