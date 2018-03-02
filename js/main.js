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

let validName = false;
let validEmail = false;
let validCheckbox = false;
let validPayment = false;
let validCCNum = false;
let validCCZip = false;
let validCCV = false;
// Creating & Appending total cost &
// then setting default display to hidden
fieldsetActivities.appendChild(priceLabel);
priceLabel.style.display = 'none';

/* Hidden Validation Elements */
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
  validationCheckboxes();
}

const payment = (e) => {
  const paymentMethod = e.target.value;
  if (paymentMethod === 'credit card') {
    // Credit Card isn't set valid until both CC & Zip are true
    validPayment = false;
    creditDiv.style.display = '';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'paypal') {
    validPayment = true;
    paypalDiv.style.display = '';
    creditDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'bitcoin') {
    validPayment = true;
    bitcoin.style.display = ''
    creditDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
  } else {
    validPayment = false;
    creditDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  }
}

/* Validation Checks ----------*/

const validationName = () => {
  if (inputName.value.length === 0 || inputName.value.length > 20) {
    inputName.style.borderColor = 'red';
    validNameError.style.display = '';
    validName = false;
  } else {
    validNameError.style.display = 'none';
    inputName.style.borderColor ='';
    validName = true;
  }
}

const validationEmail = () => {
  const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailCheck.test(inputEmail.value)) {
    validEmailError.style.display = 'none';
    inputEmail.style.borderColor ='';
    validEmail = true;
  } else {
    inputEmail.style.borderColor = 'red';
    validEmailError.style.display = '';
    validEmail = false;
  }
}

const validationCheckboxes = () => {
  let validCbox = false;
  for (let i = 0; i < cboxActivities.length; i += 1) {
    if (cboxActivities[i].checked) {
      validCbox = true;
      break;
    }
  }
  if (validCbox) {
    validCheckboxError.style.display = 'none';
    cboxLegend.style.marginBottom = '';
  } else {
    validCheckboxError.style.display = '';
    cboxLegend.style.marginBottom = 0;
  }
  return validCbox;
}

const validationPayment = () => {
  if (selectPayment.value === 'credit card') {
    if (validCCZip && validCCNum & validCCV) {
      return true;
    } else {
      return false;
    }
  } else if (selectPayment.value === 'paypal' || selectPayment.value === 'bitcoin') {
    return true;
  } else {
    return false;
  }
}

const validationCCNum = () => {
  if (inputCCNum.value.length === 0) {
    validCCNumError.style.display = '';
    validCCNumError.textContent = 'Please Enter a Credit Card';
    inputCCNum.style.borderColor = 'red';
    validCCNum = false;
  } else if (inputCCNum.value.length < 13 || inputCCNum.value.length > 16) {
    validCCNumError.style.display = '';
    validCCNumError.textContent = 'Credit Card must be between 13 and 16 digits long.';
    inputCCNum.style.borderColor = 'red';
    validCCNum = false;
  } else {
    validCCNum = true;
    validCCNumError.style.display = 'none';
    inputCCNum.style.borderColor = '';
  }
}

const validationCCZip = () => {
  if (inputCCZip.value.length !== 5) {
    validCCZip = false;
    validCCZipError.style.display = '';
    inputCCZip.style.borderColor = 'red';
  } else {
    validCCZip = true;
    validCCZipError.style.display = 'none';
    inputCCZip.style.borderColor = '';
  }
}

const validationCCV = () => {
  if (inputCCV.value.length !== 3) {
    validCCV = false;
    validCCVError.style.display = '';
    inputCCV.style.borderColor = 'red';
  } else {
    validCCV = true;
    validCCVError.style.display = 'none';
    inputCCV.style.borderColor = '';
  }
}

const missingRequired = () => {
  missingRequiredAlert.style.display = '';
  inputEmail.style.borderColor = 'red';
  inputCCNum.style.borderColor = 'red';
  inputCCZip.style.borderColor = 'red';
  inputCCV.style.borderColor = 'red';
}

const validation = () => {
  validCheckbox = validationCheckboxes();
  validPayment = validationPayment();
  if (validName && validEmail && validCheckbox && validPayment) {
    missingRequiredAlert.style.display = 'none';
    return true;
  } else {
    missingRequired();
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

fieldsetActivities.addEventListener('change', toggleCheckboxes);
selectPayment.addEventListener('change', payment);

/* Validation Listeners */

inputName.addEventListener('blur', validationName);
inputEmail.addEventListener('blur', validationEmail);
inputCCNum.addEventListener('blur', validationCCNum);
inputCCZip.addEventListener('blur', validationCCZip);
inputCCV.addEventListener('blur', validationCCV);

submitButton.addEventListener('click', (e) => {
  if (validation()) {
    console.log('Success!');
  } else {
    e.preventDefault();
    console.log('Form has invalid fields.');
  }
});
