import { useState, useCallback } from "react";
import Card from "./Card.jsx";
export default function Container() {
    const [count, setCount] = useState(0);

    const customLog = useCallback(() => {
        console.log("Je suis une fonction qui ne fait rien")
    }, [])

    // function customLog() {
    //     console.log("Je suis une fonction qui ne fait rien")
    // }

  return (
    <div>
      <h1>Memo et useCallback</h1>
        <Card txt="Je suis une carte" customLog={customLog}/>
        <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  )
}
