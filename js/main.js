const fieldsetBasic = document.querySelector('form fieldset:first-child');
const fieldsetActivities = document.querySelector('.activities');
const inputName = document.querySelector('#name');
const selectJobRole = document.querySelector('#title');
const inputJobRole = document.querySelector('#other-title');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const colorOptions = document.querySelector('#color').options;
const cboxActivities = document.querySelectorAll('.activities input');
const priceLabel = document.createElement('label');
const selectPayment = document.querySelector('#payment');
const paymentOptions = selectPayment.options;
const creditDiv = document.querySelector('#credit-card');
const paypalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
let cost = 0;

// Creating & Appending total cost &
// then setting default display to hidden
fieldsetActivities.appendChild(priceLabel);
priceLabel.style.display = 'none';


/* Functions */

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
  // if the clicked checkbox's name value = 'js-frameworks'
  // disable the checkboxes with conflicting times
  if (nameValue === 'all') {
    if (checked) {
      cost += 200;
    } else {
      cost -= 200;
    }
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
  } else if (nameValue === 'node' || nameValue === 'js-libs' || nameValue === 'build-tools' || nameValue === 'npm') {
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
}

const payment = (e) => {
  const paymentMethod = e.target.value;
  if (paymentMethod === 'credit card') {
    creditDiv.style.display = '';
    paypalDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'paypal') {
    paypalDiv.style.display = '';
    creditDiv.style.display = 'none';
    bitcoinDiv.style.display = 'none';
  } else if (paymentMethod === 'bitcoin') {
    bitcoin.style.display = ''
    creditDiv.style.display = 'none';
    paypalDiv.style.display = 'none';
  }
}


/* Default Conditions */

// Sets mouse focus on input for name
document.onload = setFocus();
// hides the textfield to enter an 'other' job role.
inputJobRole.style.display = 'none';
// Sets the initial payment method to credit card
selectPayment.value = paymentOptions[1].value
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';


/* Event Listeners */

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
    pHideShirts(val);
  // else if theme is 'heart js'
  } else if (val === 'heart js') {
    // hide shirts 1-3, display shirts 4-6
    jsHideShirts(val);
  // if theme is not selected
  } else {
    // display all shirts
    for (let i = 0; i < colorOptions.length; i += 1) {
      colorOptions[i].style.display = '';
    }
  }
});

fieldsetActivities.addEventListener('change', toggleCheckboxes);
selectPayment.addEventListener('change', payment);

// if user selects 2 disable 4,
// 3 disable 5
