var error = "";
var FNError = "";
var lNError = "";
var PassError = "";
var UserError = "";
var AgeError = "";

var passConfirmError = "";

document.getElementById("submit").disable;

function Check() {
    var valid = false;

    FName();

    document.getElementById("subError").innerHTML = FNError;

    LName();

    document.getElementById("subError").innerHTML = lNError;

    Password();

    document.getElementById("subError").innerHTML = PassError;

    ConfirmPassword();

    document.getElementById("subError").innerHTML = passConfirmError;

    User();

    document.getElementById("subError").innerHTML = UserError;

    Age();

    document.getElementById("subError").innerHTML = AgeError;

    if (error == "" && FNError == "" && lNError == "" && PassError == "" && AgeError == "" && passConfirmError == "") {
        valid = true;
    }
    
    else{
        document.getElementById('submit').disabled = false;
    }

    return valid;
}

function FName() {
    FNError = "";
    var correctNameFormat = /^[A-Z][a-z]*[^0-9][^0-9]*$/;
    var usersFirstName = document.getElementById("firstname").value;

    if (correctNameFormat.test(usersFirstName) == false) {
        FNError ="Invalid First Name (Must start with a cap and only alphabet allowed)";
        document.getElementById('submit').disabled = true;
    }

    else{
        document.getElementById('submit').disabled = false;
    }
    document.getElementById("FNError").innerHTML = FNError;
}

function LName() {
    lNError = "";
    var correctNameFormat = /^[A-Z][a-z]*[^0-9][^0-9]*$/;
    var usersLastName = document.getElementById("lastname").value;

    if (correctNameFormat.test(usersLastName) == false) {
        lNError ="Invalid Last Name (Must start with a cap and only alphabet allowed)";
        document.getElementById('submit').disabled = true;
    }
    
    else{
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("lNError").innerHTML = lNError;
}

function User() {

    error = "";

    var correctUserFormat = /^[a-zA-Z]{1}/;
    var userName = document.getElementById("username").value;

    if (correctUserFormat.test(userName) == false || userName.length < 6) {
        error = "Invalid Username (Username must start with a letter, Must have at least 6";
        document.getElementById('submit').disabled = true;
    }
    
    else{
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("UserError").innerHTML = error;
}

function Password() {

    PassError = "";
    document.getElementById("PassError").innerHTML = "";

    var cor1 = /^[a-zA-z]/;
    var cor2 = /\d/;
    var cor3 = /[A-Z]/;

    var usersPass = document.getElementById("password").value;
    if (!cor1.test(usersPass) || !cor2.test(usersPass) || !cor3.test(usersPass) || usersPass.length != 6){
        PassError = "(Must be 6 characters long, Must start with a character, Must have at least 1 digit and 1 uppercase)";
        document.getElementById('submit').disabled = true;
    }
    
    else{
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("PassError").innerHTML = PassError;
}

function ConfirmPassword() {

    passConfirmError = "";

    var userPass = document.getElementById("password").value;
    var conPassMatch = document.getElementById("confirmPass").value;

    if (!(conPassMatch == userPass)){
        passConfirmError = "Invalid password confirmation (Ensure passwords match)";
        document.getElementById('submit').disabled = true;
    }
    
    else{
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("passConfirmError").innerHTML = passConfirmError;
}



function Age() {

    AgeError = "";
    var usersAge = document.getElementById("Age").value;

    if(usersAge < 18 || usersAge > 60) {
        ageError = "Invalid Age (Age Required Between 18 and 60)";
        document.getElementById('submit').disabled = true;
    }

    else {
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("AgeError").innerHTML = AgeError;
}