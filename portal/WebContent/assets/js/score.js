var questionNo;
function getCookie(questionNo) {
	  var name = questionNo + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	 
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}
function displayCookies() {

	var x;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		   var myObj = JSON.parse(this.responseText);
		  
		   var counter=0;
//To calculate score.
		for (x in myObj)
			{
		questionNo=x;
	
		var selectedAns=getCookie(x);
		dispQuestion = myObj[x].question;
		
	    dispAnswer="Your answer for "+questionNo+" is " + selectedAns;
    	var dict={A:0,B:1,C:2,D:3};
    	answerOption=myObj[x].answer;
    	answerKey=dict[answerOption];
    	ans=myObj[x].options[answerKey];
    
	    
	    
	    
	    var dispQ="<div class='container'><div class='panel panel-default'><div class='panel-heading'>"+"<b>"+x+")</b> "+dispQuestion+"</div><div class='panel-body'>";
	 	
	    if(myObj[x].answer==selectedAns)
	    	{
			counter++;
	    	var dispA="<div class='alert alert-success'><strong>Correct Answer!"+selectedAns+"</strong></div>";
	    	}
	    else
	    	{
	    	var dispA="<div class='alert alert-danger'><strong>Wrong Answer!"+selectedAns+"</strong></div>";
	    	}
	    var correct="Correct Answer for "+dispQuestion+" is "+ans;
	    var score="Your score is "+counter; 
	    var end="</div></div>";
	    
	    var disp=dispQ+dispA+correct+end;
	
	  document.getElementById("dispQuestion").innerHTML +=disp;
	  document.getElementById("score").innerHTML =score;
	  }
	  }
	  
	  
	};
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.send();
	
	

	}