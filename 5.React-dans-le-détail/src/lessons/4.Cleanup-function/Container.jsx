import Card from "./Card.jsx";
import {useEffect, useState} from "react";

export default function Container() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        console.log("Effect")
        return () => {
            console.log("Cleanup function")
        }
    })
  return (
    <div>
      <h1>Cleanup function</h1>
        <button onClick={() => setShow(!show)}>Afficher / Masquer</button>
        {show && <Card />}
    </div>
  )
}
