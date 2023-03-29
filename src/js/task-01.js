const cats = document.querySelectorAll('li.item');

console.log(`Number of categories: ${cats.length}`);

cats.forEach(cat => {
    const heading = cat.querySelector('h2').textContent;
    const itemsCount = cat.querySelectorAll('li').length;
    console.log(`Category: ${heading}
Elements: ${itemsCount}`);
});
