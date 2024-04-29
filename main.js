function themeToggle() {
  let element = document.body;
  element.classList.toggle("theme-light");
  element.classList.toggle("theme-dark");

  let theme = document.body.classList.contains("theme-dark") ? "theme-dark" : "theme-light";
  localStorage.setItem("theme", theme);
}

window.onload = function() {
  let theme = localStorage.getItem("theme");
  if (theme) {
      document.body.classList.add(theme);
  }
};
