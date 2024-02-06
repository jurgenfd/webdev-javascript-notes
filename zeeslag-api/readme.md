# ZEESLAG-API

### Game States

1. Waiting

The game is created without an AI player and you cannot continue till somebody joined the game. 

2. Setup

Both players need to create a board and submit it to the game.

3. Playing

After both payers submitted the board the game state switches to playing.
Now players can start shooting (in turn) on the enemy board. 

4. Finished

The game is finished and no actions can be taken. 

### Routes

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

##### Example body

None

</details>

#### GAMES

<details>
 <summary><code>GET</code> <code><b>/game</b></code> <code>A list of all games sorte by created timestamp</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                            | `[{ _id : guid, player1 : string, player2: string, state: string }]`                            |
> | `400`         | `application/json`                            | `{ error: string }`                            |

##### Example body

None

</details>

<details>
 <summary><code>POST</code> <code><b>/game/</b></code> <code>Create a new game with you as player 1</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> |  player1  |  required | string                  | Your username as a string, you use this as                            |
> |  opponentIsAI  |  optional | boolean                  | If you want to player against AI or not (default = no)          |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`                            | `{ game_id: guid }`                            |
> | `400`         | `application/json`                            | `{ error: string }`                            |

##### Example body

```Javascript
{
    player1: 'Linksonder',
    opponentIsAI: false
}
```

</details>


<details>
 <summary><code>DELETE</code> <code><b>/game{id}</b></code> <code>Delete one of your games</code></summary>
</details>

<details>
 <summary><code>GET</code> <code><b>/player/{email}/games</b></code> <code>A list of all games owned by user with email</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/player/join</b></code> <code>Attempt to join a game that already excists</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> |  player2  |  required | string                  | Your username as a string (cannot be AI) or the same as player1       |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                            | `{ game }`                            |
> | `400`         | `application/json`                            | `{ error: string }` (not found error)                            |
> | `404`         | `application/json`                            | `{ error: string }` (bad request error)                           |
##### Example body

```Javascript
{
    player1: 'Linksonder',
    opponentIsAI: false
}
```

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


