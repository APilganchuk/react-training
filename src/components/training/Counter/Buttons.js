import React from "react";

export default function Buttons({ step, onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>increment on {step} </button>
      <button onClick={onDecrement}>decrement on {step}</button>
    </div>
  );
}
