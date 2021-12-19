"use strict"

window.addEventListener('DOMContentLoaded', () => {

    const questionList = document.querySelectorAll('.question'),
          answer = document.querySelectorAll('p.answer'),
          boxes = document.querySelectorAll('.checkbox'),
          labels = document.querySelectorAll('label');

    function showAnswer(i) {
        answer[i].classList.toggle('active');
    };
    
    boxes.forEach((box, i) => {
        box.addEventListener('click', (event) => {
            answer[i].classList.toggle('active');
            labels[i].classList.toggle('activeLabel');
        })
    });

});