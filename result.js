

var score = parseFloat(document.location.search.replace(/^.*?\=/, " "));
var offset = 4.087216084207742; 

function convert(n) {
	return 100 - ((n + offset) * 100/(offset*2));
}

document.getElementById("score").textContent =  Math.round(convert(score)) ;

document.getElementById("dot").style.left =  200 + convert(score)*10 + "px";
