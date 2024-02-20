import { BoardComponent } from './components/board.js' 

const nav_games_el = document.getElementById('nav_games')
const nav_profile_el = document.getElementById('nav_profile')

const main_el = document.getElementById('main-content')

main_el.innerHTML = "";
main_el.appendChild(new BoardComponent())