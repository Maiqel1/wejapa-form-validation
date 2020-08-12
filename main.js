const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const numberValue = number.value.trim();
    
    //fullname
    let name = fullname.value.split(' ');
    console.log(name);
    if (name.length == 2 && fullname.value.includes(' ')) {
        setSuccessFor(fullname);
    }
	 else if(fullnameValue === '') {
		setErrorFor(fullname, 'fullname cannot be blank');
	} else if (fullnameValue.length == 2 && fullnameValue.includes(' ')) {
        setErrorFor(fullname, 'Fullname must contain first and last name');
    } else {
		setErrorFor(fullname, 'Please enter your first and last name');
    }
    //email
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	//password
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password cannot be less than 6 characters');
    } else {
		setSuccessFor(password);
	}
	//phone number
	if(numberValue === '') {
		setErrorFor(number, 'Phone number cannot be blank');
	} else if (number.value.substr(0, 1).includes('+') ) {
        setSuccessFor(number, "Input a valid number");
    } else if(numberValue.length == 14) {
		setSuccessFor(number, 'Phone number cannot be less than 14 digits');
	} else {
        setErrorFor(number, 'Phone number must be 14digits and contain "+"')
    }
}
// error message
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
//success message
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	// email verification
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
