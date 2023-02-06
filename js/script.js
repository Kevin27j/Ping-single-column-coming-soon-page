let form = document.getElementById('form-section');
let input = document.getElementById('input-field');
let errorTxt = document.getElementById('error-msg');
let button = document.getElementById('button');

// Submit email address with input
function submitForm(e) {
    e.preventDefault();
}

// Validate email
const emailRgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Create error message when email is 
    // 1 input Left blank
    // 2 input is not valid email
function errorMessage() {
    if (!input.value.match(emailRgx)) {
        errorTxt.style.display = 'block';
        errorTxt.innerHTML = "Please provide a valid email address";
        input.classList.add('input-email-error');
        responsiveErrMsg();
    } else {
        errorTxt.style.display = 'none';
        input.classList.remove('input-email-error');
        form.submit();
    }
    if (input.value === "") {
        errorTxt.style.display = 'block';
        errorTxt.innerHTML = "Whoops! It looks like you forgot to add your email";
        input.classList.add('input-email-error');
        responsiveErrMsg();
    }
}

// Fix desktop screen error message
function responsiveErrMsg() {
    if (window.innerWidth > 767) {
        button.style.alignSelf = 'flex-start';
    } 
    if (window.innerWidth <=767) {
         button.style.alignSelf = 'auto';
    }
}


button.addEventListener('click', errorMessage);
window.addEventListener('resize', responsiveErrMsg);
form.addEventListener('submit', submitForm);

