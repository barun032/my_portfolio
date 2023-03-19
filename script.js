let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabs) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabs).classList.add("active-tab");
}
let logo = document.querySelector('.b-logo');

// --------fixed nav bar -----------
let navBar = document.getElementById('nav-bar');
window.addEventListener('scroll', function () {
    console.log("scrolling....");

    if (this.window.pageYOffset >= 50) {
        navBar.classList.add('sticyNavBar');
        logo.style.color = "#fff";
    }
    else {
        navBar.classList.remove('sticyNavBar');
        logo.style.color = "#ff004f"
    }
});

// ------Navbar-----
let sideMenu = document.getElementById('side-menu');

function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}