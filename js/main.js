// primer js
console.log('Desafio de js número 1')

let nombre = prompt("Como te llamas?")
let origen = prompt("de donde sos?")
let nacimiento = parseInt(prompt("en que año naciste?"))

console.log('Hola ' + nombre + ' de ' + origen + ', tenes ' + (2021 - nacimiento) + ' años.');
alert(`Hola ${nombre} de ${origen}, tenés ${2021-nacimiento} años si ya cumpliste este año, sino tenés ${2021-nacimiento-1}.`);