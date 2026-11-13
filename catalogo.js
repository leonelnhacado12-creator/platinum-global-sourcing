const filters = document.querySelector('.catalog-filters');
const products = document.querySelectorAll('.product[data-category]');

filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  const category = selected.dataset.filter;
  for (const product of products) {
    product.hidden = category !== 'todos' && product.dataset.category !== category;
  }
});
