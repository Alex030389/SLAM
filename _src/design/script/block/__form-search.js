// //////////////////////////////////////// form-search
if(document.querySelector('.form-search')) {
  const formSearch = document.querySelector('.form-search'),
        searchControl = document.querySelector('.form-search__control'),
        searchBtnClear = document.querySelector('.form-search__btn-clear');

  formSearch.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(searchControl.value) {
      formSearch.submit();
    } else {
      searchControl.focus();
    }
  });

  searchBtnClear.addEventListener('click', () => {
    if(searchControl.value) {
      searchControl.value = '';
      searchControl.focus();
    };
  });
}
