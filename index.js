const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;

  throw Error(
    `Please double check your class name, there is no ${selector} class`
  );
};

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName('city');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById(cityName).style.display = 'block';
}
