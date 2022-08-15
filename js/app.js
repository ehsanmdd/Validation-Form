
// Span Selects
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


// Input Tag Seelect
let inputNameSelect = document.getElementById("contact-name");
let inputPhoneSelect = document.getElementById("contact-phone");
let inputEmailSelect = document.getElementById("contact-email");
let inputMessageSelect = document.getElementById("contact-message");
let submitBtn = document.getElementById("contact-button");

// Name Validation
function inputNameValidation (event){
    let nameValueKeeper = event.target.value

    if (nameValueKeeper.length == 0 ) {
        nameError.innerHTML = "Name Is Required"
        return false;
    };
    if (!nameValueKeeper.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    };
    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`
    return true;
}

// Phone Validation
function inputPhoneValidation (event){
    let phoneValueKeeper = event.target.value;

    if (phoneValueKeeper.length == 0) {
        phoneError.innerHTML = "Phone Is Required";
        return false;
    }
    if (phoneValueKeeper.length !== 11) {
        phoneError.innerHTML = "Phone Should be 11 digits";
        return false;
    }
    if (!phoneValueKeeper.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

// Email Validation
function inputEmailValidation (event){
    let emailValueKeeper = event.target.value;

    if (emailValueKeeper.length == 0) {
        emailError.innerHTML = "Email Is Required";
        return false
    };
    if (!emailValueKeeper.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid";
        return false
    }
    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

// Message Validation
function inputMessageValidation (event){
    let messageValueKeeper = event.target.value;
    let maxRequired = 45;
    let minLeft = maxRequired - messageValueKeeper.length;

    if ( minLeft > 0) {
        messageError.innerHTML = minLeft + " More Characters Required";
        return false;
    }
    messageError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}


// Submitt Botton Form Check
function submitBtnCheckUp (event){
    event.preventDefault()
    if (!inputNameValidation(event) && !inputPhoneValidation(event) && !inputEmailValidation(event) && !inputMessageValidation(event)) {
        submitError.style.display = "block"
        submitError.innerHTML = "Please Fill Out All The Infomation";
        setTimeout(() => {submitError.style.display = "none"}, 3000)
        return false
    }
}


// Event Listener
inputNameSelect.addEventListener("keyup", inputNameValidation);
inputPhoneSelect.addEventListener("keyup", inputPhoneValidation);
inputEmailSelect.addEventListener("keyup", inputEmailValidation);
inputMessageSelect.addEventListener("keyup", inputMessageValidation);
submitBtn.addEventListener("click", submitBtnCheckUp);