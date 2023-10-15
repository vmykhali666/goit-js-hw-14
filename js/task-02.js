const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function InsertIngredients(ingredientsList) {
  let container = document.querySelector('#ingredients');
  let fragment = document.createDocumentFragment();

  ingredientsList.forEach(element => {
    let htmlElement = document.createElement('li');
    htmlElement.appendChild(document.createTextNode(element));
    htmlElement.classList.add("item");
    fragment.appendChild(htmlElement);
  });

  container.appendChild(fragment);
}

InsertIngredients(ingredients);