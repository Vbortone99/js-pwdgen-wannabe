const fixed_number = ('21');
console.log('fixed_number')

let nome = prompt('Il tuo nome');
let cognome = prompt('Il tuo cognome');
let colore_preferito = prompt('Il tuo colore preferito')

let message =nome+ ' ' + cognome+ ' ' +colore_preferito;
console.log('message');
// alert(let=message + fixed_number)

document.getElementById('square').innerHTML = message + ' ' +fixed_number
