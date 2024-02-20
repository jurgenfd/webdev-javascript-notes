//https://javascript.info/first-steps

let naam = 3; 
naam = "Stijn";

console.log(naam);

let input = 3;
let epicvariable = input.toString();

let persoon = {
    naam: "Stijn",
    leeftijd: 33,
    hobbys: ["gaming", "muziek", "lezen"],
    baan: {
        functie: "Software Developer",
        bedrijf: "Avans"
    }, 
    verjaar: function(){
        this.leeftijd++;
        console.log('Eeen keer per jaar ben je jarig');
    }
}



