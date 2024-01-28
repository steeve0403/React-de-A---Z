import React, { useState, useEffect } from 'react'
import "./Container.css"

export default function Container() {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log("Après la première création et après chaque mise à jour du DOM")
    }, [])
    console.log("Update")

  return (
    <div>
        <h1>Le hook useEffect</h1>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <p>{count}</p>


    </div>
  )
}
