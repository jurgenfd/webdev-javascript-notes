


//gratis voor jullie, mooie oneliner!
let nr = localStorage.getItem('nr') || 0;

let result = document.getElementById('nr');

let input = document.getElementById('input');

input.value = nr;
result.innerText = nr;




function save(){
 
    localStorage.setItem('nr', input.value);
    result.innerText = input.value;
}

document.querySelector('button').addEventListener('click', save);