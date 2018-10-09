function val1() {
    
    var x = document.forms["myform"]["username"].value;
    var y = document.forms["myform"]["password"].value;
   

    if (x == "") {
        alert("Enter Username");
        return false;
    }
    else if (y == "") {
        alert("Enter Password");
        return false;
    }
    
}