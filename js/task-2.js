// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

// -----для практики------
const titleEl = document.createElement('h1');
// -------------------------------------------------------------
// titleEl.fontSize = 16;  -  почему не меняет размер заголовка?
// -------------------------------------------------------------
titleEl.textContent = 'Рецепт томатного супа с грибами';

console.dir(titleEl);
// -----------------------
const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    return listEl;
  });
};

const listElements = createIngredientsList(ingredients);
listIngredients.append(titleEl, ...listElements);
