import React, { useState, useEffect, useRef } from 'react'
import { nanoid } from "nanoid";

export default function DynamicRefSelection() {
    const [fruits, setFruits] = useState([
        {id: nanoid(8), value: "Banane"},
        {id: nanoid(8), value: "Pomme"},
        {id: nanoid(8), value: "Orange"}
    ])

    function deleteFruit(id) {
        setFruits(fruits.filter(fruit => fruit.id !== id))
    }
    const fruitsRef = useRef([])

    function handleRefs(element) {
        if (element) {
            fruitsRef.current.push(element)
        } else {
            fruitsRef.current.shift()
        }
    }
    return (
        <div>
            <ul>
                {fruits.map(fruit => (
                    <li
                        key={fruit.id}
                        onClick={() => deleteFruit(fruit.id)}
                        ref={handleRefs}
                    >
                        {fruit.value}
                    </li>
                    ))}
            </ul>
            <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: "Fraise"}])}>Ajouter une fruit</button>
        </div>
    )
}