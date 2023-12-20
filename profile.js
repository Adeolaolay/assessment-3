
function ritualSkincare(evt){
	evt.preventDefault();
alert('Skincare');
}
let ritual = document.querySelector('#ritalSkincare')
ritual.addEventListener ('click', ritualSkincare)

function color(evt){
	evt.preventDefault();
alert('pink');
}
let favecolor = document.querySelector('#color')
Favecolor.addEventListener ('click',color)

function place(evt){
	evt.preventDefault();
alert('Texas');
}
let faveplace = document.querySelector('#place')
faveplace.addEventListener ('click',place)
