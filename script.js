const button = document.querySelector(".forecast-btn");
const containerForItems = document.querySelector(".forecasts")

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
button.addEventListener('click', addNewForecastByTemplate);

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
const numberOfPrediction = getRandom(1, 3);

let prediction = '';
let probability = getRandom(0, 100);
switch (numberOfPrediction) {
    case 1:
        prediction = "Тебя ждут хорошие новости!";
        break;
    case 2:
        prediction = "Тебя ждет неожиданный сюрприз!";
        break;
    case 3:
        prediction = "Тебя ждет приятная встреча!";
        break;
    default:
        prediction = "Попробуй позже :(";
        break;
}
/* Подставляй текст нового предсказания в .current-forecast h1 */
const actualPrediction = document.querySelector("h1");
actualPrediction.textContent = prediction;
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
const actualProbability = document.querySelector("p");
actualProbability.textContent = 'Вероятность:' + probability + '%';

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
function getRandom(min, max) {
    return Math.ceil((Math.random() * (max - min)) + min);
}

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const forecastItem = document.querySelector('#forecast-item');

function addNewForecastByTemplate(title, chance) {

    const newPrediction = forecastItem.content.cloneMode(true);
    newPrediction.querySelector('h3').textContent = title;
    newPrediction.querySelector('p').textContent = chance;

    return newPrediction;
}

const newPrediction = addNewForecastByTemplate(prediction, 'Вероятность:' + probability + '%');

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
containerForItems.prepend(newPrediction);