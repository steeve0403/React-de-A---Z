import "./Container.css"
import Calculation from "./Calculation.jsx";
import React, { useState } from 'react';
export default function Container() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>useMemo</h1>
        <Calculation />
        <button onClick={() => setCount(count + 1)}>Ajouter</button>
    </div>
  )
}
