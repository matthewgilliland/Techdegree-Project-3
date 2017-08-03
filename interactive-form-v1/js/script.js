/*jshint esversion: 6 */

// Variables - Elements
const name = document.getElementById('name');

const jobTitle = document.getElementById('title');
const otherTitle = document.getElementById('other-title');

const colorMenu = document.getElementById('colors-js-puns');
const colorChoices = document.getElementById('color');
const designChoice = document.getElementById('design');

const activities = document.querySelector('.activities');
const mainConference = document.querySelector("input[name='all']");
const jsFrameworksW = document.querySelector("input[name='js-frameworks']");
const jsLibrariesW = document.querySelector("input[name='js-libs']");
const expressW = document.querySelector("input[name='express']");
const nodeJSW = document.querySelector("input[name='node']");
const buildToolsW = document.querySelector("input[name='build-tools']");
const npmW = document.querySelector("input[name='npm']");

const totalHTML = document.createElement('div');
const totalSpan = document.createElement('span');
let total;
let printCost = 0;

// Automatically focus on first text field
$(function() {
  name.focus();
});

// Hide "Other" text field
$(function() {
  $(otherTitle).hide();
});

// If "Other" is selected in "Job Role," reveal text field
$(jobTitle).click(function() {
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
$(designChoice).click(function() {
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

//Event listeners to add/subtract cost and disable overlapping sessions

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
  } else {
    calcCost(-100);
  }
});

jsLibrariesW.addEventListener('change', () => {
  if (jsLibrariesW.checked) {
    calcCost(100);
  } else {
    calcCost(-100);
  }
});

expressW.addEventListener('change', () => {
  if (expressW.checked) {
    calcCost(100);
  } else {
    calcCost(-100);
  }
});

nodeJSW.addEventListener('change', () => {
  if (nodeJSW.checked) {
    calcCost(100);
  } else {
    calcCost(-100);
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
