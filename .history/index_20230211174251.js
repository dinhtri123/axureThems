

const tabs = document.querySelectorAll(".tabs");
const tabsContent = document.querySelectorAll(".tabsContent");
function showTab(content) {
  console.log(tabsContent)
  for (let i = 0; tabsContent.length; i++) {
    tabsContent[i].style.display = "none";
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", " ");
  }
  document.getElementById(content).style.display = "flex";
    // e.currentTarget.className += " active";
}
