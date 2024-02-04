import { useReducer } from "react";

export default function Container() {

  const [count, dispatch] = useReducer(reducer, 0);
  
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        // console.log(action)
        return state + 1
      case "decrement":
        return state - 1
      case "multiply":
        return state * 10
      case "divide":
        return state / 10
    }
  }
  
  return <div>
    <h1>Valeur du compteur : {count}</h1>
    <button onClick={() => dispatch({type: "increment", payload: 5})}>Incrémenter</button>
    <button onClick={() => dispatch({type: "decrement"})}>Décrémenter</button>
    <button onClick={() => dispatch({type: "multiply"})}>Multiplier par 10</button>
    <button onClick={() => dispatch({type: "divide"})}>Diviser par 10</button>
  </div>
}
