const trimString = (string, length) => {
  if(string.length > length) {
    const newString = string.substr(0, length);
    return `${newString} [...]`;
  }
  return string;
};

if(document.querySelector('.card__desc')) {
  const cardsDesc = document.querySelectorAll('.card__desc');

  cardsDesc.forEach((desc) => {
    desc.innerHTML = trimString(desc.innerHTML, 100);
  })
}
