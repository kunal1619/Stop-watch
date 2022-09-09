let second=document.querySelector(".second");
let millisecond=document.querySelector(".millisecond");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");

let timeInterval;
let millisec=0;
let sec=0;


const timer=()=>{
    millisec++;
    if(millisec<9){
        millisecond.innerHTML="0"+millisec;
    }
    if(millisec>9){
        millisecond.innerHTML=millisec;
    }
    if(millisec>99){
        sec++;
        second.innerHTML="0"+sec;
        millisec=0;
        millisecond.innerHTML="0"+0;
    }
    if(sec>9){
        second.innerHTML=sec;
        
    }
     
}

// ########start#######
start.addEventListener("click",()=>{
    timeInterval=setInterval(timer,10);
})

// ######Stop#####
stop.addEventListener("click",()=>{
    clearInterval(timeInterval);
})
// ############Reset########
reset.addEventListener("click",()=>{
    clearInterval(timeInterval);
    sec="00";
    millisec="00";
    millisecond.innerHTML=millisec;
    second.innerHTML=sec;
})
                    
