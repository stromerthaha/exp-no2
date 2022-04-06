// simple Text validation

function checkFname()   /* This code for first name */
{
	var fname=document.getElementById("firstName").value;  
	if(fname == "")     // fname empty they show first name
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

function checklname()  // This for last name field
{
	var lname=document.getElementById("lastName").value;
	if(lname == "")
	{
		document.getElementById('lastNameMsg').innerHTML = "Enter the Last Name";
		document.getElementById('lastName').style.borderColor = "#FF0000";	
		return false;
	}
	else
	{
        document.getElementById('lastName').style.borderColor = "#228B22";
		document.getElementById('lastNameMsg').innerHTML = "";		
	}
	return true;
}


function checkEmail()
{
    var x = document.forms["cwForm"]["myEmail"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
	{
        document.getElementById('emailmsg').innerHTML = "Enter Correct Email";
		document.getElementById('myEmail').style.borderColor = "#FF0000";			
        return false;
    }
	else
	{
		document.getElementById('emailmsg').style.borderColor = "#228B22";
		document.getElementById('emailmsg').innerHTML = "";
	}
	return true;
}

function checkPhone()
{
    var phone = document.getElementById("myPhone");
    var phoneNaN = /^[\d\.\-]+$/;
    if(!phoneNaN.test(phone.value))
    {
        document.getElementById('phoneMsg').innerHTML = "Enter Correct Phone Number";
		document.getElementById('myPhone').style.borderColor = "#FF0000";			
        return false;
    }
	else
	{
		document.getElementById("phoneMsg").innerHTML = "";
		document.getElementById('myPhone').style.borderColor = "#228B22";	
		
	}	
    return true;
}


function selectValidate()
{
select = document.getElementById('select_box'); 
if (select.value) 
	{
	  document.getElementById('selectMsg').innerHTML = "";
	  return true;
	}
	{
		document.getElementById('selectMsg').innerHTML = "Choose one";
		return false;	
	}
}

function urlCheck() {
    var url1 = document.getElementById("valUrl");
    var urlNaU = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    if(!urlNaU.test(url1.value))
    {
        document.getElementById('urlMsg').innerHTML = "Enter Correct URL";
		document.getElementById('valUrl').style.borderColor = "#228B22";	
        return false;
    }
	else
	{
		document.getElementById("urlMsg").innerHTML = "";
		document.getElementById('valUrl').style.borderColor = "#00FF00";		
	}	
    return true;
}


function validate_fileupload(fileName)
{
    var allowed_extensions = new Array("jpg","png","gif","doc","pdf");
    var file_extension = fileName.split('.').pop(); 
    for(var i = 0; i <= allowed_extensions.length; i++)
    {
        if(allowed_extensions[i]==file_extension)
        {
			document.getElementById("fileMsg").innerHTML = "file upload sucessfully";
            return true; // valid file extension
        }
    }
	document.getElementById("fileMsg").innerHTML = "Please Upload Correct file";
    return false;
}


function checkTextarea()   /* This code for first name */
{
	var tArea=document.getElementById("msgTarea").value;  
	if(tArea == "")     
	{
		document.getElementById('tAreaMsg').innerHTML = "Please Enter youe Message";
		document.getElementById('msgTarea').style.borderColor = "#FF0000";	
		return false;
	}
	else 
	{
        document.getElementById('msgTarea').style.borderColor = "#228B22";
		document.getElementById('tAreaMsg').innerHTML = "";
    }
	return true;
}

function previewform()
{
    var checkboxs=document.getElementsByName("valcheckBox1");
    var okay=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            okay=true;
            break;
        }
    }
    if(okay)
	{
		document.getElementById('checkboxMsg').innerHTML = "";		
	}
    else
	{
		document.getElementById('checkboxMsg').innerHTML = "Choose Atleast One checkbox";
	}		
	
	/* Radio Button */
	var radiocheck=document.getElementsByName("gender");
    var radiookay=false;
    for(var i=0,l=radiocheck.length;i<l;i++)
    {
        if(radiocheck[i].checked)
        {
            radiookay=true;
            break;
        }
    }
    if(radiookay)
	{
		document.getElementById('radioMsg').innerHTML = "";
	}	
    else 
	{
		document.getElementById('radioMsg').innerHTML = "Select Gender ";
        document.getElementById('radioMsg').style.color = "red";			
	}

    var x = document.getElementById("firstName").value;
	document.getElementById("showFname").innerHTML = x;	

	var x = document.getElementById("lastName").value;
	document.getElementById("showLname").innerHTML = x;
		
	var x = document.getElementById("myEmail").value;
	document.getElementById("showEmail").innerHTML = x;	
	
	var x = document.getElementById("myPhone").value;
	document.getElementById("showPhone").innerHTML = x;		
	
	var x = document.getElementById("valUrl").value;
	document.getElementById("showURL").innerHTML = x;	
	
	var x = document.getElementById("msgTarea").value;
	document.getElementById("showArea").innerHTML = x;
	
}

