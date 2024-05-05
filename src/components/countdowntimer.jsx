import React, {useEffect, useState} from "react";
const TIMER_INTERVAL = 1000;
export default function CountdownTimer({timeToCountdown}){   
    const [time, setTime] = useState(timeToCountdown);
    useEffect(() => {
        setTime(timeToCountdown);
    }, [timeToCountdown]);
    useEffect(() => {
       const countdonwnTimer = setInterval(() => {
         setTime(time => {
            if (time === 0) clearInterval(countdonwnTimer);
            else return time - 1;
        });
       }, TIMER_INTERVAL);
     return () => clearInterval(countdonwnTimer);
    }, [timeToCountdown]);

    
    return (
      <div className="timer">
        {time > 0 ? (<p>Обраный отсчет: {time}</p>):(<p>Время вышло</p>)}     
      </div>
    );
}