function openDrawer() {
    document.getElementById('drawer').style.left = '0';
    document.querySelector('.content').style.marginLeft = '250px';
}

function closeDrawer() {
    document.getElementById('drawer').style.left = '-250px';
    document.querySelector('.content').style.marginLeft = '0';
}