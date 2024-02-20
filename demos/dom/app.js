
//https://javascript.info/document
console.log('app.js')	

let auroakleuren = [ "red", "blue", "green", "purple", "orange", "yellow", "indigo"]

function leesAura(){
    //current date
    let date = new Date();
    let day = date.getDay();

    let kleur = auroakleuren[day];

    //OF in de browser (F12) Of via debugger in je code.
    // debugger;
    console.log("Je aura is " + kleur);
    return kleur;
}

let kleur = leesAura();

let doosje = document.getElementById("doosje1");
doosje.style.backgroundColor = kleur;
console.log(doosje);

//dom add things
let doosje2 = document.createElement("div");
doosje2.className = "doosje";

let container = document.querySelector('div.container')

//dit liever niet!
// container.innerHTML = `
//     <div class='doosje'>1</div>
//     <div class='doosje'>2</div>

// `

//dit liever wel!
// container.appendChild(doosje2);

//Deze was voor bob, maak het maar kapot!
// let body = document.body;
// body.innerHTML = "Kapot!";

//EVENT LISTENERS
//1. meteen in de HTML onclick (NIET DOEN).


//DIT OOK NIET!
// doosje1.onclick = changeAura;

//DIT is wel al een optie, maar wat nou als we een parameter willen meegeven?
// doosje.addEventListener('click', changeAura);

//dan kunnen we dit doen
doosje.addEventListener('click', function(event){
    //hey, we hebben nu ook toegang tot het event! Fijn :D
    changeAura('blue'); //en params, wooptiedoe!
});

//Dit vind ik het mooiste (met een arrow function)
doosje.addEventListener('click', event => 
    changeAura("blue")
)

function changeAura(kleurparam){

    if(kleurparam)
    {
        doosje.style.backgroundColor = kleurparam;
        return;
    }

    //Anders volgende kleur
    let index = auroakleuren.indexOf(kleur);
    index++;

    if(index >= auroakleuren.length){
        index = 0;
    }

    kleur = auroakleuren[index];
    doosje.style.backgroundColor = kleur;
}