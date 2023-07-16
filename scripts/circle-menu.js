document.getElementById('menu-button').addEventListener('click', function() {
    var menuItems = document.getElementById('menu-items');
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
    } else {
        menuItems.classList.add('hidden');
    }
});
