const menu = document.querySelector('.menu');
const navBar = document.querySelector('.navBar');

console.log(menu);
menu.addEventListener('click', ()=>{
  console.log(menu);
    navBar.classList.toggle('menu-toggle');
   
})