var array =[];
function clk(){
	var option = document.getElementById('selec').value;
	var quantity = document.getElementById('qty').value;
	var amount = '';
	var price = '';
	var total = '';
	var p = JSON.parse(localStorage.getItem("pavithra"));
	for (var i = 0; i < p.length; i++) {
		console.log(p[i]);
	var op = "<option>"+p[i].products+"</option>"
	document.getElementById('selec').innerHTML += op;
	console.log(op)
	}

	for (var j = 0; j < p.length; j++) {
		if(option == p[j].products){
			price = p[j].prices;
			amount = quantity * price;
			array.push(amount);
		}
	}
	var data = {
		products:option,
		prices:quantity,
		amount:amount
	}
	for (var k=0; k<array.length;k++) {
		var a = array[k];
			total = eval(total+a)	
		}
		document.getElementById('rares').value = total;
		document.getElementById('rare').innerHTML += "<tr><td>"+data.products+"</td>"+"<td>"+data.prices+"</td>"+"<td>"+data.amount+"</td></tr>"
}
