// ///////////////////////////////////////// checkbox
if(document.querySelector('[data-js="checkbox-label"]')) {
  const checkboxes = document.querySelectorAll('[data-js="checkbox-label"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (evt) => {
      setTimeout(() => {
        evt.target.previousElementSibling.blur();
      })
    })
  });
}
