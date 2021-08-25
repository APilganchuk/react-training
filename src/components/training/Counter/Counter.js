import React from "react";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Value from "./Value";

export default function Counter() {
  const [value, setValue] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  
  useEffect(() => {
    const totalClicks = increment + decrement;
    document.title = totalClicks;
  }, [decrement, increment]);

  const onIncrement = () => {
    setValue(value + 1);
    setIncrement(increment + 1);
  };
  const onDecrement = () => {
    setValue(value - 1);
    setDecrement(decrement + 1);
  };

  return (
    <div>
      <Buttons
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        incrQuant={increment}
        decrQuant={decrement}
      />
      <Value value={value} />
    </div>
  );
}
