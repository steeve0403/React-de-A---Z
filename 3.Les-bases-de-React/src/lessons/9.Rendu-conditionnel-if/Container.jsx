export default function Container() {

  const isLogged = true
  let content

  if (isLogged) content = "Bienvenue sur votre contenu privé"
  else content = "Veuillez vous connecter"

  return (
      <div>
        <h1>Rendu conditionnel</h1>
        <p>{content}</p>
      </div>
  )
}
