var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var level_title = document.getElementById('level_title');
var level_image = document.getElementById('level_image');
var status = document.getElementById('status');


button1.innerHTML = 'Druk hier om het spel te starten';
level_title.innerHTML = 'Welkom bij mijn spel.';


button2.style.display = "none";

button1.onclick = function(){

	button1.innerHTML = 'Lift';
	button2.style.display = "";
	level_image.src = 'img/liftoftrap.jpg';
	button2.innerHTML = 'Trap';
	level_title.innerHTML = 'Je wordt wakker op je werk en je komt er achter dat de stad verlaten is. Je moet naar beneden, neem je de lift of de trap?';
	button1.onclick = doodlift;
	button2.onclick = leventrap;
}

function doodlift(){
	level_image.src = 'img/lift.jpg';
	level_title.innerHTML = 'Jammer joh, je bent vijftig verdiepingen naar beneden gelazerd. Je bent harder naar beneden gevallen dan het vertrouwen van EA.'
	button1.style.display = 'none'
	button2.style.display = 'none'
}

function leventrap(){
	level_image.src = 'img/autoenfiets.jpg'
	level_title.innerHTML = 'Nu je buiten bent, hoe ga je verder?'
	button1.innerHTML = "Auto";
	button2.innerHTML = "Fiets";
	button1.onclick = doodauto; 
	button2.onclick = levenfiets; 

}

function doodauto(){
	level_title.innerHTML = 'Het bleek dus dat er iets niet helemaal in orde is met je auto. Goed geprobeerd, het gaat om de gedachte.'
	level_image.src = 'img/ripauto.jpg'
	button1.style.display = 'none'
	button2.style.display = 'none'

}

function levenfiets(){
	level_image.src = 'img/crossroads.jpg'
	level_title.innerHTML = 'Lekker een stukje fietsen, totdat je bij een splitsing komt. Welke kan kies je?'
	button1.innerHTML = "Links?";
	button2.innerHTML = "Rechts?";
	button1.onclick = levenlinks;
	button2.onclick = doodrechts; 


}

function doodrechts(){
	level_title.innerHTML = 'Je hebt het niet gehaald om in de stad te komen. Omdat je geen voedsel hebt.'
	level_image.src = 'img/doodopdeweg.png'
	button1.style.display = 'none'
	button2.style.display = 'none'

}
function levenlinks(){
	level_title.innerHTML = 'Om verder te gaan moet je de DLC komen'
	level_image.src = 'img/eamoney.png'
	button1.style.display = 'none'
	button2.style.display = 'none'

}