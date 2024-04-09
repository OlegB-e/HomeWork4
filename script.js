//Исспользуем данные с прошлого задания.
//1.Вывводим все четные числа до 10 с помощью цикла for.
for (let i = 2; i <= 10; i += 2) {
    console.log (i);
}

//2.Создаем бесконечнный цикл и прерываем его на 5-ой итерации.
let count = 0; 

while (true) {
    console.log("Итерация: + count");
    count++;

    if (count === 5) {
        console.log("Прерываем цикл на 5-ой итерации.");
        break;
    }
}

//3.Создаем массив блюд.
const dishes = [
    {
        name: "Buzza",
        ingredients: ['dough', 'meat', 'onions']
    },

    {
        name: "Pies",
        ingredients: ['dough', 'meat', 'onions', 'potato'],
    },

    {
        name: "Pizza",
        ingredients: ['dough', 'pepperoni', 'tomatoes', 'cheese']
    }
];

//Объект хранящий стоимость ингридиентов.
const ingredientPrices = {
    meat: 2,
    dough: 1,
    onions: 0.5,
    potato: 1,
    pepperoni: 1.5,
    tomatoes: 1,
    cheese: 2
}

// Вычисление стоимости приготовления для каждого блюда
for (let dish of dishes) {
    let costOfPreparation = 0;
    for (let ingredient of dish.ingredients) {
        // Добавляем стоимость каждого ингредиента к общей стоимости приготовления
        costOfPreparation += ingredientPrices[ingredient];
    }
    // Записываем стоимость приготовления в объект блюда
    dish.costOfPreparation = costOfPreparation;
}

console.log(dishes);

//Создаём массив для хранения блюд(строк) в меню.
const menuItems = [];

//Создаём строки с инф. о каждом блюде и добaвляем их в созданный массив menuItem.
for (let dish of dishes) {
    let dishInfo = `Блюдо: ${dish.name}, Ингридиенты: ${dish.ingredients.join(", ")}, Стоимость приготовления: $${dish.costOfPreparation.toFixed(2)}`;
}

//Создаем строку которая содержит в себе все строки меню с переносом строк.
const globalMenu = menuItems.join(`\n`);

//Выводим полученное меню.
console.log(globalMenu);
