const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false; 
    }
    if(!name.match(/^[A-Za-z/]*\s{1}[A-Za-z]*$/)){
        // [A-Za-z/]  first character should be alphabet
        //   \s{1} for one space
        // [A-Za-z] for any character
        nameError.innerHTML = 'Write full name';
        return false; 
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'; //'valid';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false; 
    }
    if(phone.length !==10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false; 
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false; 
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>'; //'valid';
    return true;

}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false; 
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>'; //'valid';
    return true; 
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageErrorError.innerHTML = 'Message is required';
        return false; 
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>'; //'valid';
    return true;

}

function validateForm(){
    if(!validateName()|| !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = 'Please fix error to submit'
        setTimeout(() => {
            submitError.style.display = "none";
        }, 300);
        return false;
    }
}
