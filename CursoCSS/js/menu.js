const navul = document.querySelector(".nav_ul-menu");
document.querySelector(".nav_menu").addEventListener("click", (e)=> {
	navul.classList.add("nav_ul-menu-show"); 
})


document.querySelector(".nav_close").addEventListener("click", (e) => {
	navul.classList.remove("nav_ul-menu-show"); 
})