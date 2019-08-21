(function () {
 	  var repositoryFood = {};
    var app = (function (){
 	  var repositoryFood = {
  	    name: 'John'
 	  };
 	  return {
 	    username: repositoryFood.name
 	  };
 })();
console.log(repositoryFood); // undefined – can’t access this
})();

var personRepository = (function () {
  var persons = [];
  return {
    add: function(person) {
      persons.push(person);
    },
    getAll: function() {
      return persons;
    }
  };
})();
console.log(personRepository.getAll()); // []

personRepository.add({ name: 'Julia' });
console.log(personRepository.getAll()); // [ { name: 'Julia' } ]

var repositoryFood = [
  {
    receipe : 'Crepes',
    ingredients : {
      eggs: 1,
      milk : 75,
      butter : 20,
      flour : 100,
      sugar : 50
    },
    pricePerMeal : 0.80,
    typeOfDiet : 'vegetarian',
    nutritionalValues : {
      calories : 250,
      fat : 12,
      protein : 25,
      carbohydrates : 55
    },
    nutritionalDiet : 'balanced'
  },

  {
    receipe : 'Tomatoes and Feta Cheese',
    ingredients : {
      tomatoes: 2,
      feta : 100
    },
    pricePerMeal : 1.20,
    typeOfDiet : 'vegetarian',
    nutritionalValues : {
      calories : 264,
      fat : 21,
      protein : 14.4,
      carbohydrates : 4.2
    },
    nutritionalDiet : 'low-carb'
  },

  {
    receipe : 'Penne Bolognese',
    ingredients : {
      penne:  100,
      tomatoes : 2,
      oliveoil : 20,
      garlic : 10,
      onions : 1,
      salt : 1,
      groundbeef: 100
    },
    pricePerMeal : 2.00,
    typeOfDiet : 'omnivorian',
    nutritionalValues : {
      calories : 500,
      fat : 12,
      protein : 25,
      carbohydrates : 55
    },
    nutritionalDiet : 'balanced'
  },

  {
    receipe : 'Falafel',
    ingredients : {
      chickpeas:  100,
      tahini : 20,
      oliveoil : 20,
      garlic : 10,
      lemon : 1,
      salt : 1
    },
    pricePerMeal : 2.00,
    typeOfDiet : 'vegan',
    nutritionalValues : {
      calories : 500,
      fat : 12,
      protein : 25,
      carbohydrates : 55
    },
    nutritionalDiet : 'low-carb'
  },

  {
    receipe : 'Tea',
    ingredients : {
      water:  200
    },
    pricePerMeal : 0.30,
    typeOfDiet : 'vegan',
    nutritionalValues : {
      calories : 0,
      fat : 0,
      protein : 0,
      carbohydrates : 0
    },
    nutritionalDiet : 'low-carb'
  },
  {
    receipe : 'Chocoloate Chip Cookies',
    ingredients : {
      flour: 200,
      butter : 77,
      milk : 50,
      sugar : 20,
      chocolate : 70,
      bakingpower : 1
    },
    pricePerMeal : 0.30,
    typeOfDiet : 'vegetarian',
    nutritionalValues : {
      calories : 100,
      fat : 25,
      protein : 5,
      carbohydrates : 150
    },
    nutritionalDiet : 'balanced'
  }
];

for (var i = 0; i < repositoryFood.length; i++) {
  var resultToRender = '<a href="#xx" class="recipe-item" data-diet=' + repositoryFood[i].typeOfDiet + ' onclick="recipeDetails(' + i + ')">' + repositoryFood[i].receipe + '<br>'+ '</a>'
  document.getElementById('listRecipes').innerHTML += resultToRender;
}

function recipeDetails(i) {
    document.getElementById("xx").innerHTML = repositoryFood[i].receipe;
    document.getElementById("yy").innerHTML = repositoryFood[i].typeOfDiet;
    document.getElementById("zz").innerHTML = Object.entries(repositoryFood[i].nutritionalValues);
    document.getElementById("vv").innerHTML = repositoryFood[i].nutritionalDiet;
    document.getElementById("ww").innerHTML = Object.entries(repositoryFood[i].ingredients);
    document.getElementById("uu").innerHTML = (repositoryFood[i].pricePerMeal);
}

function showVegetarianOnly() {
  var allRecipes = document.querySelectorAll('.recipe-item');
  var vegetarianResults = document.querySelectorAll('[data-diet="vegetarian"]');
  allRecipes.forEach(recipe => {
    recipe.classList.add('hidden');
  })
  vegetarianResults.forEach(res => {
    res.classList.remove('hidden');
  });
}

function showOmnivorianOnly() {
  var allRecipes = document.querySelectorAll('.recipe-item');
  var omnivorianRecipes = document.querySelectorAll('[data-diet="omnivorian"]');
  allRecipes.forEach(recipe => {
    recipe.classList.add('hidden');
  })
  omnivorianRecipes.forEach(res => {
    res.classList.remove('hidden');
  });
}

function showVeganOnly() {
  var allRecipes = document.querySelectorAll('.recipe-item');
  var omnivorianRecipes = document.querySelectorAll('[data-diet="vegan"]');
  allRecipes.forEach(recipe => {
    recipe.classList.add('hidden');
  });
  omnivorianRecipes.forEach(res => {
    res.classList.remove('hidden');
  });
}

function showAll() {
  var allRecipes = document.querySelectorAll('.recipe-item');
  allRecipes.forEach(recipe => {
    recipe.classList.remove('hidden');
  })
}
