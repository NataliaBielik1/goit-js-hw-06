const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');
const lis = ingredients.map(i => {
  const li = document.createElement('li');
  li.innerText = i;
  li.classList.add('item');
  return li;
});

ul.append(...lis);
