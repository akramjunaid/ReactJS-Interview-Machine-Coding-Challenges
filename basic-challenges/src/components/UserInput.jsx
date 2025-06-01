import React, { useState } from "react";

function UserInput() {
  const [userValue, setUserValue] = useState("");
  return (
    <div className="user-input-container">
      <input
        type="text"
        placeholder="Type something"
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
      <div>
        <span>User Input : </span> {userValue}
      </div>
    </div>
  );
}

export default UserInput;
