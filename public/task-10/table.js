function myfunc() {
	var arr = [];
	 var datas = JSON.parse(localStorage.getItem('pavithra'));
    if(datas != null){
    for (var i = 0; i < datas.length; i++) {
    	arr.push(datas[i]);
    	console.log(arr);
    }
}
	var a = document.getElementById('uproduct').value;
	var b = document.getElementById('uprice').value;
 if (a,b == "") {
 	alert('please enter the details');
 }
 else 
 {
   var x = {products:a, prices:b};
   arr.push(x);
   localStorage.setItem("pavithra",JSON.stringify(arr));
   alert('enter successed');
   window.open('table.html')
 }
}