import React from "react";
import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      onStopTime();
    };
  }, []);

  const onStopTime = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div>
      <span>current time:{time.toLocaleTimeString()}</span>
      <button onClick={onStopTime}>stop</button>
    </div>
  );
}
