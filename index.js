console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("submitted successfully")
}



function goodduckieMessage(evt){
	evt.preventDefault();
alert('Give A Compilment');
}
let duckyPic = document.querySelector('#duckiePic')
duckyPic.addEventListener ('mouseover', goodduckieMessage)


