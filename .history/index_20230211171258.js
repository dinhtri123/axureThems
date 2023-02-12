const tab = document.querySelectorAll(".tabs");

for(let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', function() {
        tab[i].className = tab[i].className.replace('active', ' ');
    })
    tab[i]
    
}