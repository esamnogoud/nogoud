/*
show success mesagge
show error mesagge

- form submit
- name validation
- email validation
- phone validation
- mesagge validation
*/
const form = document.getElementById("contactform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

/* showError */
function showError(input,message){
const formControl=input.parentElement;
formControl.className= "form-control error";
const span= formControl.querySelector("span"); 
span.innerText=message;
}

/* showSuccess */
function showSuccess(input){
const formControl=input.parentElement;
formControl.className="form-control";
}

form.addEventListener("submit",function (e) {
    // e.preventDefault();
    let isValid =true;

    // Username Validation
    if(username.value.trim() === ""){
        showError(username, "Username is Require");
        isValid = false;
    } 
    else{
        showSuccess(username);
    }
       
    // Email Validation
    if(email.value.trim() === ""){
        showError(email, "Email is required");
        isValid = false;
    } else{
        showSuccess(email);
    }

    // Phone Validation
    if(phone.value.trim() === "")
        {
        showError(phone, "Phone is Required");
        isValid = false;
        } 

        else if (phone.value.trim().length !== 11)
        {
         showError(phone, "phone must be 11 digite");
         isValid = false;
        }

        else
        {
        showSuccess(phone);
        }

    // Message Validation
    if(message.value.trim() === ""){
        showError(message, "Message is required");
        isValid = false;
    } else{
        showSuccess(message);
    }
    
    if (isValid === false)
    {
    e.preventDefault();
    }
    
});
