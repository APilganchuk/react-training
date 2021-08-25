import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [timeStatus, setTimeStatus] = useState(true);

  const intervalId = useRef();


  useEffect(() => {
    if (!timeStatus) {
      return;
    }
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      onStopTime();
    };
  }, [timeStatus]);
  const onStartTime = () => {
    setTimeStatus(true);
  };

  const onStopTime = () => {
    clearInterval(intervalId.current);
    setTimeStatus(false);
  };
  return (
    <div>
      <button onClick={onStartTime}>start</button>
      <span>current time:{time.toLocaleTimeString()}</span>
      <button onClick={onStopTime}>stop</button>
    </div>
  );
}
