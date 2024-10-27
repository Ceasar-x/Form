let form = document.getElementById('form')
let userError = document.getElementById('usererror')
let user = document.getElementById('name')
let phoneError = document.getElementById('phoneerror')
let phone = document.getElementById('numberr')
let emailError = document.getElementById('emailerror')
let eMail = document.getElementById('mail')
let passError = document.getElementById('passerror')
let pAss = document.getElementById('pass')
let pAssError = document.getElementById('passerror2')
let paSS = document.getElementById('pass2')
let checker = document.getElementById('check')
let checkerror = document.getElementById('checkerror')

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    if (user.value == "" || (user.value).length == 0 ) {
        userError.innerHTML = "Please enter your username" ;
        userError.style.color = "red" ;
    }else if ((user.value).length > 8 ) {
        userError.innerHTML = "maximum of 8 characters" ;
        userError.style.color = "red" ;
    }else{
        userError.innerHTML = "Valid ✔" ;
        userError.style.color = "green" ;
    }
    if (!/^\d+$/.test(phone.value)) {
        phoneError.innerHTML = "Enter a valid Phonenumber"
        phoneError.style.color = "red"
    }
    else if (phone.value == "") {
        phoneError.innerHTML = "Enter your Phonenumber" ;
        phoneError.style.color = "red";
    }else if ((phone.value).length > 11 ||  (phone.value).length < 11 ) {
        phoneError.innerHTML = "Enter a valid Phonenumber" ;
        phoneError.style.color = "red";
    }else if((phone.value).startsWith("080") || (phone.value).startsWith('080')  || (phone.value).startsWith('090') && (phone.value).length == 11) {
        phoneError.innerHTML = "Valid ✔" ;
        phoneError.style.color = "green"
    }else {
         phoneError.innerHTML = "Enter a valid Phonenumber" ;
        phoneError.style.color = "red" ;
    }
    if (eMail.value == "" || (eMail.value).length == 0) {
        emailError.innerHTML = "Please enter your Email";
    }  else if (!eMail.value.includes("@")) {
        emailError.innerHTML = "Enter a valid Email address";
        emailError.style.color = "red" ;
    } else if (!eMail.value.includes(".")) {
        emailError.innerHTML = "Enter a valid Email address";
        emailError.style.color = "red" ;
    } else {
        emailError.innerHTML = "Valid ✔";
        emailError.style.color = "green" ;
    }
    if (pAss.value == "" || (pAss.value).length == 0 ) {
        passError.innerHTML = "Please enter your Passsword" ;
        passError.style.color = "red" ;
    }else if (pAss.value.length > 8 ) {
        passError.innerHTML = "Password must between the range of 1 - 8 character(s)" ;
        passError.style.color = "red" ;
    }else if(pAss.value == user.value){
        passError.innerHTML = "Password must not be the same as Username" ;
        passError.style.color = "red" ;
    }else {
        passError.innerHTML = "Valid ✔" ;
        passError.style.color = "green" ;
    }
    if (!paSS.value == pAss.value) {
        pAssError.innerHTML = "Pass word does not match" ;
        pAssError.style.color = "red" ;
    }else if (paSS.value == pAss.value) {
        pAssError.innerHTML = "Valid ✔" ;
        pAssError.style.color = "green" ;
    }else{
        pAssError.innerHTML = "Pass word does not match" ;
        pAssError.style.color = "red" ;
    }
    if (!checker.checked) {
        checkerror.innerHTML = "Please agree to Terms and conditions"
        checkerror.style.color = "red"
    }
    else{
        checkerror.innerHTML = ""
    }
    if (user.value == "" && phone.value == "" && eMail.value == "" && pAss.value == "" && !checker.checked) {
        alert('Please fill in the required details') ;
    }
    
}