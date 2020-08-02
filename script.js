function validate(){
    var name =document.forms["myForm"]["entry.1805608044"];
    var email =document.forms["myForm"]["entry.1245391746"];
    var subject = document.forms["myForm"]["entry.299614839"];
    var message=document.forms["myForm"]["entry.1674000185"];
    if (name.value == ""){
        window.alert("please enter your name .");
        name.focus();
        return false;
    }
    if (email.value == ""){
        window.alert("please enter your email .");
        name.focus();
        return false;
    }
    if (subject.value == ""){
        window.alert("please enter your subject.");
        name.focus();
        return false;
    }
    if (message.value == ""){
        window.alert("please enter your subject.");
        name.focus();
        return false;
    }
    alert("Thank you !! Your details has been submitted");
    return true;
    
  }