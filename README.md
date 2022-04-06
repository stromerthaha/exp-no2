# form-validation-using-only-javascript
How to validate a form with javascript

Step 1: <input type="text" id="firstName" name="firstName" onblur="checkFname()">
 Onblur() is event and checkFname() is a function name

Step 2: <span id="firstNameMsg" class="display-block"></span>
For span tag we use display the validation message
For display-block class using message display to nextline

Step 3: we need to create a function
Syntax:
function functionname()        
{
}
Example
function checkFname()   
{
}

Step 5:  create variable name and assign value to input
var fname=document.getElementById("firstName").value;  

step 6: using the condition statement textbox empty will excute the alert “please enter first name” or your message
if(fname == “”)
{
	document.getElementById('firstNameMsg').innerHTML = "Enter the Name";
}

Step 7: otherwise it show sucesss message 
  document.getElementById('firstName').style.borderColor = "#228B22";

Here the full code for first Name 

<label for="firstName">First Name</label>
<input type="text" id="firstName" name="firstName" onblur="checkFname()">
<span id="firstNameMsg" class="display-block"></span>

/* first name validation starts  */

function checkFname()   
{
	var fname=document.getElementById("firstName").value;  
	if(fname == "")     // first name show empty will show alert message. Here (fname is variable)
	{
		document.getElementById('firstNameMsg').innerHTML = "Enter the Name";
		document.getElementById('firstName').style.borderColor = "#FF0000";	
		return false;
	}
	else 
	{           
                document.getElementById('firstName').style.borderColor = "#228B22";
		document.getElementById('firstNameMsg').innerHTML = "";
              }
	return true;
} 

/* first name validation starts  */
