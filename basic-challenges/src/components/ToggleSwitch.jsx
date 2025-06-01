import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      {isOn ? "Yes Toggled" : "No Toggle"}
      <button onClick={handleToggle}>Toggle here</button>
    </div>
  );
}

export default ToggleSwitch;
