import React from "react";

export default function Controls({ onIncrement, onDecrement, step }) {
  return (
    <div>
      <button onClick={onIncrement}>+{step}</button>
      <button onClick={onDecrement}>-{step}</button>
    </div>
  );
}
