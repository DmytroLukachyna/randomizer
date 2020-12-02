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
    // Stuff
    document.querySelector('.random__result').textContent = ';)';
    // document.querySelector('.random__result').textContent = getRandomIntFromTicks();
});

function getRandomIntFromFields(from, to) {
    from = parseInt(from);
    to = parseInt(to);
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getRandomIntFromTicks() {
    // var count = $('.random__number-tick').filter(':checked').size(),
    //     ara = [],
    //     r = 0,
    //     i = 0;

    // $('.include_number').each(function() {
    //     var $this = $(this);
    //     if ($this.is(':checked')) {
    //         ara[i] = $this.val();
    //         i++;
    //     }
    // });

    // r = ara[getRandomInt(1, count) - 1];
    // return r;
}