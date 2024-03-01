const host = "https://avans-webdev-zeeslag.azurewebsites.net";

//Step 1
let step_1_body = {
    player1: "linksonder",
    opponentIsAI: true
}

document.getElementById("step1_body").innerHTML = JSON.stringify(step_1_body, undefined, 2);

async function createGame() {
  
    let response = await send_post(`${host}/game`, step_1_body)
    let result = await response.json();
    resultEl = document.getElementById("step1_result");
    resultEl.innerHTML = JSON.stringify(result, undefined, 2);
}


//Step 2

async function getAllGames() {
  
    let response = await fetch(`${host}/game`)
    let result = await response.json();
    resultEl = document.getElementById("step2_result");
    resultEl.innerHTML = JSON.stringify(result, undefined, 2);
}


document.getElementById("step1_action").addEventListener("click", createGame);
document.getElementById("step2_action").addEventListener("click", getAllGames);

function send_post(url, body) {
    return fetch(url, { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });
}