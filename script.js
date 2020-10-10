var password = document.getElementById("Password");
var email = document.getElementById("email");
var repassword = document.getElementById("repassword");

var len = document.getElementById("len");
var number = document.getElementById("number");
var specalCharacters = document.getElementById("spc-char");

var inputF = document.getElementById("input-f");



//password check//
password.onfocus = function(){
    document.getElementById("check-password").style.display="block";
}
function focusOut(){
    document.getElementById("check-password").style.display="none";
}

password.onkeyup = function(){
    var numbers = /[0-9]/g;
    if(password.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    } 
    //check specal char
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(password.value.match(format)){
        specalCharacters.classList.remove("invalid");
        specalCharacters.classList.add("valid");
    }else{
        specalCharacters.classList.remove("valid");
        specalCharacters.classList.add("invalid");
    }
    //check length
    if(password.value.length >= 8){
        len.classList.remove("invalid");
        len.classList.add("valid")
    }
    else{
        len.classList.remove("valid");
        len.classList.add("invalid");
    }

}
//password view
function passwordView(){
    var x = document.getElementById("Password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//email check//
email.onfocus = function(){
    document.getElementById("check-email").style.display="block";
}
email.onblur = function(){
    document.getElementById("check-email").style.display="none";
}

email.onkeyup = function(){
    var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if(email.value.match(mailformat)){
        document.getElementById("invalid-mail").style.display="none";
        document.getElementById("valid-mail").style.display="block";
    }
    else{
        document.getElementById("valid-mail").style.display="none";
        document.getElementById("invalid-mail").style.display="block";
    }
}


//re-password check//
repassword.onfocus = function(){
    document.getElementById("check-repassword").style.display="block";
}
repassword.onblur = function(){
    document.getElementById("check-repassword").style.display="none";
}

repassword.onkeyup = function(){
    if(password.value === repassword.value && repassword.value !== null ){
        document.getElementById("not-match").style.display="none";
        document.getElementById("match").style.display="block";
    }
    else{
        document.getElementById("match").style.display="none";
        document.getElementById("not- match").style.display="block";
    }
}
