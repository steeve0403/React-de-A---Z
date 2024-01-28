import React, { useState, useEffect } from "react";
export default function Container() {
    const [count, setCount] = useState(0)

    // setInterval(() => {
    //     setCount(count + 1)
    // }, 1000)

    useEffect(() => {
        const intervalID = setInterval(() => {
            //setCount(count + 1)
            setCount(state => state + 1)
        }, 1000)
        return () => clearInterval(intervalID)
    }, [])

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  )
}