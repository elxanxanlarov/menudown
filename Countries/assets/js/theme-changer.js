let themeChanger = document.querySelector(".header-theme-changer");

themeChanger.addEventListener("click", function () {
  themeChanger.offsetParent.classList.toggle("dark-theme");
  localStorage.setItem('mode',  themeChanger.offsetParent.classList)
});

if(localStorage.getItem('mode') !=''){
  themeChanger.offsetParent.classList.add(  localStorage.getItem('mode'))
}