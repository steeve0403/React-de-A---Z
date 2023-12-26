fetch("https://jsonplaceholder.typicode.com/users")
.then(data => {
    /*
    (Erreur client)
        400 Bad request
        401 Unauthorized
        404 Not found
    */

    /*
    (Erreur serveur)
        500 Internal server error
        503 Service Unavailable
     */
    console.log(data)
    if(!data.ok) throw  new Error(`Erreur ${data.status}`)
    return data.json()
})
.then(data => {
    console.log(data)
})
.catch(e => {
    console.log(e)
})