const categoriesList = document.querySelector('#categories');
const quantityСategories = categoriesList.children;
console.log(`В списке ${quantityСategories.length} категории`);

[...quantityСategories].forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
