/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const containerForItem = document.querySelector(".forecasts")
const button = document.querySelector(".forecast-btn");

button.addEventListener('click', ());

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const forecastItem = document.querySelector('#forecast-item');

function addNewForecastByTemplate(title, chance) {

    const newPrediction = forecastItem.content.cloneMode(true);
    newPrediction.querySelector('h3').textContent = title;
    newPrediction.querySelector('p').textContent = chance;

    return newPrediction;
}

const firstPredictionItem = addNewForecastByTemplate('Тебя ждет хороший день!', getRandomInt(0, 100));
containerForItem.append(predictionItem);

const secondPredictionItem = addNewForecastByTemplate('У тебя все получится!', getRandomInt(0, 100));
containerForItem.append(predictionItem);

const thirdPredictionItem = addNewForecastByTemplate('Все будет хорошо!', getRandomInt(0, 100));
containerForItem.append(predictionItem);