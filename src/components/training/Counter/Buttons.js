import React from "react";

export default function Buttons({
  onIncrement,
  onDecrement,
  incrQuant,
  decrQuant,
}) {
  return (
    <div>
      <button onClick={onIncrement}>increment on {incrQuant}</button>
      <button onClick={onDecrement}>decrement on {decrQuant}</button>
    </div>
  );
}
