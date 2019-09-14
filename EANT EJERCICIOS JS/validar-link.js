var links= document.querySelectorAll("nav > a")

console.log(links)

links.forEach(clickEvent)

function clickEvent(link){ // funcion anonima 
	console.log("en el argumento'link' contiene:")
	console.log(link)
	link.onClick = function() { → hacer esto.
		evento.preventDefault() //< detener el comportamiento predeterminado
		console.log(evento)

		var rta= confirm(" esta seguro que desea abandonar esta pagina")

		if(rta){ 
			//ir a la pagina correspondiente
			console.log("ahora deberia ir a :")
	        console.log(evento.target.hrf)
	        window.location.href = evento.target.href // ←ir a donde iria el elemento clickeado

 

		} else{
		  alert("gracias por quedarse")

		} 

	


/*Funcion Nominada
// function clickEvent(link){
	console.log("en el argumento 'link' hay:")
	console.log(link)
}
*/