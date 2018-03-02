const form = document.querySelector('form');
const fieldsetBasic = document.querySelector('form fieldset:first-child');
const fieldsetActivities = document.querySelector('.activities');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#mail');
const selectJobRole = document.querySelector('#title');
const inputJobRole = document.querySelector('#other-title');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const colorOptions = document.querySelector('#color').options;
const cboxLegend = fieldsetActivities.querySelector('legend');
const firstcboxLabel = document.querySelector('.activities label:nth-of-type(1)');
const cboxActivities = document.querySelectorAll('.activities input');
const priceLabel = document.createElement('label');
const selectPayment = document.querySelector('#payment');
const paymentOptions = selectPayment.options;
const submitButton = document.querySelector('form button');
const colorDiv = document.querySelector('#colors-js-puns');
const creditDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const CCNumDiv = document.querySelector('#cc-num-div');
const CCZipDiv = document.querySelector('#cc-zip-div')
const CCVDiv = document.querySelector('#cc-v-div');
const inputCCNum = document.querySelector('#cc-num');
const inputCCZip = document.querySelector('#zip')
const inputCCV = document.querySelector('#cvv');

// cost actively calculates total cost of
// selected checkboxes then displays it if > 0
let cost = 0;

// creating booleans for each required input element
// setting all default values to false
// variable will become true when it passes validation test
let validName = false;
let validEmail = false;
let validCheckbox = false;
let validPayment = false;
  // if payment method is 'credit card',
  // these additional variables must also be true
  let validCCNum = false;
  let validCCZip = false;
  let validCCV = false;


// Creating & Appending total cost &
// then setting default display to hidden
fieldsetActivities.appendChild(priceLabel);
priceLabel.style.display = 'none';

/* Hidden Validation Elements --------*/

/*
/ creates error messages customized to each input option
/ all error messages are set to hidden by default
/ when a user clicks the submit button or clicks
*/
const validNameError = document.createElement('p');
validNameError.textContent = 'Please Enter a Valid Name';
fieldsetBasic.insertBefore(validNameError, inputName);
validNameError.style.display = 'none';
validNameError.style.color = 'red';

const validEmailError = document.createElement('p');
validEmailError.textContent = 'Please Enter a Valid Email';
fieldsetBasic.insertBefore(validEmailError, inputEmail);
validEmailError.style.display = 'none';
validEmailError.style.color = 'red';

const validCheckboxError = document.createElement('p');
validCheckboxError.textContent = 'Please select an option';
fieldsetActivities.insertBefore(validCheckboxError, firstcboxLabel);
validCheckboxError.style.display = 'none';
validCheckboxError.style.color = 'red';

const validCCNumError = document.createElement('p');
validCCNumError.textContent = 'Please Enter a Credit Card';
creditDiv.insertBefore(validCCNumError, creditDiv.childNodes[0]);
validCCNumError.style.display = 'none';
validCCNumError.style.color = 'red';

const validCCZipError = document.createElement('p');
validCCZipError.textContent = 'Please Enter a Zip Code';
creditDiv.insertBefore(validCCZipError, creditDiv.childNodes[0]);
validCCZipError.style.display = 'none';
validCCZipError.style.color = 'red';

const validCCVError = document.createElement('p');
validCCVError.textContent = 'Please Enter the Security Code';
creditDiv.insertBefore(validCCVError, creditDiv.childNodes[0]);
validCCVError.style.display = 'none';
validCCVError.style.color = 'red';

const missingRequiredAlert = document.createElement('p');
missingRequiredAlert.textContent = 'Please fill out the required fields *';
missingRequiredAlert.style.color = 'red';
form.insertBefore(missingRequiredAlert, fieldsetBasic);
missingRequiredAlert.style.display = 'none';


/* Functions --------*/

const setFocus = () => {
  inputName.focus();
}

const pHideShirts = () => {
  // Setting default color value for shirt1
  selectColor.value = colorOptions[0].value;
  // Displaying Shirt Options 1,2,3
  for (let i = 0; i < 3; i += 1) {
    colorOptions[i].style.display = '';
  }
  // Hiding Shirt Options 4,5,6
  for (let i = 3; i < 6; i += 1) {
    colorOptions[i].style.display = 'none';
  }
}

const jsHideShirts = () => {
  // Setting default color value for shirt2
  selectColor.value = colorOptions[3].value
  // Hiding Shirt Options 1,2,3
  for (let i = 0; i < 3; i += 1) {
    colorOptions[i].style.display = 'none';
  }
  // Displaying Shirt Options 4,5,6
  for (let i = 3; i < 6; i += 1) {
    colorOptions[i].style.display = '';
  }
}


const toggleCheckboxes = (e) => {
  // storing clicked checkbox's name value
  const nameValue = e.target.getAttribute('name');
  const checked = e.target.checked;
  // creating an empty object to hold each checkbox
  const cboxList = {};
  // creating checkboxes within the object cboxList
  for (let i = 0; i < cboxActivities.length; i += 1) {
    cboxList['checkbox' + (i + 1)] = cboxActivities[i];
  }
  if (nameValue === 'all') {
    if (checked) {
      cost += 200;
    } else {
      cost -= 200;
    }
  // if the clicked checkbox's name value = 'js-frameworks'
  // disable the checkboxes with conflicting times
  } else if (nameValue === 'js-frameworks') {
    if (checked) {
      // disabled conflicting checkboxes
      cboxList.checkbox4.disabled = 'true';
      cost += 100;
    } else {
      // enable previously conflicting checkboxes
      cboxList.checkbox4.removeAttribute('disabled');
      cost -= 100;
    }
  } else if (nameValue === 'express') {
    if (checked) {
      cboxList.checkbox2.disabled = 'true';
      cost += 100;
    } else {
      cboxList.checkbox2.removeAttribute('disabled');
      cost -= 100;
    }
  } else if (nameValue === 'js-libs') {
    if (checked) {
      cboxList.checkbox5.disabled = 'true';
      cost += 100;
    } else {
      cboxList.checkbox5.removeAttribute('disabled');
      cost -= 100;
    }
  } else if (nameValue === 'node') {
    if (checked) {
      cboxList.checkbox3.disabled = 'true';
      cost += 100;
    } else {
      cboxList.checkbox3.removeAttribute('disabled');
      cost -= 100;
    }
  } else if (nameValue === 'build-tools' || nameValue === 'npm') {
    if (checked) {
      cost += 100;
    } else {
      cost -= 100;
    }
  }
  // updating total cost &&
  // displaying if > 0
  priceLabel.textContent = '$' + cost;
  if (cost > 0) {
    priceLabel.style.display = '';
  } else {
    priceLabel.style.display = 'none';
  }
  // each time a checkbox's state is changed, it will
  // check to see if a minimum of 1 checkbox is clicked
  // if not, form won't be able to submit
  validationCheckboxes();
}

const payment = (e) => {
  // storing user's payment option in payment method
  const paymentMethod = e.target.value;
  if (paymentMethod === 'credit card') {
    // validpayment isn't set true until both ZIP, Number,
    // and CVV are set true
    validPayment = false;
    // hides other payment options
    creditDiv.style.display = '';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'paypal') {
    validPayment = true;
    // hides other payment options
    paypalDiv.style.display = '';
    creditDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'bitcoin') {
    validPayment = true;
    // hides other payment options
    bitcoin.style.display = ''
    creditDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
  } else {
    // if no payment method is selected
    validPayment = false;
    // hides all payment options until
    // a user picks one
    creditDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  }
}

/* Validation Checks */

const validationName = () => {
  // checks to make sure entered name is greater than 0 and less than 40 characters long
  // if name isn't valid, an error message will appear
  if (inputName.value.length === 0 || inputName.value.length > 40) {
    inputName.style.borderColor = 'red';
    validNameError.style.display = '';
    validName = false;
    // if it is valid, previous error messages will be hidden
  } else {
    validNameError.style.display = 'none';
    inputName.style.borderColor ='';
    validName = true;
  }
}

const validationEmail = () => {
  // checks to make sure email contains required characterss
  const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  // if valid, hide email error messages
  if (emailCheck.test(inputEmail.value)) {
    validEmailError.style.display = 'none';
    inputEmail.style.borderColor ='';
    validEmail = true;
  // else display email error messages
  } else {
    inputEmail.style.borderColor = 'red';
    validEmailError.style.display = '';
    validEmail = false;
  }
}

const validationCheckboxes = () => {
  // setting default validation check to false
  let validCbox = false;
  // loops through all checkboxes to see
  // if a checkbox is checked, then validation will
  // be set to true and loop will break, otherwise it will remain false
  for (let i = 0; i < cboxActivities.length; i += 1) {
    if (cboxActivities[i].checked) {
      validCbox = true;
      break;
    }
  }
  // if checkboxes pass validation, hide any error messages
  if (validCbox) {
    validCheckboxError.style.display = 'none';
    cboxLegend.style.marginBottom = '';
  // otherwise show error messages
  } else {
    validCheckboxError.style.display = '';
    cboxLegend.style.marginBottom = 0;
  }
  // returns true/false on whether or not checkboxes were valid
  return validCbox;
}

const validationPayment = () => {
  // if the user's paymenth method = credit card
  if (selectPayment.value === 'credit card') {
    // check to make sure that the ZIP, NUM, and CCV are all set to true(valid)
    if (validCCZip && validCCNum & validCCV) {
      return true;
    } else {
      return false;
    }
    // if payment option is paypal or bitcoin, no additional validation checks are required so return true
  } else if (selectPayment.value === 'paypal' || selectPayment.value === 'bitcoin') {
    return true;
  } else { // if payment method isn't credit/paypal/bitcoin, return false since it isn't a valid payment option
    return false;
  }
}

const validationCCNum = () => {
  // if the credit card number isn't entered yet
  // display an error and validCCNUM is set to false
  if (inputCCNum.value.length === 0) {
    validCCNumError.style.display = '';
    validCCNumError.textContent = 'Please Enter a Credit Card';
    inputCCNum.style.borderColor = 'red';
    validCCNum = false;
  // if credit card number > 0 < 13 or > 16
  // tell user to enter a number that's between 13-16 digits
  // sets validCCNUm to false
  } else if (inputCCNum.value.length < 13 || inputCCNum.value.length > 16) {
    validCCNumError.style.display = '';
    validCCNumError.textContent = 'Credit Card must be between 13 and 16 digits long.';
    inputCCNum.style.borderColor = 'red';
    validCCNum = false;
    // if user's credit card number is greater than 13
    // and less then 16 digits long, set validCCNum to true
    // and hide any error messages
  } else {
    validCCNum = true;
    validCCNumError.style.display = 'none';
    inputCCNum.style.borderColor = '';
  }
}

const validationCCZip = () => {
  // if the zipcode isn't 5 digits long
  // display an error and set validCCZip to false
  if (inputCCZip.value.length !== 5) {
    validCCZip = false;
    validCCZipError.style.display = '';
    inputCCZip.style.borderColor = 'red';
  // if the zipcode is 5 digits long
  // hide any error messages & set validCCZip to true
  } else {
    validCCZip = true;
    validCCZipError.style.display = 'none';
    inputCCZip.style.borderColor = '';
  }
}

const validationCCV = () => {
  // if the creditCard CVV isn't 3
  // display an error and set validCCV to false
  if (inputCCV.value.length !== 3) {
    validCCV = false;
    validCCVError.style.display = '';
    inputCCV.style.borderColor = 'red';
  // if the creditCard CVV is 3
  // hide all errors and set validCCV to true
  } else {
    validCCV = true;
    validCCVError.style.display = 'none';
    inputCCV.style.borderColor = '';
  }
}

const missingRequired = () => {
  // this function will be called when a user clicks the 'submit' button
  // and one field didn't pass the required validation Checks
  //
  // it will outline all the required fields with a red border
  // and display an alert at the top
  missingRequiredAlert.style.display = '';
  inputEmail.style.borderColor = 'red';
  inputCCNum.style.borderColor = 'red';
  inputCCZip.style.borderColor = 'red';
  inputCCV.style.borderColor = 'red';
}

const validation = () => {
  // stores true/false value in validCheckbox
  // depending on whether or not one checkbox is checked
  validCheckbox = validationCheckboxes();
  // checks to make sure user's method of payment passes all requirements
  // stores true/false in validPayment
  validPayment = validationPayment();
  // if all input fields are set to true (which means they all passed validation)
  if (validName && validEmail && validCheckbox && validPayment) {
    // then hide the missing required fields error
    missingRequiredAlert.style.display = 'none';
    // return true to the submit button, which allows the form to be submitted
    return true;
  // if one input field isn't valid (false), display the missing required fields error
  } else {
    missingRequired();
    // return false to the submit button listener, which prevents the form from being submitted
    return false;
  }
}

/* Default Conditions --------*/

// Sets mouse focus on input for name
document.onload = setFocus();
// hides the textfield to enter an 'other' job role.
inputJobRole.style.display = 'none';
// hides the t-shirt color selector until a theme is chosen.
colorDiv.style.display = 'none';
// Sets the initial payment method to credit card
selectPayment.value = paymentOptions[1].value
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';



/* Event Listeners -------*/

// listens for a change in the selection input
selectJobRole.addEventListener('change', (e) => {
  const val = e.target.value;
  // if option is equal to 'other', display
  // textfield to enter other job role.
  if (val === 'other') {
    inputJobRole.style.display = '';
  } else {
    inputJobRole.style.display = 'none';
  }
});
// listens to see which design theme the user picks
// hides the options that aren't available to the theme
selectDesign.addEventListener('change', (e) => {
  const val = e.target.value;
  // if theme is 'js puns'
  if (val === 'js puns') {
    // display shirts 1-3, hide shirts 4-6
    colorDiv.style.display = '';
    pHideShirts(val);
  // else if theme is 'heart js'
  } else if (val === 'heart js') {
    // hide shirts 1-3, display shirts 4-6
    colorDiv.style.display = '';
    jsHideShirts(val);
  // if theme is not selected
  } else {
    // display all shirts
    colorDiv.style.display = 'none';
  }
});
// when a checkbox's status is changed, call toggleCheckboxes();
fieldsetActivities.addEventListener('change', toggleCheckboxes);
// when a user's payment option is changed, call payment();
selectPayment.addEventListener('change', payment);

/* Validation Listeners */

// will run individual validation checks on selected input field when a user clicks away/out of input field
inputName.addEventListener('blur', validationName);
inputEmail.addEventListener('blur', validationEmail);
inputCCNum.addEventListener('blur', validationCCNum);
inputCCZip.addEventListener('blur', validationCCZip);
inputCCV.addEventListener('blur', validationCCV);

// final listener, which runs a final validation test on all inputs
submitButton.addEventListener('click', (e) => {
  // if validation checks are true, allow form to be submitted
  if (validation()) {
    console.log('Success!');
  // if validation checks are false, prevent form from being submitted
  } else {
    e.preventDefault();
    console.log('Form has invalid fields.');
  }
});
