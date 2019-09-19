function setCookie(questionNo,answer,exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = questionNo + "=" + answer + ";" + expires + ";path=/";
	  
	}
	
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
function checkCookie(questionNo) {
	  var ans=getCookie(questionNo);
	  if (ans != "") {
	    //alert("Your answer for "+questionNo+" is " + ans);
	  } else {
	     ans = prompt("Please enter your name:","");
	     if (ans != "" && ans != null) {
	       setCookie(questionNo, answer, 30);
	     }
	  }
	}

function myFunction() {
	var questionNo=document.getElementById('questionNo').innerHTML;
	var selected;
	var flag=0;
	//checkCookie();
	var opt=document.getElementsByName('option');
	for(i=0;i<opt.length;i++)
		{
			if(opt[i].checked)
				{
				flag=1;
				selected=opt[i].value;
				setCookie(questionNo, selected, 30);
				}
		}
	
//To not allow user to goto next page without selecting on of the radio buttons.
	if(flag==1)
		{
	 
	  checkCookie(questionNo);
		}
	else
		{
		alert("Please select one of the option");
		return false;
		}
	  
	}