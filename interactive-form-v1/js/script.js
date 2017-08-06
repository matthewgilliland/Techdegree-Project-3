/*jshint esversion: 6 */
/*
* Welcome to my Interactive Form project!
* I'm shooting for "Exceeds Expectations."
* Thanks for your time!
*/

// Variables - Name
const name = document.getElementById('name');
const nameErrorDiv = document.createElement('div');
const nameErrorSpan = document.createElement('span');

// variables - email
const email = document.getElementById('mail');
const emailErrorDiv = document.createElement('div');
const emailErrorSpan = document.createElement('span');
const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Variables - Job title
const jobTitle = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

// Variables - Colors
const colorMenu = document.getElementById('colors-js-puns');
const colorChoices = document.getElementById('color');
const designChoice = document.getElementById('design');

// Variables - Activities
const activities = document.querySelector('.activities');
const mainConference = document.querySelector("input[name='all']");
const jsFrameworksW = document.querySelector("input[name='js-frameworks']");
const jsLibrariesW = document.querySelector("input[name='js-libs']");
const expressW = document.querySelector("input[name='express']");
const nodeJSW = document.querySelector("input[name='node']");
const buildToolsW = document.querySelector("input[name='build-tools']");
const npmW = document.querySelector("input[name='npm']");
const activitiesErrorDiv = document.createElement('div');
const activitiesErrorSpan = document.createElement('span');

// Variables - Totals
const totalHTML = document.createElement('div');
const totalSpan = document.createElement('span');
let total;
let printCost = 0;

// Variables - Payment type
const paymentType = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

// Variables - Payment info
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvCode = document.getElementById('cvv');
const paymentErrorDiv = document.createElement('div');
const paymentErrorSpan = document.createElement('span');

// Variables - Submit
const register = document.querySelector('button');

// Function to create errors
const createError = function(errorMessage, span, div, insertBeforeLoc) {
  span.textContent = '';
  span.append(errorMessage);
  span.setAttribute("class", "error");
  div.appendChild(span);
  insertBeforeLoc.parentNode.insertBefore(div, insertBeforeLoc);
};

// Submission validations
  // Name Validation - Not blank
  const nameNotBlank = () => {
    if (name.value == '') {
      createError('Name cannot be blank', nameErrorSpan, nameErrorDiv, name);
      return false;
    } else {
      nameErrorDiv.remove();
      return true;
    }
  };

  const emailNotBlank = () => {
    if (email.value == '') {
      createError('Email cannot be blank', emailErrorSpan, emailErrorDiv, email);
      return false;
    } else {
      emailErrorDiv.remove();
      return true;
    }
  };

  const emailValid = () => {
    if (regex.test(email.value) == false) {
      createError('Please enter a valid email', emailErrorSpan, emailErrorDiv, email);
    } else {
      emailErrorDiv.remove();
    }
    return regex.test(email.value);
  };

  const activitySelected = () => {
    if (printCost == 0) {
      createError('Please select at least one activity', activitiesErrorSpan, activitiesErrorDiv, mainConference);
      return false;
    } else {
      activitiesErrorDiv.remove();
      return true;
    }
  };

  const paymentValid = () => {
    if (paymentType.value === 'paypal') {
      return true;
    } else if (paymentType.value === 'bitcoin') {
      return true;
    } else if (isNaN(parseInt(creditCardNumber.value))) {
      createError('Please enter numbers 0-9', paymentErrorSpan, paymentErrorDiv, creditCard);
      return false;
    }  else if (creditCardNumber.value == '' || creditCardNumber.value == null) {
        createError('Please enter a credit card number', paymentErrorSpan, paymentErrorDiv, creditCard);
        return false;
    } else if (creditCardNumber.value.length < 13 || creditCardNumber.value.length > 16) {
        createError('Please enter a number between 13 and 16 digits', paymentErrorSpan, paymentErrorDiv, creditCard);
        return false;
    } else if (zipCode.value.length != 5 || zipCode.value == '' || zipCode.value == null || isNaN(parseInt(zipCode.value))) {
        createError('Please enter a valid zip code', paymentErrorSpan, paymentErrorDiv, creditCard);
        return false;
    } else if (cvvCode.value.length != 3 || cvvCode.value == '' || cvvCode.value == null || isNaN(parseInt(cvvCode.value))) {
        createError('Please enter a valid CVV code', paymentErrorSpan, paymentErrorDiv, creditCard);
        return false;
    } else {
      paymentErrorDiv.remove();
      return true;
    }
  };

// Function to call all validations/create errors for invalid fields
const validation = () => {
  nameNotBlank();
  emailNotBlank();
  emailValid();
  activitySelected();
  paymentValid();
};

// Email Keyup tester
  $(email).keyup(function() {
    if (regex.test(email.value) == false) {
      createError('Please enter a valid email', emailErrorSpan, emailErrorDiv, email);
    } else {
      emailErrorDiv.remove();
    }
  });

// Automatically focus on first text field
$(function() {
  name.focus();
});

// Hide "Other" text field
$(function() {
  $(otherTitle).hide();
});

// Listener: If "Other" is selected in "Job Role," reveal text field
$(jobTitle).change(function() {
  if ($(this).val() === "other") {
  $(otherTitle).show();
} else {
  $(otherTitle).hide();
}
});

// Function to hide color dropdown, depopulate
$(function() {
  $(colorMenu).hide();
  $(colorChoices).html('');
});

// On shirt choice, show color dropdown and populate with correct colors
$(designChoice).change(function() {
  if ($(this).val() === "js puns") {
  $(colorMenu).show();
  $(colorChoices).html(
    '<option value="cornflowerblue">Cornflower Blue</option>' +
    '<option value="darkslategrey">Dark Slate Grey</option>' +
    '<option value="gold">Gold</option>'
  );
} else if ($(this).val() === "heart js") {
  $(colorMenu).show();
  $(colorChoices).html(
    '<option value="tomato">Tomato</option>' +
    '<option value="steelblue">Steel Blue</option>' +
    '<option value="dimgrey">Dim Grey</option>'
  );
} else {
  $(colorMenu).hide();
}
});

// Function to calculate total cost and append total
const calcCost = (cost) => {
  printCost += cost;
  total = 'Total: $' + printCost;
  totalSpan.textContent = '';
  if (printCost !== 0) {
    totalSpan.append(total);
    totalHTML.appendChild(totalSpan);
    activities.append(totalHTML);
  }
};

// Event listeners to add/subtract cost and disable overlapping sessions

mainConference.addEventListener('change', () => {
  if (mainConference.checked) {
    calcCost(200);
  } else {
    calcCost(-200);
  }
});

jsFrameworksW.addEventListener('change', () => {
  if (jsFrameworksW.checked) {
    calcCost(100);
    expressW.disabled = true;
    expressW.parentNode.className = 'disabled';
  } else {
    calcCost(-100);
    expressW.disabled = false;
    expressW.parentNode.className = '';
  }
});

jsLibrariesW.addEventListener('change', () => {
  if (jsLibrariesW.checked) {
    calcCost(100);
    nodeJSW.disabled = true;
    nodeJSW.parentNode.className = 'disabled';
  } else {
    calcCost(-100);
    nodeJSW.disabled = false;
    nodeJSW.parentNode.className = '';
  }
});

expressW.addEventListener('change', () => {
  if (expressW.checked) {
    calcCost(100);
    jsFrameworksW.disabled = true;
    jsFrameworksW.parentNode.className = 'disabled';
  } else {
    calcCost(-100);
    jsFrameworksW.disabled = false;
    jsFrameworksW.parentNode.className = '';
  }
});

nodeJSW.addEventListener('change', () => {
  if (nodeJSW.checked) {
    calcCost(100);
    jsLibrariesW.disabled = true;
    jsLibrariesW.parentNode.className = 'disabled';
  } else {
    calcCost(-100);
    jsLibrariesW.disabled = false;
    jsLibrariesW.parentNode.className = '';
  }
});

buildToolsW.addEventListener('change', () => {
  if (buildToolsW.checked) {
    calcCost(100);
  } else {
    calcCost(-100);
  }
});

npmW.addEventListener('change', () => {
  if (npmW.checked) {
    calcCost(100);
  } else {
    calcCost(-100);
  }
});

// By default hide Bitcoin and Paypal information

$(function() {
  paypal.style.display = 'none';
  bitcoin.style.display = 'none';
});

// Change shown payment information on selection

paymentType.addEventListener('change', () => {
  if (paymentType.value === 'credit-card') {
    creditCard.style.display = '';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }
  if (paymentType.value === 'paypal') {
    creditCard.style.display = 'none';
    paypal.style.display = '';
    bitcoin.style.display = 'none';
  }
  if (paymentType.value === 'bitcoin') {
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
    bitcoin.style.display = '';
  }
});

// Validate, and if valid, register
register.addEventListener('click', (e) => {
  let valid = nameNotBlank() && emailNotBlank() && emailValid() && activitySelected() && paymentValid();
  if (!valid) {
    e.preventDefault();
    validation();
  } else {
    alert('Thanks for registering!');
  }
});
