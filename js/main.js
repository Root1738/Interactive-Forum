const fieldsetBasic = document.querySelector('form fieldset:first-child');
const inputName = document.querySelector('#name');
const selectJobRole = document.querySelector('#title');
const inputJobRole = document.querySelector('#other-title');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const colorOptions = document.querySelector('#color').options;
console.log(colorOptions);


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


/* Default Conditions */

// Sets mouse focus on input for name
document.onload = setFocus();
// hides the textfield to enter an 'other' job role.
inputJobRole.style.display = 'none';


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
