import useAPICall from "./hooks/useAPICall.js";
import spinner from "./spinner.svg"

export default function Container() {
    const {catData, error, loading} = useAPICall()
    let content
    if((loading && !error)) {
        content = <img src={spinner} alt="icone de chargement"/>
    }
    else if (catData) {
        content = <img src={catData[0].url} alt="photo d'un chat"/>
    }
    return (
        <div>
            <h1>Photo de chats 🐾</h1>
            {content}
        {/*{(loading && !error) && <img src={spinner} alt="icone de chargement"/>}
        {error && <p>Une erreur est survenue</p>}
        {catData && <img src={catData[0].url} alt="photo d'un chat"/>*/}
    </div>
  )
}
