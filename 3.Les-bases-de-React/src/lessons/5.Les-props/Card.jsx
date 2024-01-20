export default function Card({id, state, changeState}) {
    console.log(id, state)
    return (
        <div>
            {/* <p>{props.id}</p>
                Voici la carte */}
            <p>User {id}</p>
            <p>State du parent {state}</p>
            <button onClick={() => changeState("Buongiorno")}>Changer le state</button>
        </div>
    )
}