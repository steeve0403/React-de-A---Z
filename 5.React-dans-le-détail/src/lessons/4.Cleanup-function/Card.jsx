import { useEffect, useState} from "react";
import "./Card.css"

export default function Card() {
    const [state, setState] = useState(0);

    return (
        <div className="card">
            <p>Voici la carte et son state {state}</p>
            <button onClick={() => setState(state + 1)}>Incrémenter</button>
        </div>
    )
}