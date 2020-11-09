const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const container = document.querySelector('.container');

//FIRST
first.addEventListener('mouseenter', () =>{
	container.classList.add('hover-first');
});

first.addEventListener('mouseleave', () =>{
	container.classList.remove('hover-first');
});

//SECOND
second.addEventListener('mouseenter', () =>{
	container.classList.add('hover-second');
});

second.addEventListener('mouseleave', () =>{
	container.classList.remove('hover-second');
});

//THIRD
third.addEventListener('mouseenter', () =>{
	container.classList.add('hover-third');
});
third.addEventListener('mouseleave', () =>{
	container.classList.remove('hover-third');
});

//FOURTH
fourth.addEventListener('mouseenter', () =>{
	container.classList.add('hover-fourth');
});
fourth.addEventListener('mouseleave', () =>{
	container.classList.remove('hover-fourth');
});