import { useState,useEffect } from 'react'

function Clock(){
   const [time,setTime] = useState(getTime())

useEffect(
()=>{
    const intervalId = setInterval(()=> setTime(getTime()),1000)
    return ()=>{clearInterval(intervalId)};
}



);

function getTime(){
    const date= new Date();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const meredium = hour < 12 ? "AM" : "PM";

    hour %=12;

    return `${padTime(hour)}:${padTime(minute)}:${padTime(second)} ${meredium}`
}
function padTime(tobePadded){
   const paddedTime = tobePadded <10 ? "0" :"";
   return paddedTime.concat(tobePadded);

}
return(
   <div className="clock-container">
    <span className='clock-text'>{time}</span>
  </div>
)
}
export default Clock;