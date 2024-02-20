console.log('allesiseenobject.js')

let persoon = {
    naam: "Stijn"
}

persoon.leeftijd = 33;

console.table(persoon);

let naam = "Stijn";
naam.bedrag = 33;

console.table(naam);

function add(a, b){
    return a + b;
}

add.naam = "The add function";

console.log(add.naam)

