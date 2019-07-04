function logins(){
    // check empty field
    var pwd=document.login.pass.value;
    var email= document.login.email.value;
    if (email==''){
        document.getElementById('email').style.borderColor="red";
    }
    if (pwd==''){
        document.getElementById('pass').style.borderColor="red";
    }
    if (pwd==''||email==''){
        return false;    
    }
    
}

function validation_password(){
    alert("Plz enter with 1 character, 1 lower case 1 upper case, and 1 number  min 8 characters");
    //password validation
    var pwd=document.login.pass.value;
    var passwdregex='^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])$'
    var password_result = pwd.match(passwdregex);
    if(password_result&&(pwd.length > 6)){
        alert("Plz enter with 1 character, 1 lower case 1 upper case, and 1 number  min 8 characters");
        return false;
    }
    console.log("in password_result");
    if(password_result.length<=8)
        alert("Password must be of 8 characters. Please re-enter your Password");
        return false;
    }
 
function ValidateEmail(email) {
    //email validation
    var email= document.login.email.value;
    var emailregex='[a-zA-Z0-9\\+\\.\\_\\%\\-\\]{1,256}\\@[a-zA-z0-9][a-zA-z0-9\\-]{0, 64}(\\[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})';
    var emailresult = email.match(emailregex);
    if (emailresult){
        return false;
    }
}