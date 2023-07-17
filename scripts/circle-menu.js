document.getElementById('menu-button').addEventListener('click', function() {
    var menuItems = document.getElementById('menu-items');
    if (menuItems.style.display === "none") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
});

