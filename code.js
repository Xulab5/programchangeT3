/*
Written by Steven Sub
Date: 3rd Decemember 2019
Description: This Javascript code Validates a form

*/



function validate()
{
		
	var name=document.getElementsByName("name")[0].value;
	var idtxt=document.getElementsByName("id")[0].value;
	var day=document.getElementsByName("day")[0].value;
	var year=document.getElementsByName("year")[0].value;
	var month=document.getElementsByName("month")[0].value;
	var txtarea= document.getElementsByName("comment")[0].value;
	var alpha="abcdefghijklmnopqrstuvw";
	var stateError=false;
	var txtmonth;
	var errors=document.getElementById("error");
	errors.style.color="red";
	errors.innerHTML=" ";
/***********************************validates name*************************************/	
	if(name=="")
	{
		alert("name required!");
		errors.innerHTML +="name required";
		stateError=true;
		
	}//end of if
	else 
	{
		var state=false;
		for(var i=0; i < name.length; i++)
		{
  
			for(var countr = 0; countr < alpha.length; countr++)
			{
				if(name.charAt(i)!=alpha.charAt(countr))
					state=true;//set state to true if there is a symbol or number in name
				  else {state=false; break;	}
				  
			}//end of inner for lop	
			
		}//end of inner for loop
		if(state)
				{
					 alert("no symbols or number allowed in your name");
					errors.innerHTML +=" <br>no symbols or number allowed in your name"
					stateError=true;				
					 
				}//end of if
		
}//end of else
		
				
/***************************validates ID*******************************/
	if(idtxt.trim()=="")
	{
		alert("Id required!");
		 errors.innerHTML +=" <br> Id required!"
		 stateError=true;
		//return false;
	}//end of if
	
/********************************validats date of birth****************************************/
	if(day.trim()!="" && month.trim()!="" && year.trim()!="")
	{
		if( Number(year) > 2000)
		{
			alert("Year can not be after 2000.");
			errors.innerHTML +="<br>Year can not be after 2000.";
			stateError=true;
		}//end of if
		
		if( isNaN(month))//checks if the month is not a number function isNaN() returns true if it month is not a number
		{
			alert("month should be indicated by number.");
			errors.innerHTML +=" <br> month should be indicated by number.";
			stateError=true;
		}
			
			switch(Number(month))
			{
					case 1:
							if(day > 31)
							{
								alert( "January has only 31 days!");
							}
							txtmonth="January";
							break;
					case 2:
							if( day>29)
							{
								alert("February has only 29 days.");
							}
							txtmonth="February";
							break;
					case 3:
							if( day>31)
							{
								alert("March has only 31 days.");
							}
							txtmonth="March";
							break;
					case 4:
							if( day>30)
							{
								alert("April has only 30 days.");
							}
							txtmonth="April";
							break;
					case 5:
							if( day>31)
							{
								alert("May has only 31 days.");
							}
							txtmonth="May";
							break;
					case 6:
							if( day>30)
							{
								alert("June has only 30 days.");
							}
							txtmonth="June";
							break;
					case 7:
							if( day>31)
							{
								alert("July has only 31 days.");
							}
							txtmonth="July";
							break;
					case 8:
							if( day>31)
							{
								alert("August has only 31 days.");
							}
							txtmonth="August";
							break;
					case 9:
							if( day>30)
							{
								alert("September has only 30 days.");
							}
							txtmonth="September";
							break;
					case 10:
							if( day>31)
							{
								alert("October has only 31 days.");
							}
							txtmonth="October";
							break;
					case 11:
							if( day>30)
							{
								alert("November has only 30 days.");
							}
							txtmonth="November";
							break;
					case 12:
							if( day>31)
							{
								alert("December has only 31 days.");
							}
							txtmonth="December";
							break;
			}// end of switch
		
	}else 
	{
		alert("Day, month and year should not be empty.");
		errors.innerHTML +="<br>Day, month and year should not be empty.";
		stateError=true;		
		
	}//end of if
	
	/*******************validate text area**************************/
	if(txtarea.trim()=="")
	{
		alert("comment area cant be empty");
		errors.innerHTML +=" <br>comment area cant be empty";
		stateError=true;
	}
	else
	{
		var numofwords=0;
			for ( var i=0; i < txtarea.length; i++)
		{
			if(txtarea.charAt(i)==" " || txtarea.charAt(i)=="." || txtarea.charAt(i)=="!"){
			numofwords++;
			}				
		}//end of for
		
		var forbiddenwords=["fart","dung", "turd"];
		var substitute=["cool", "groovy", "flawless"];
		for(var i=0; i < forbiddenwords.length; i++)
		{
			var x= Math.floor( (Math.random()*3)+1 );
		txtarea=txtarea.replace(forbiddenwords[i], substitute[x-1]);
		
		}//end of for
	}//end of else
	
if(stateError)
{
	return false;
}
else {
	alert("Name: " + name + "\n ID: " + idtxt + "\n Date of Birth: " + day +" " + txtmonth + " " + year+"\n"+txtarea);
}

}//end of function validation