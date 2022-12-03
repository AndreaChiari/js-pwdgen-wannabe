console.log('JS OK')

/* Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


/*
1.prendo il mio elemento dal DOM
2.chiedo all'utente il suo nome con un prompt e lo inserisco nella mia variabile
3.chiedo all'utente il suo cognome con un prompt e lo inserisco nella mia variabile
4.chiedo all'utente il suo colore preferito con un prompt e lo inserisco nella mia variabile
5.stampo le informazioni ricevute can l'aggiunta di 21
*/


// prendo il mio elemento da HTML
const targetElement = document.getElementById('target');
console .log('targetElement')

// imposto una variabile con un prompt per chiedere il nome e associare quindi quest'ultimo alla variabile
const firstName= prompt("qual'e' il tuo nome?" , 'andrea')
console .log('firstName')

// imposto una variabile con un prompt per chiedere il cognome e associare quindi quest'ultimo alla variabile
const Surname= prompt("qual'e' il tuo cognome?" , 'chiari')
console .log('Surname')

// imposto una variabile con un prompt per chiedere il colore preferito e associare quindi quest'ultimo alla variabile
const favColor= prompt("qual'e' il tuo colore preferito?" , 'blu')
console .log('favColor')


// stampo il risultato sull'HTML unendo le variabili precendenti e aggiungendo 21
targetElement .innerText = firstName + Surname + favColor + 21

/* alternativa a 21 in numero, per farla funzionare basta sostituire il numero 21 
a questa variabile "alternative" e quindi spostare la variabile che segue questo commento SOPRA alla stampa 
*/

const alternative= ('21')
console .log('alternative')