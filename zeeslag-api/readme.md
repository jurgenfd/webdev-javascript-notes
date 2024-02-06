# ZEESLAG-API

Routes: 

#### HOME PAGE

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>returns HTML page with api docs</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `400`         | `html`                            | `{"code":"400","message":"Bad Request"}`                            |

##### Example cURL

None

</details>

#### GAMES

<details>
 <summary><code>GET</code> <code><b>/game</b></code> <code>A list of all games sorte by created timestamp</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/game/</b></code> <code>Create a new game with you as player 1</code></summary>
</details>


<details>
 <summary><code>DELETE</code> <code><b>/game{id}</b></code> <code>Delete one of your games</code></summary>
</details>

<details>
 <summary><code>GET</code> <code><b>/player/{email}/games</b></code> <code>A list of all games owned by user with email</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/player/join</b></code> <code>Attempt to join a game that already excists</code></summary>
</details>


#### 

#### GAME ACTIONS

<details>
 <summary><code>GET</code> <code><b>/game/{id}/board/{email}</b></code> <code>Get your own board from the game</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/game/{id}/boards/{email}</b></code> <code>Submit your zeeslag board to the game</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/game/{id}/shots/{email}</b></code> <code>Adds a shot from a player on a specific coördinate </code></summary>
</details>


