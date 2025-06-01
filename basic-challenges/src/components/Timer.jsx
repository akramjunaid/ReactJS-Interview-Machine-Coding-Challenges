import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(60);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setMinutes((prevMin) => setMinutes(prevMin + 1));
      setTime(60);
    }
  }, [time]);
  return (
    <div>
      Second Left: {time}
      Minutes Left: {minutes}
    </div>
  );
}

export default Timer;
