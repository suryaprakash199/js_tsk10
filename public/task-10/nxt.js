
function nxt() {
	var tex ="";
	var p = JSON.parse(localStorage.getItem('pavithra'));
	if(p!=null){
	for (var i = 0; i < p.length; i++) {
		tex +="<tr class='mx-auto text-center'><td class ='count'>"+" "
		tex += "<td>" + p[i].products
		tex += "<td>" + p[i].prices + "</td></tr>"		
	console.log(tex);
	}
}
	document.getElementById('result').innerHTML = tex;
}