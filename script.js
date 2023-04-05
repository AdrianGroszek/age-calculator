//inputs
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

//outputs
const daysOutput = document.querySelector('.days');
const monthsOutput = document.querySelector('.months');
const yearsOutput = document.querySelector('.years');

const btnCheck = document.querySelector('.check-btn');

const wrongInputInfo1 = document.querySelector('.wrong-input1');
const wrongInputInfo2 = document.querySelector('.wrong-input2');
const wrongInputInfo3 = document.querySelector('.wrong-input3');

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let personYear;
let personMonth;
let personDay;

const ageCalculation = function () {
	personYear = year - yearInput.value;
	personMonth = month - monthInput.value;
	personDay = day - dayInput.value;

	if (
		monthInput.value == 2 &&
		((yearInput.value % 4 === 0 && yearInput.value % 100 !== 0) ||
			yearInput.value % 400 === 0)
	) {
		if (personDay < 0) {
			personMonth -= 1;
			personDay += 29;
		}
	} else if (monthInput.value == 2) {
		if (personDay < 0) {
			personMonth -= 1;
			personDay += 28;
		}
	} else if (
		monthInput.value == 1 ||
		monthInput.value == 3 ||
		monthInput.value == 5 ||
		monthInput.value == 7 ||
		monthInput.value == 8 ||
		monthInput.value == 10 ||
		monthInput.value == 12
	) {
		if (personDay < 0) {
			personMonth -= 1;
			personDay += 31;
		}
	} else if (
		monthInput.value == 4 ||
		monthInput.value == 6 ||
		monthInput.value == 9 ||
		monthInput.value == 11
	) {
		if (personDay < 0) {
			personMonth -= 1;
			personDay += 30;
		}
	}

	if (personMonth < 0) {
		personYear -= 1;
		personMonth += 12;
	}
};

const checkForm = function () {
	if (
		dayInput.value < 1 ||
		dayInput.value > 31 ||
		(dayInput.value > 29 && monthInput.value == 2)
	) {
		wrongInputInfo1.classList.remove('hidden');
	} else {
		wrongInputInfo1.classList.add('hidden');
	}
	if (monthInput.value < 1 || monthInput.value > 12) {
		wrongInputInfo2.classList.remove('hidden');
	} else {
		wrongInputInfo2.classList.add('hidden');
	}
	if (yearInput.value > year || yearInput.value < 1) {
		wrongInputInfo3.classList.remove('hidden');
	} else {
		wrongInputInfo3.classList.add('hidden');
	}
};

btnCheck.addEventListener('click', function () {
	ageCalculation();
	checkForm();
	if (
		wrongInputInfo1.classList.contains('hidden') &&
		wrongInputInfo2.classList.contains('hidden') &&
		wrongInputInfo3.classList.contains('hidden')
	) {
		yearsOutput.textContent = personYear;
		monthsOutput.textContent = personMonth;
		daysOutput.textContent = personDay;
	} else {
		yearsOutput.textContent = '--';
		monthsOutput.textContent = '--';
		daysOutput.textContent = '--';
	}
});
