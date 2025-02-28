const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

const dots = document.querySelector('.dots');
dots.innerHTML = "";

for (let j = 0; j < slides.length; j++) {
	const bulletPoint = document.createElement('i');
	bulletPoint.classList.add('dot');
	if(j === 0) {
		bulletPoint.classList.add('dot_selected');
	}
	dots.appendChild(bulletPoint);
}

let baliseImage = document.querySelector('.banner-img');
let textImage = document.querySelector('#banner p');
const dot = document.querySelectorAll('.dot');
let i = 0;

arrow_right.addEventListener('click', () => {
	console.log("click flèche droite");
	selectedRemover(i);
	if (i < (slides.length - 1)) {
		i++;
	}
	else {
		i = 0;
	}
	progressionBanner(i);
});

arrow_left.addEventListener('click', () => {
	console.log("click flèche gauche");
	selectedRemover(i);
	if (i > 0) {
		i--;
	}
	else {
		i = (slides.length - 1);
	}
	progressionBanner(i);
});

function selectedRemover(i) {
	dot[i].classList.remove('dot_selected');
}

function progressionBanner(i) {
	baliseImage.src = slides[i].image;
	textImage.innerHTML = slides[i].tagLine;
	dot[i].classList.add('dot_selected');
}