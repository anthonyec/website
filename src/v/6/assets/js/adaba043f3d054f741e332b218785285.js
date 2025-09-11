const darkModeButton = document.querySelector('.js-dark-mode');
const themes = ['light', 'overcast', 'dark'];
const lastTheme = localStorage.getItem('lastTheme');

let currentTheme = lastTheme ? lastTheme : themes[0];

function setTheme(theme) {
  document.querySelector('html').setAttribute('data-theme', currentTheme);

  document.querySelector('.js-icon-dark').style.display = 'none';
  document.querySelector('.js-icon-light').style.display = 'none';
  document.querySelector('.js-icon-overcast').style.display = 'none';
  document.querySelector('.js-icon-' + currentTheme).style.display = 'block';
}

darkModeButton.addEventListener('click', () => {
  const currentThemeIndex = themes.indexOf(currentTheme);
  const nextThemeIndex = currentThemeIndex + 1;

  if (nextThemeIndex > themes.length - 1) {
    currentTheme = themes[0];
  } else {
    currentTheme = themes[nextThemeIndex];
  }

  setTheme(currentTheme);
  localStorage.setItem('lastTheme', currentTheme);
});

setTheme(currentTheme);

document.querySelector('.js-dark-mode').classList.remove('theme-toggle--no-js');
