'use strict';

function Calculate(event) {
    event.preventDefault();
    
    document.getElementById('error').textContent = '';

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('error').textContent = 'Please fill in all fields.';
        return;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12) {
        document.getElementById('error').textContent = 'Please enter a valid date.';
        return;
    }

    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    
    if (inputDate > currentDate) {
        document.getElementById('error').textContent = 'The date is in the future.';
        return;
    }
    if (inputDate.getDate() !== day || inputDate.getMonth() + 1 !== month || inputDate.getFullYear() !== year) {
        document.getElementById('error').textContent = 'Invalid date.';
        return;
    }

    const ageInMilliseconds = currentDate - inputDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getFullYear() - 1970;
    const months = ageDate.getMonth();
    const days = ageDate.getDate() - 1;

    document.getElementById("yearDisplay").innerHTML = years;
    document.getElementById("monthDisplay").innerHTML = months;
    document.getElementById("dayDisplay").innerHTML = days;
};

document.getElementById("submit").addEventListener("click", (event) => Calculate(event));
