import React, { useState } from 'react';
import './timer.css';
const  Timer =({dataHandler})=> {
    const [counter,setCounter] = useState(0);
    const [timerCode,setTimerCode] = useState(null)
    const startHander = ()=>{
        if(timerCode) return;
        const timer =   setInterval(()=>{
            setCounter(prev=>prev+1);
        },1000)

        setTimerCode(timer)

    }
    const stopHandler=()=>{
        dataHandler({time:counter})
        clearInterval(timerCode);
        setTimerCode(null);
        setCounter(0);
        
    }
  return(
      <>
        <div className="row timer-container">
            <div className="col-9"></div>
            <div className="col-3">
               <span> {counter} </span>
              {timerCode? <button className="btn btn-denger" onClick={stopHandler}>Stop</button>:
              <button className="btn btn-primary" onClick={startHander}>Start</button>
               }

            </div>
        </div>
      </>
  );
}

export default Timer;
