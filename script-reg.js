
var inpt = document.getElementsByTagName("input");
var fastName = document.getElementById("fast-name");
var lastName = document.getElementById("last-name");
var dob = document.getElementById("dob");
var phoneNo = document.getElementById("phone-no");
var fatherName = document.getElementById("father-name");

var addressLine1 = document.getElementById("address-line1");
var addressLine2 = document.getElementById("address-line2");
var addressLine3 = document.getElementById("address-line3");
var state = document.getElementById("state");
var pin = document.getElementById("pin");
var dist = document.getElementById("dist");
var email = document.getElementById("email");


var resAddressLine1 = document.getElementById("res-address-line1");
var resAddressLine2 = document.getElementById("res-address-line2");
var resAddressLine3 = document.getElementById("res-address-line3");
var resState = document.getElementById("res-state");
var resPin = document.getElementById("res-pin");
var resDist = document.getElementById("res-dist");
var resEmail = document.getElementById("res-email");
var departmentName = document.getElementById("department-name");
var regNo = document.getElementById("reg-no");
var startYear = document.getElementById("start-year");
var roll = document.getElementById("roll");
var roll = document.getElementById("roll-no");

function myFunction(){
    

    var a = 1;
    
    for(var i =0;i<=inpt.length;i++){
        
        if(inpt[i].value == ""){
            inpt[i].style.border=" 1px solid red";  
            a = 1;  
        }
    }
    
}

function addressFunction(){
    document.getElementById("res-state").value = state.value;
    document.getElementById("res-pin").value = pin.value;
    document.getElementById("res-dist").value = dist.value;
    document.getElementById("res-email").value = email.value;
    document.getElementById("res-address-line1").value = addressLine1.value;
    document.getElementById("res-address-line2").value = addressLine2.value;
    document.getElementById("res-address-line3").value = addressLine3.value;
}