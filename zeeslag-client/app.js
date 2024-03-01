const host = "https://avans-webdev-zeeslag.azurewebsites.net";

async function DemoZeeslag() {

    //Step 1 - Create a game
    let create_game_body = {
        player1: "linksonder",
        opponentIsAI: true
    }

    let response = await send_post(`${host}/game`, create_game_body)
    let game = await response.json();
    console.log("Created Game:")
    console.log(game);

    //Step 2 - Get all games
    response = await fetch(`${host}/game`)
    let all_games = await response.json();
    console.log("All games:")
    console.log(all_games);


    //Step 3 - Get one game
    let gameId = game._id
    response = await fetch(`${host}/game/${gameId}`)
    let one_game = await response.json();
    console.log("One game:")
    console.log(one_game);

    //step 4 Send board
    let gameBoard_boy = {
        "board":
            [
                ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                ["0", "v", "v", "v", "v", "v", "v", "0", "0", "0"],
                ["0", "s", "s", "s", "s", "0", "0", "0", "0", "0"],
                ["0", "s", "s", "s", "s", "0", "0", "0", "0", "0"],
                ["0", "o", "o", "o", "0", "0", "0", "0", "0", "0"],
                ["0", "o", "o", "o", "0", "0", "0", "0", "0", "0"],
                ["0", "o", "o", "o", "0", "0", "0", "0", "0", "0"],
                ["0", "p", "p", "0", "p", "p", "0", "0", "0", "0"],
                ["0", "p", "p", "0", "p", "p", "0", "0", "0", "0"],
                ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
            ]
    }

    response = await send_post(`${host}/game/${gameId}/board/linksonder`, gameBoard_boy)
    let board_result = await response.json();
    console.log("Board result:")
    console.log(board_result);

    //Step 4 - Start shooting!
    let shoot_body = {
        "x": 1,
        "y": 1
    }

    response = await send_post(`${host}/game/${gameId}/player/linksonder/shot`, shoot_body)
    let shoot_result = await response.json();
    console.log("Shoot result:")
    console.log(shoot_result);

    //step 4B - Retrieve game again
    response = await fetch(`${host}/game/${gameId}`)
    let game_after_shot = await response.json();
    console.log("Game after shot does not return shots fired:")
    console.log(game_after_shot);

    //Step 5 - Shoot all the squares till we win, starting at 1, 1
    let counter = 0;
    for (let x = 1; x < 10; x++) {
        for (let y = 1; y < 10; y++) {
            response = await send_post(`${host}/game/${gameId}/player/linksonder/shot`, { x, y })
            let shoot_result = await response.json();
            counter++;
            console.log(`Shoot result ${counter}: ${x}, ${y}`)
            if(shoot_result.winner) {
                console.log("We won!");
                x = 10; y = 10; //to finish game
            }
        }
    }

    //step 6 - Get final game state
    response = await fetch(`${host}/game/${gameId}`)
    let final_game = await response.json();
    console.log("Final game:")
    console.log(final_game);


}

function send_post(url, body) {
    return fetch(url, { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });
}

document.querySelector('button').addEventListener('click', DemoZeeslag);