import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(
    Number(window.localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
    window.localStorage.setItem("count", count);
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Нажми на меня
      </button>
      <button onClick={() => setCount(0)}>clear</button>
    </div>
  );
}
export default Example;
