//  seventh step:
import React, { useContext } from "react";

// eight step:
import { AppContext } from "../ContextApi/ContextApi";

export default function Counter() {
  // nine step:
  const { count, setCount ,handleChange,Reset} = useContext(AppContext);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={handleChange}
      >
        minus
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
