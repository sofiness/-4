const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);


function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

trafficLightEl.addEventListener('click', makeYellow);


function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeRed);
var currentColor = null;

    function changeColor(newColor) {
        // Сбрасываем цвет для всех кругов
        document.getElementById('redLight').className = 'Light';
        document.getElementById('yellowLight').className = 'Light';
        document.getElementById('greenLight').className = 'Light';

        // Устанавливаем цвет для выбранного круга
        document.getElementById(newColor + 'Light').className = 'Light ' + newColor;

        // Обновляем текущий цвет
        currentColor = newColor;
    }