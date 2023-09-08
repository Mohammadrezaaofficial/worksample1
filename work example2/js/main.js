/*Dropdown menu*/
const toggleBtn= document.querySelector('.toggle-btn')
const toggleBtnIcon= document.querySelector('.toggle-btn i')
const Dropdownmenu= document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
    Dropdownmenu.classList.toggle('open')
    const isOpen = Dropdownmenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
/* Popup login menu*/
document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup-login").style.display = "none";
})
document.getElementById("login-btn1").addEventListener("click",function(){
    document.querySelector('.popup-login').style.display = "flex";
})     