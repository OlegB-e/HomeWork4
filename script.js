//Исспользуем данные с прошлого задания.

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

const ingredientPrices = {
    meat: 2,
    dough: 1,
    onions: 0.5,
    potato: 1,
    pepperoni: 1.5,
    tomatoes: 1,
    cheese: 2
}

for (let dish of dishes) {
    let costOfPreparation = 0;
    for (let ingredient of dish.ingredients) {
        costOfPreparation += ingredientPrices[ingredient];
    }
    dish.costOfPreparation = costOfPreparation;
}

console.log(dishes);

//1.Создаём массив для хранения блюд(строк) в меню.
const menuItems = [];

//2.Создаём строки с инф. о каждом блюде и добaвляем их в созданный массив menuItem.
for (let dish of dishes) {
    let dishInfo = `Блюдо: ${dish.name}, Ингридиенты: ${dish.ingredients.join(", ")}, Стоимость приготовления: $${dish.costOfPreparation.toFixed(2)}`;
}

//3.Создаем строку которая содержит в себе все строки меню с переносом строк.
const globalMenu = menuItems.join(`\n`);

//4.Выводим полученное меню.
console.log(globalMenu);
