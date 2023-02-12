
const tabs = document.querySelectorAll(".tabs");
const tabsContent = document.querySelectorAll(".tabsContent");
function showTab(e, content) {
  console.log(tabsContent)
  for (let i = 0;i < tabsContent.length; i++) {
    tabsContent[i].style.display = "none";
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", " ");
  }
  document.getElementById(content).style.display = "flex";
    e.target.className += " active";
}

const iconClose = document.querySelector(".iconClose");
const iconMenu = document.querySelector(".iconMenu");
const menu = document.querySelector(".menu")
iconMenu.addEventListener('click', function(){
    menu.style.transform = 'translateX(0%)'
})