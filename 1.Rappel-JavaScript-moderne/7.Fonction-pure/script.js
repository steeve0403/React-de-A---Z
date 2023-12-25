/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a, b) {
    return a + b
}

console.log(add(10, 10))

function getFinalPrice(price, VAT) {
    return price * (100 + VAT) / 100
}

console.log(getFinalPrice(100, 20))
