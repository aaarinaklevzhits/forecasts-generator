const button = document.querySelector(".forecast-btn");
const containerForItems = document.querySelector(".forecasts");
const forecastItem = document.querySelector('#forecast-item');

function getRandom(min, max) {
    return Math.ceil((Math.random() * (max - min)) + min);
}

button.addEventListener('click', function() {
    function addNewForecastByTemplate(title, chance) {

        const newPrediction = forecastItem.content.cloneNode(true);
        newPrediction.querySelector('h3').textContent = title;
        newPrediction.querySelector('p').textContent = chance;

        return newPrediction;
    }

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

    const actualPrediction = document.querySelector("h1");
    actualPrediction.textContent = prediction;
    const actualProbability = document.querySelector("p");
    actualProbability.textContent = 'Вероятность:' + probability + '%';
    const newPrediction = addNewForecastByTemplate(prediction, 'Вероятность:' + probability + '%');
    containerForItems.prepend(newPrediction);
});


/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */