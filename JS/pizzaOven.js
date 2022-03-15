//Create a function called pizzaOven that returns a JS (pizza) Object:
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//Create two pizza with a specific toppings
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "Italian thin",
    "crunchy thin",
    "gluten free",
    "cheese burst"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "ranch",
    "blue cheese",
    "roasted garlic"
];

var cheeses = [
    "mozzarella cheese",
    "provolone cheese",
    "cheddar cheese",
    "swiss cheese",
    "gouda",
    "goat cheese",
    "gruyere",
    "parmesan",
    "ricotta"
];

var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "chicken",
    "onions",
    "peppers",
    "black olives",
    "spinach",
    "beef"
];

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
//Create a function to create a random pizza:
function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza());