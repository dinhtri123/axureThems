// const tabs = document.querySelectorAll(".tabs");
// const tabsContent = document.querySelectorAll(".tabsContent");
// function showTab(e, tabs) {

//   for (let i = 0; tabsContent.length; i++) {
//     tabsContent[i].style.display = "none";
//   }

//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].className = tabs[i].className.replace("active", " ");
//   }

//   document.getElementById(tabs).style.display = "flex";
//   e.currentTarget.className += " active";
// }

function showTab(tab) {
    console.log(tab)
  const tabs = document.querySelectorAll(".tabs");
  const tabsContent = document.querySelectorAll(".tabsContent");
  for (let i = 0; tabsContent.length; i++) {
    tabsContent[i].style.display = "none";
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", " ");
  }
  document.getElementById(cityName).style.display = "block";
  //   e.currentTarget.className += " active";
}
