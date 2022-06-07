import { useState } from "react";




export default function Webcam(){
    const [Some, setSome] = useState('');
    const [playing, setPlaying] = useState(false);

    let video = document.getElementById("1");
   function a(){
    if(video){
        console.log("ok")
    }
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (stream) {
            video.srcObject = stream;
            
          })
          .catch(function (err) {
            console.log("Something went wrong!");
          });
      }

   }


    function stop() {
        var stream = video.srcObject;
        var tracks = stream.getTracks();
      
        for (var i = 0; i < tracks.length; i++) {
          var track = tracks[i];
          track.stop();
        }
      
        video.srcObject = null;
      }



return(
    
<div className="min-h-screen bg-[#c4b5fd]  justify-center pt-10 px-2 lg:px-2 grid grid-cols-8  gap-2 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md pt-3 col-span-2">
      <input value={Some} className="focus:outline-none focus:border-orange-500 border-solid border-indigo-600 border-2 rounded-md w-full" id="name" onInput={e => setSome(e.target.value)}  name="name" type="text" autoComplete="name" />
      <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
       
       
       </div>
    


   
    
      </div>
    
   <div className="bg-indigo-100 grid place-items-center xs:text-md md:text-xl text-indigo-700 md:pl-3 pr-1 xs:pl-2 prshadow rounded-lg sm:px-30 col-span-4 mt-3 mb-3 pt-1 "> 
        <video id="1" autoPlay={true} width={500} height={700} >
        </video>
     <button onClick={a}>start</button>
     <button onClick={stop}>stop</button>

       </div>
     
        <div className="pt-2 col-span-2">
        <div className="flex items-center justify-center md:text-xl xs:text-xs text-white mt-1 bg-indigo-100 rounded-lg p-1">
        </div>
     

        </div>
    </div>

)
}

