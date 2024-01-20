export default function Container() {

    const data = [
        {
            id: 1,
            name: "Marie"
        },
        {
            id: 2,
            name: "Julie"
        },
        {
            id: 3,
            name: "Louise"
        },
    ]

  return (
    <div>
        <h1>Créer une liste d'éléments avec React</h1>
        {data.map(user =>(
            <li key={user.id}>{user.name}</li>
        ))}
    </div>
  )
}