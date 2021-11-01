/*
  PROPS vs. STATE
  🚫 Is it passed as a prop?
  🚫 Can you compute it based on any other state or props in your component?
  🚫 Does it remain unchanged over time?
*/

import React, { useState } from "react";

const Toggle = () =>  {

  const [isOn, setIsOn] = useState(false); // false because the button should be "OFF" when the component first renders

  const handleClick = () => {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white"; // no new state is needed because the change is dependent on another state/prop in the component

  return <button style = {{background : color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
