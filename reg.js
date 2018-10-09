function val() {
    var x = document.forms["myfm"]["username"].value;
    var z = document.forms["myfm"]["email"].value;
    var q = document.forms["myfm"]["password"].value;
    var r = document.forms["myfm"]["password2"].value;
var atposition=z.indexOf("@");  
var dotposition=z.lastIndexOf(".");
    if (x == "") {
        alert("Enter first name");
        return false;
    }
	else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=z.length){  
	   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
       return false;  
    }
    
    else if (q == "") {
        alert("Enter Valid Password");
        return false;
    }   
	else if (r == "") {
        alert("Retype Password");
        return false;
    }
	else if(q!=r)
	{
		 alert("Password should match");
	}

}