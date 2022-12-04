const hamburgerButton = document.querySelector('.hamburger');//('input[name=checkbox]');
const dropdownContainer = document.querySelector('.dropdown_menu');
const year = document.querySelector('#year');
const date = new Date();
const currentYear = date.getFullYear();
year.innerHTML = currentYear;

hamburgerButton.addEventListener('change', e => {
  if (e.target.checked) {
    dropdownContainer.classList.remove('hider');
    hamburgerButton.classList.toggle('is-active');
    dropdownContainer.classList.toggle('dropdown_menu-5');
    dropdownContainer.classList.toggle('show-dropdown');
  } else {
    dropdownContainer.classList.toggle('show-dropdown');
    hamburgerButton.classList.toggle('is-active');
    dropdownContainer.classList.toggle('dropdown_menu-5');
    setTimeout(() => {
      dropdownContainer.classList.add('hider');
    }, 800);
  }
})
