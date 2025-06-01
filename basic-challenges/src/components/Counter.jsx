import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  const handleDecreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button className="counter-btn" onClick={handleIncreament}>
        Increase
      </button>
      {count}
      <button className="counter-btn" onClick={handleDecreament}>
        Decrease
      </button>
    </>
  );
}

export default Counter;
