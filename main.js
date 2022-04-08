// query selector variables go here 👇
var letsCookButton = document.querySelector('.item-list-button');
var cookpotImage = document.querySelector('.cookpot-img');
var mealTitle = document.querySelector('.meal-title')
var mealName = document.querySelector('.item-box-meal-name')

// event listeners go here 👇
letsCookButton.addEventListener('click',outputSelected);

// Global Variables Go here 👇
var sides = ['Baked Potato','Seasonal Veggies','Soup Of The Day']
var mainDishes = ['Steak','Grilled Chicken','Grilled Tofu','Meatloaf']
var desserts = ['Cheesecake','Apple Pie','Cookie']

// functions and event handlers go here 👇
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function outputSelected(){
    if (document.getElementById('side').checked){
        displayDish(sides[getRandomIndex(sides)])
    } else if (document.getElementById('main-dish').checked) {
        displayDish(mainDishes[getRandomIndex(mainDishes)])
    } else if (document.getElementById('dessert').checked) {
        displayDish(desserts[getRandomIndex(desserts)])
    } else if (document.getElementById('entire-meal').checked) {
        displayMeal(sides[getRandomIndex(sides)], mainDishes[getRandomIndex(mainDishes)], desserts[getRandomIndex(desserts)]);
    }
}

function displayDish(food){
    cookpotImage.classList.add("hidden");
    mealTitle.classList.remove("hidden");
    mealName.innerHTML = "<p class='meal-title'>You should make:</p>"
    mealName.innerHTML += '<p class = food-name >'+food+'!</p>'
}

function displayMeal(side, mainDish, dessert){
    cookpotImage.classList.add("hidden");
    mealTitle.classList.remove("hidden");
    mealName.innerHTML = "<p class='meal-title'>You should make:</p>"
    mealName.innerHTML += '<p class = food-name >' + mainDish +' with a side of '+side+' and '+dessert+' for dessert!';
}
