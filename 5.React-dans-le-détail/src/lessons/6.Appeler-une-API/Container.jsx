import { useState, useEffect } from "react"
import "./Container.css"
import spinner from "./spinner.svg"

export default function Container() {
    const [ApiState, setApiState] = useState({
       loading: false,
       error: false,
       data: undefined
    })

    useEffect(() => {
        setApiState({
            ...ApiState,
            loading: true
        })
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) throw new Error("Something went wrong")
                return response.json()
            })
            .then(data => {
                setApiState({ ...ApiState, loading: false, error: false, data: data })
            })
            .catch((e) => {
                console.log(e)
                setApiState({ ...ApiState, loading: false, error: true, data: undefined })
            })
    }, [])

    let content
    if (ApiState.loading) {
        content = <img src={spinner} alt="loading icon"/>
    } else if (ApiState.error) {
        content = <div>Une erreur est survenue ...</div>
    } else if (ApiState.data?.length > 0) {
        content = <ul>
            {ApiState.data.map(item => (
                <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.email}</span>
                    <span>{item.phone}</span>
                </li>
            ))}
        </ul>
    } else if(ApiState.data?.length === 0) {
        content = <p>Aucun résultat</p>

    }

  return (
    <div>
      <h1>Appeler une API</h1>
        {content}
    </div>
  )
}
