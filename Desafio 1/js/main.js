// // desafio 1 js
// console.log('Desafio de js número 1')

// let nombre = prompt("Como te llamas?")
// let origen = prompt("de donde sos?")
// let nacimiento = parseInt(prompt("en que año naciste?"))

// const mensaje = (`Hola ${nombre} de ${origen}, tenés ${2021-nacimiento} años si ya cumpliste este año, sino tenés ${2021-nacimiento-1}.`);

// console.log(mensaje);

//desafio 2 js

console.log('Desafio de js número 2')

const avenida = prompt('Escribe en que avenida estás: Triunvirato o Corrientes').toLowerCase()

if (avenida == 'corrientes') {
    let altura = parseInt(prompt('A que altura de Corrientes estas?'))
    if (altura <= 300) {
        alert('anda a leandro alem')
    } else if (altura <= 700 && altura > 300) {
        alert('anda a Florida')
    } else if (altura <= 700 && altura > 300) {
        alert('anda a Florida')
    } else if (altura <= 1200 && altura > 700) {
        alert('anda a Carlos Pellegrini')
    } else if (altura <= 1600 && altura > 1200) {
        alert('anda a Uruguay')
    } else if (altura <= 2000 && altura > 1600) {
        alert('anda a Callao')
    } else if (altura <= 2500 && altura > 2000) {
        alert('anda a Pasteur')
    } else if (altura <= 3000 && altura > 2500) {
        alert('anda a Pueyrredon')
    } else if (altura <= 3600 && altura > 3000) {
        alert('anda a Carlos Gardel')
    } else if (altura <= 4300 && altura > 3600) {
        alert('anda a Medrano')
    } else if (altura <= 5000 && altura > 4300) {
        alert('anda a Angel Gallardo')
    } else if (altura <= 5700 && altura > 5000) {
        alert('anda a Malabia')
    } else if (altura <= 6300 && altura > 5700) {
        alert('anda a Dorrego')
    } else if (altura <= 6800 && altura > 6300) {
        alert('anda a Federico Lacroze')
    } else {
        alert('Esa altura no existe en Avenida Corrientes')
    }
} else if (avenida == 'triunvirato') {
    let altura = parseInt(prompt('A que altura de Triunvirato estas?'))
    if (altura >= 2600 && altura < 3500) {
        alert('anda a Tronador')
    } else if (altura > 3500 && altura <= 4100) {
        alert('anda a Los Incas')
    } else if (altura > 4100 && altura <= 4400) {
        alert('anda a Los Etcheverria')
    } else if (altura > 4400 && altura <= 4800) {
        alert('anda a Rosas')
    } else if (altura > 2100 && altura <= 2600) {
        alert('anda a estacion Federico Lacroze')
    } else {
        alert('estas lejos del subte, mejor tomate un taxi')
    }
} else {
    prompt('mejor tomate un taxi')
}