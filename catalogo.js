const filters = [...document.querySelectorAll('[data-filter]')];
const products = document.querySelectorAll('[data-category]');

function selectCategory() {
  const category = decodeURIComponent(location.hash.slice(1));
  const selected = filters.find(button => button.dataset.filter === category) ?? filters[0];

  for (const button of filters) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  for (const product of products) {
    product.hidden = selected.dataset.filter !== 'todos' &&
      product.dataset.category !== selected.dataset.filter;
  }
}

for (const button of filters) {
  button.addEventListener('click', () => {
    history.replaceState(null, '', '#' + encodeURIComponent(button.dataset.filter));
    selectCategory();
  });
}

window.addEventListener('hashchange', selectCategory);
selectCategory();
