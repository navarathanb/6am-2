function validate(){
    // alert("Test")
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("msg").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;//true or false
    var crik = document.getElementById("crik").checked;//true or false
    var carm = document.getElementById("carm").checked;//true or false
    var state = document.getElementById("state").value;//true or false

    var namepattern = /^[a-z]+$/;
    var emailpattern = /^[a-z]+[a-z0-9\.\_]+[@]+[a-z\.]+[.]+[a-z]+$/;
    //ratan_basa04@yahoo.com

    if(name.length < 5){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter name and should be min 5";
        document.getElementById("name").focus();
        return false;
    }
    if(!name.match(namepattern)){
        document.getElementById("error").innerHTML = "Please enter name and should be small characters";
        document.getElementById("name").focus();
        return false;
    }
    
    if(email.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter email";
        document.getElementById("email").focus();
        return false;
    }
    if(!email.match(emailpattern)){
        document.getElementById("error").innerHTML = "Please enter email ex.. abc@xyz.com";
        document.getElementById("email").focus();
        return false;
    }
    if(password.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter password";
        document.getElementById("pwd").focus();
        return false;
    }
    if(mobile.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter mobile";
        document.getElementById("mobile").focus();
        return false;
    }
    if(message.length == 0){
        // alert("Please enter name");
        document.getElementById("error").innerHTML = "Please enter message";
        document.getElementById("msg").focus();
        return false;
    }
    if(male == false && female == false){
        document.getElementById("error").innerHTML = "Please select gender";
        document.getElementById("male").focus();
        return false;
    }
    if(crik == false && carm == false){
        document.getElementById("error").innerHTML = "Please select hobbies";
        document.getElementById("crik").focus();
        return false;
    }
    if(state == 'select state'){
        document.getElementById("error").innerHTML = "Please select state";
        document.getElementById("state").focus();
        return false;
    }

}