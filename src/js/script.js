'use strict';

document.querySelector('.button_toggle').addEventListener("click", () => {
    document.querySelectorAll('.random__wrapper').forEach(e => {
        e.classList.toggle('random__wrapper_active');
    });
});

document.querySelector('.random__button-1').addEventListener("click", () => {
    let startNumber = +document.querySelector('.random__range-start').value,
        endNumber = +document.querySelector('.random__range-end').value,
        number = getRandomIntFromFields(startNumber, endNumber);
    document.querySelector('.random__result').textContent = number;
});

document.querySelector('.random__button-2').addEventListener("click", () => {
    document.querySelector('.random__result').textContent = getRandomIntFromTicks();
});

function getRandomIntFromFields(from, to) {
    from = parseInt(from);
    to = parseInt(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getRandomIntFromTicks() {
    let count = [].slice.call(document.querySelectorAll(".random__number-tick"))
        .filter(function(e) { return e.checked; }).length,
        arrayChecked = [],
        result = 0,
        i = 0;
    document.querySelectorAll(".random__number-tick").forEach(e => {
        if (e.checked == true) {
            arrayChecked[i] = e.value;
            i++;
        }
    });
    result = arrayChecked[getRandomIntFromFields(1, count) - 1];
    return result;
}