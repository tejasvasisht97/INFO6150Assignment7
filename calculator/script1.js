$(document).ready(function() {
    // Login Page Validation
    $('#email').on('input', validateEmail);
    $('#username').on('input', validateUsername);
    $('#password').on('input', validatePassword);
    $('#confirm-password').on('input', validateConfirmPassword);

    function validateEmail() {
        let email = $('#email').val();
        let emailRegex = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
        let isValid = emailRegex.test(email);

        if (!isValid) {
            $('#email-error').text('Please enter a valid northeastern email id');
            return false
        } else {
            $('#email-error').text('');
            return true

        }
    }
    let username = $('#username').val();
    function validateUsername() {
        //let username = $('#username').val();
        let specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
        let isValid = !specialCharsRegex.test(username);

        if (!isValid) {
            $('#username-error').text('Username should not contain special characters');
            return false
        } else {
            $('#username-error').text('');
            return true
        }
    }

    function validatePassword() {
        let password = $('#password').val();
        let minLength = 6;
        let maxLength = 12;
        let isValid = password.length >= minLength && password.length <= maxLength;

        if (!isValid) {
            $('#password-error').text(`Password should be between ${minLength} and ${maxLength} characters`);
            return false
        } else {
            $('#password-error').text('');
            return true
        }
    }

    function validateConfirmPassword() {
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        let isValid = password === confirmPassword;

        if (!isValid) {
            $('#confirm-password-error').text('Passwords do not match');
            return false
        } else {
            $('#confirm-password-error').text('');
            return true
        }
    }


    // $('input').on('input', function() {
    //     let emailIsValid = validateEmail();
    //     let usernameIsValid = validateUsername();
    //     let passwordIsValid = validatePassword();
    //     let confirmPasswordIsValid = validateConfirmPassword();

    //     if (emailIsValid && usernameIsValid && passwordIsValid && confirmPasswordIsValid) {
    //         $('#login-btn').prop('disabled', false);
    //     } else {
    //         $('#login-btn').prop('disabled', true);
    //     }
    // });
    

    $('input').on('input', function() {
        let emailIsValid = validateEmail();
        let usernameIsValid = validateUsername();
        let passwordIsValid = validatePassword();
        let confirmPasswordIsValid = validateConfirmPassword();

        if (emailIsValid && usernameIsValid && passwordIsValid && confirmPasswordIsValid) {
            $('#login-btn').prop('disabled', false);
        } else {
            $('#login-btn').prop('disabled', true);
        }
    });

    $('#login-btn').click(function() {
        console.log('button clicked')
        let emailIsValid = validateEmail();
        console.log(emailIsValid)
        let usernameIsValid = validateUsername();
        console.log(usernameIsValid)
        let passwordIsValid = validatePassword();
        console.log(passwordIsValid)
        let confirmPasswordIsValid = validateConfirmPassword();
        console.log(confirmPasswordIsValid)

        if (emailIsValid && usernameIsValid && passwordIsValid && confirmPasswordIsValid) {
            console.log('username')
            window.location.href = `cal.html?username=${username}`;
        }
    });

    // Calculator Page Validation
    $('#number1').on('input', validateNumber1);
    $('#number2').on('input', validateNumber2);

    function validateNumber1() {
        let number1 = $('#number1').val();
        let isValid = !isNaN(number1) && isFinite(number1);

        if (!isValid) {
            $('#number1-error').text('Please enter a valid number');
        } else {
            $('#number1-error').text('');
        }
    }

    function validateNumber2() {
        let number2 = $('#number2').val();
        let isValid = !isNaN(number2) && isFinite(number2);

        if (!isValid) {
            $('#number2-error').text('Please enter a valid number');
        } else {
            $('#number2-error').text('');
        }
    }

    // Arrow function for operations
    const performOperation = (operation) => {
        let number1 = parseFloat($('#number1').val());
        let number2 = parseFloat($('#number2').val());
        let result;

        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number1 / number2;
                break;
            default:
                result = 'Invalid operation';
        }

        $('#result').val(result);
    }

    // Button click events
    $('#add-btn').click(() => performOperation('add'));
    $('#subtract-btn').click(() => performOperation('subtract'));
    $('#multiply-btn').click(() => performOperation('multiply'));
    $('#divide-btn').click(() => performOperation('divide'));
});
