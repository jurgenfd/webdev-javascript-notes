## TIC-TAC-TOE
### The tutorial :sunglasses:

Stappenplan:
1. Teken een cell
2. Teken een bord
3. Maak een cell clickbaar
4. Maak een Game Controller
5. Plaats X of O in cell
6. Kijk of er een winnaar is
7. Optioneel: Drag & Drop?

Afspraken
- Meteen OO
- Netjes opgedeeld in apparte files
- Geen Extra HTML in index.html

# Stap 1 . Teken een Cell
- Maak een klasse Cell.js
- Laat hem 1 zwart vierkantje tekenen binnen de .tic-tac-toe.

Tips: Vergeet type="module" niet toe te voegen aan je script [bron](https://javascript.info/modules-intro)

# Stap 2. Teken een bord
- Maak een klasse Board.js
- Laat deze 9 cellen maken en tekenen in een grid
- Bonus: Maak het grid dynamisch (x * y)

Tips: denk na over wat de rol van CSS is in dit onderdeel. 

# Stap 3. Handel de click af
- Dit is maar een hele kleine stap!

# Stap 4 Maak een Game controller
- Deze klasse moet bij houden wie aan de beurt is (x of o)
- Deze klasse moet toegang hebben tot het bord
- Deze klasse moet een signaaltje krijgen van een cell als er op geklikt is
- Hierna moet hij tegen de cell vertellen welke waarde die moet tekenen

Tip: Geef de klasse Cell toegang tot de game controller door hem mee te geven via de constructor. 


# Stap 5 Bepaal een winnaar
- Doe dit na elke click in de game controller
Tip: Laat dit niet door Chat GPT genereren :cry:

# Bonus : Drag and drop
- Maak de cellen drop-containers
- Maak losse X en O elementen die dragable zijn
- pas de 'click' aan naar een drop

Tips: Werk van uit een [voorbeeld](https://www.w3schools.com/html/html5_draganddrop.asp)
