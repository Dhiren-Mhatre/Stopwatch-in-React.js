 import React, { useState, useEffect, useRef } from "react";
 function Stopwatch() {
   const [isRunning, setIsRunning] = useState(false);
   const [elaspedTime, setElapsedTime] = useState(0);
   const intervalIdRef = useRef(null);
   const startTimeRef = useRef(0);
 
   useEffect(() => {
     if (isRunning) {
       intervalIdRef.current = setInterval(() => {
         setElapsedTime(Date.now() - startTimeRef.current);
       }, 10);
     }
     return ()=>{
       clearInterval(intervalIdRef.current);
     }
   }, [isRunning]);
 
   function start() {
     setIsRunning(true);
     startTimeRef.current = Date.now() - elaspedTime;
   }
   function stop() {
     setIsRunning(false);
   }
   function reset() {
     elaspedTime(0);
     setIsRunning(false);
   }
 
   function formatTime() {
     let hours=Math.floor(elaspedTime/(1000*60*60));
     let minutes=Math.floor(elaspedTime/(1000*60)%60);
     let seconds=Math.floor(elaspedTime/(1000)%60);
     let milliseconds=Math.floor(elaspedTime%1000);
     return `${hours}:${minutes}:${seconds}:${milliseconds}`;
   }
   return (
     <div className="stopwatch">
       <div className="display">{formatTime()}</div>
       <div className="controls">
         <button className="start-button" onClick={start()}>
           Start
         </button>
         <button className="stop-button" onClick={stop()}>
           Stop
         </button>
         <button className="reset-button" onClick={reset()}>
           Reset
         </button>
       </div>
     </div>
   );
 }
 export default Stopwatch;
 
