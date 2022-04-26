// scrivere una funzione che presi 2 numeri ne restituisca la somma
function sommaNumeri(numero1, numero2) {

    return numero1 + numero2;
} 

console.log('sommaNumeri', sommaNumeri(1, 2));
console.log('sommaNumeri', sommaNumeri(3, 4));

// scrivere una arrow function che faccia la stessa cosa
const sommaNumeriArrow = (numero1, numero2) => numero1 + numero2;

console.log('sommaNumeriArrow', sommaNumeriArrow(1, 2));
console.log('sommaNumeriArrow', sommaNumeriArrow(3, 4));

// notiamo che se aggiungiamo le parentesi graffe, la arrow function non restituisce nulla di default, e bisogna usare il return
const sommaNumeriArrowGraffe = (numero1, numero2) => { 
    return numero1 + numero2 
};

console.log('sommaNumeriArrowGraffe', sommaNumeriArrowGraffe(1, 2));
console.log('sommaNumeriArrowGraffe', sommaNumeriArrowGraffe(3, 4));

// notiamo che a differenza delle funzioni normali, le arrow function devono essere dichiarate prima di essere usate
// funzione normale
console.log('sommaNumeriDichiarataDopo', sommaNumeriDichiarataDopo(1, 2));
console.log('sommaNumeriDichiarataDopo', sommaNumeriDichiarataDopo(3, 4));

function sommaNumeriDichiarataDopo(numero1, numero2) {

    return numero1 + numero2;
} 

// arrow function
// decommentare perchè se lascio in chiaro da errore
/*
console.log('sommaNumeriArrowDichiarataDopo', sommaNumeriArrowDichiarataDopo(1, 2));
console.log('sommaNumeriArrowDichiarataDopo', sommaNumeriArrowDichiarataDopo(3, 4));

const sommaNumeriArrowDichiarataDopo = (numero1, numero2) => {

    return numero1 + numero2;
} 
*/

// aggiungiamo un click listener a un div con una funzione normale e vediamo quanto vale this
document.querySelector('.cliccami').addEventListener( 'click', function() {

    console.log('click listener con funzione normale', this);
});

// proviamolo ora con arrow function e notiamo che eredita dal suo scope genitore
document.querySelector('.cliccami').addEventListener('click', () => {

    console.log('click listener con arrow function', this);
});

// proviamo il this all'interno di una function
function provaThis() {

    console.log(this);
}

provaThis();