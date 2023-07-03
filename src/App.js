import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [health, setHealth] = useState(100);
  const [ended, setEnded] = useState(false);

  const punch = () => {
    setHealth(health - 10);
    if (health <= 0) {
      setEnded(true);
    }
  };

  const restart = () => {
    setHealth(100);
    setEnded(false);
  };

  return (
    <div id="vue-app">
      {/* Bag Image */}
      <div id="bag" className={ended ? "burst" : ""}></div>

      {/* Bag Health */}
      <div id="bag-health">
        <div style={{ width: health + "%" }}></div>
      </div>

      {/* Bag Control Buttons */}
      <div id="control-btn">
        <button onClick={punch} style={{ display: ended ? "none" : "block" }}>
          Punch
        </button>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default App;
