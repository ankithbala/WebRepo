
var fetchJson=function(q){
var txt=""
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		   var myObj = JSON.parse(this.responseText);
		  
	   x=q
	  
	          document.getElementById("questionNo").innerHTML = x;
	   		  document.getElementById("question").innerHTML = myObj[x].question ;
	    	  document.getElementById("option1").innerHTML = myObj[x].options[0];
	    	  document.getElementById("option2").innerHTML = myObj[x].options[1];
	    	  document.getElementById("option3").innerHTML = myObj[x].options[2];
	    	  document.getElementById("option4").innerHTML = myObj[x].options[3];
	  
	  }
	};
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
}
