

document.querySelector('button').addEventListener('click', () => {	
    alert('Hello world');
});

let url = "https://dog.ceo/api/breeds/image/random";

// Demo thread blocking
// console.log('voor de alert')
// alert('Luc ie luc')
// console.log('na de alert')

//dus NIET thread blocking
// let result = fetch(url);

//Async programeren!

//basic
// result.then(function(response){
//     //Dit gebeurt later!
//     let responsebody = response.json();
//     responsebody.then(function(data){
//         console.log(data);
//     })
// }).catch(function(error){
//     console.log(error);
// });

//is dit niet mooier?
// fetch(url) //Deze geeft een Promise terug met daar in een HTTP Response
//     .then((res) => res.json()) //We willen de body uit die response, dus json() => Die geeft een nieuwe promise terug met daar in de json
//     .then((data) => console.log(data)) //Dus bij deze .then krijgen we de echte data!
//     .catch(function(error){
//         console.log(error);
//     });


//De laatste dan!
async function getRandomDogo(){
    console.log('X')
    try {
        let httpresponse = await fetch(url); //Deze geeft GEEN promise terug, maar meteen een HTTP Response
        let data = await httpresponse.json();
        return data;
    }
    catch(error){
        console.log(error); //Dit is geen error afhandeling!
    }
    
    
    console.log("B");
}

console.log('A')
getRandomDogo().then(data => {
    let result = document.getElementById('result');

    let img = document.createElement('img');
    img.src = data.message;
    result.appendChild(img);

});

console.log('C')
