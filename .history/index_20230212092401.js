
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

const iconClose = document.querySelectorA