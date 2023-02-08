/*function _(id){
	console.log("Hello")
}
_() */

function _(id){
	return document.getElementById(id)
}

function getRs(){
	let txt = _("txt").value
	const d = new Date()

	_('rs').innerHTML += `<div class="card"><p>${txt}</p> <small>${d.toLocaleTimeString()}, ${d.toLocaleDateString()}</small></div><br>`
}





/*
var name = "Bug"
var age = 00
console.log(`My name is ${name} and my age is ${age}`)
*/

/*
var number = console.log(Math.floor(Math.random()* 10));
if(number == 6){
	console.log("...")
}
*/

/*
function teste(){
	return Math.PI
}
console.log(teste())
*/