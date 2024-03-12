# ZEESLAG-API

Welcome to the zeeslag API! This is a simple API that allows you to play multiplayer games. 

- Online endpoint: avans-webdev-zeeslag.azurewebsites.net
- Example app: See folder zeeslag-client

### Game States

#### 1. Waiting

The game is created without an AI player and you cannot continue till somebody joined the game. 

#### 2. Setup

Both players need to create a board and submit it to the game. 
A board contains 10 ships of different sizes: <br>
- 1 x	[V]liegdekschip	- Lengte 6 <br>
- 2 x	[S]lagschip	- Lengte 4 <br>
- 3 x	[O]nderzeeër/Torpedobootjager - Lengte 3 <br>
- 4 x	[P]atrouilleschip - Lengte 2 <br>

#### 3. Playing

After both payers submitted the board the game state switches to playing.
Now players can start shooting (in turn) on the enemy board. 

#### 4. Finished

The game is finished and no actions can be taken. 

### Routes

#### HOME PAGE

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>returns HTML page with api docs</code></summary>
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
 <summary><code>GET</code> <code><b>/game/:id</b></code> <code>Details of 1 game</code></summary>

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
 <summary><code>POST</code> <code><b>/game</b></code> <code>Create a new game with you as player 1</code></summary>

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
    "player1": "Linksonder",
    "opponentIsAI": false
}
```

</details>


<details>
 <summary><code>DELETE</code> <code><b>/game/:id</b></code> <code>Delete one of your games</code></summary>
</details>

<details>
 <summary><code>GET</code> <code><b>/player/:username/game</b></code> <code>A list of all games owned by user with username</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/game/:id/players</b></code> <code>Attempt to join a game that already excists by adding yourself to the player list.</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> |  id        |  required | string                  | ID of the game you want to join. |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                            | `{ game }`                            |
> | `404`         | `application/json`                            | `{ error: string }` (game not found error)                            |
> | `400`         | `application/json`                            | `{ error: string }` (bad request error)                           |
##### Example body

```Javascript
{
    "player2": "Rechtsbooven",
}
```

</details>


#### 


<!-- Game Actions --> 

#### GAME ACTIONS




<details>
 <summary><code>POST</code> <code><b>/game/:id/boards/:username</b></code> <code>Submit your zeeslag board to the game</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> |  board    |  required | 2d array                | 2d array with correct width and height and        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                            | `{ board }`                            |
> | `404`         | `application/json`                            | `{ error: string }` (game not found error)                            |
> | `400`         | `application/json`                            | `{ error: string }` (bad request error)                           |
##### Example body

```Javascript
{
    "board":
    [
        [ "0" , "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        [ "0" , "v", "v", "v", "v", "v", "v", "0", "0", "0"],
        [ "0" , "s", "s", "s", "s", "0", "0", "0", "0", "0"],
        [ "0" , "s", "s", "s", "s", "0", "0", "0", "0", "0"],
        [ "0" , "o", "o", "o", "0", "0", "0", "0", "0", "0"],
        [ "0" , "o", "o", "o", "0", "0", "0", "0", "0", "0"],
        [ "0" , "o", "o", "o", "0", "0", "0", "0", "0", "0"],
        [ "0" , "p", "p", "0", "p", "p", "0", "0", "0", "0"],
        [ "0" , "p", "p", "0", "p", "p", "0", "0", "0", "0"],
        [ "0" , "0", "0", "0", "0", "0", "0", "0", "0", "0"]
    ]
}
```

</details>

<details>
 <summary><code>GET</code> <code><b>/game/:id/board/:username</b></code> <code>Get your own board from the game</code></summary>
</details>

<details>
 <summary><code>POST</code> <code><b>/game/:id/player/:username/shot</b></code> <code>Adds a shot from a player on a specific coördinate </code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> |  x    |  required | number          | Coördinate where to shoot        |
> |  y    |  required | number          | Coördinate where to shoot        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                            | `{ board }`                            |
> | `404`         | `application/json`                            | `{ error: string }` (game not found error)                            |
> | `400`         | `application/json`                            | `{ error: string }` (bad request error)                           |

##### Example body

```Javascript
{
    "x": 0,
    "y": 0
}
```

</details>


