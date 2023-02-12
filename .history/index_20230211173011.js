function showTab(e, tabs) {
  const tabs = document.querySelectorAll(".tabs");
  const tabsContent = document.querySelectorAll(".tabsContent");

  for (let i = 0; tabsContent.length; i++) {
    tabsContent[i].style.display = "none";
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tab[i].className.replace("active", " ");
  }

  document.getElementById(tab).style.display = "flex";
  e.currentTarget.className += " active";
}

// function showTab(e, tab){
//     console.log(e.currenTarget)
// }
