var repositoryFood = [
  {receipe : 'Crepes',
  ingredients : {eggs: 1, milk : 75, butter : 20, flour : 100, sugar : 50},
  pricePerMeal : 0.80,
  typeOfDiet : 'vegetarian',
  nutrionalValues : {calories : 250, fat : 12, protein : 25, carbohydrates : 55},
  nutrionalDiet : 'balanced'},

  {receipe : 'Tomatoes and Feta Cheese',
  ingredients : {tomatoes: 2, feta : 100},
  pricePerMeal : 1.20,
  typeOfDiet : 'vegetarian',
  nutrionalValues : {calories : 264, fat : 21, protein : 14.4, carbohydrates : 4.2},
  nutrionalDiet : 'low-carb'},
  {receipe : 'Penne Bolognese',
  ingredients : {penne:  100, tomatoes : 2, oliveoil : 20, garlic : 10, onions : 1, salt : 1, groundbeef: 100},
  pricePerMeal : 2.00,
  typeOfDiet : 'omnivorian',
  nutrionalValues : {calories : 500, fat : 12, protein : 25, carbohydrates : 55},
  nutrionalDiet : 'balanced'},
  {receipe : 'Falafel',
  ingredients : {chickpeas:  100, tahini : 20, oliveoil : 20, garlic : 10, lemon : 1, salt : 1},
  pricePerMeal : 2.00,
  typeOfDiet : 'vegan',
  nutrionalValues : {calories : 500, fat : 12, protein : 25, carbohydrates : 55},
  nutrionalDiet : 'low-carb'},
  {receipe : 'Tea',
  ingredients : {water:  200},
  pricePerMeal : 0.30,
  typeOfDiet : 'vegan',
  nutrionalValues : {calories : 0, fat : 0, protein : 0, carbohydrates : 0},
  nutrionalDiet : 'low-carb'}
];

for (var i = 0; i < repositoryFood.length; i++) {
  document.write('<a href="receipeDetail.html">' + repositoryFood[i].receipe + '<br>'+ '</a>');
}

function vegetarianOnly() {
  for (var i = 0; i < repositoryFood.length; i++) {
    if (repositoryFood[i].typeOfDiet === 'vegetarian') {
    document.write('<a id="receipeTitel" href="receipeDetail.html">' + repositoryFood[i].receipe + '<br>'+ '</a>');
  }
 }
}

function omnivorianOnly() {
  for (var i = 0; i < repositoryFood.length; i++) {
    if (repositoryFood[i].typeOfDiet === 'omnivorian') {
    document.write('<a href="receipeDetail.html">' + repositoryFood[i].receipe + '<br>'+ '</a>');
  }
 }
}

function veganOnly() {
  for (var i = 0; i < repositoryFood.length; i++) {
    if (repositoryFood[i].typeOfDiet === 'vegan') {
    document.write('<a href="receipeDetail.html">' + repositoryFood[i].receipe + '<br>'+ '</a>');
  }
 }
}
