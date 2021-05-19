const myButton= document.querySelector("button");
const result=document.querySelector("div");
myButton.addEventListener("click",function(){
	var txt="";
	for (var i = 1;i<=10; i++) {
	txt +="5 * "+ i +" = "+ (i*5) +"<br/>";
	}
	result.innerHTML = txt;
}) ;