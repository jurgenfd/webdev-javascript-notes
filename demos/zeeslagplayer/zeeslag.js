
const game_details_el = document.getElementById("game_details");
const games_el = document.getElementById("all_games");
const host = "https://avans-webdev-zeeslag.azurewebsites.net";;


let profile = localStorage.getItem("selected_profile");

if (!profile) {
    //redirect to index page
    window.location.href = "index.html";
}

let current_game = JSON.parse(localStorage.getItem("selected_game"));

if (current_game) {
    showGame(current_game);
}

let profile_el = document.getElementById("profile");
profile_el.innerHTML = profile;


async function getAllGames() {

    let response = await fetch(`${host}/player/${profile}/game`)
    let all_games = await response.json();
    games_el.innerHTML = "";

    for (let i = 0; i < all_games.length; i++) {
        let game = all_games[i];
        let game_el = document.createElement("li");
        game_el.innerHTML = `${game.player1} vs ${game.player2}`;
        game_el.addEventListener("click", function() {
            localStorage.setItem("selected_game", JSON.stringify(game));
            showGame(game);
        });
        games_el.appendChild(game_el);
    }

}

getAllGames();


function showGame(game) {
    console.log(game);
    game_details_el.innerHTML = "";

    h1_el = document.createElement("h2");
    h1_el.innerHTML = `${game.player1} vs ${game.player2}`;

    h3_el = document.createElement("h3");
    h3_el.innerHTML = `State: ${game.state}`;

    game_details_el.appendChild(h1_el);
    game_details_el.appendChild(h3_el);

    if(game.state == "FINISHED") {
        let winner_el = document.createElement("p");
        winner_el.innerHTML = `Winner: ${game.winner}`;
        game_details_el.appendChild(winner_el);
    }

    if(game.state == "PLAYING") {
        let button_el = document.createElement("button");
        button_el.innerHTML = "Play";
        button_el.addEventListener("click", function() {
            playGame(game);
        });
        game_details_el.appendChild(button_el);
    }
}