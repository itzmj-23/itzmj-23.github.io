/*==================== SHOW NAVBAR ====================*/
function toggleSidebar() {
    const sidebar = document.querySelectorAll(".sidebar");
    const toggle_icon = document.getElementsByClassName('navbar__toggle-icon')[0];
    // console.log(sidebar[0])

    if (sidebar[0] && toggle_icon.classList.contains('bx-menu')) {
        sidebar.forEach(a => a.style.display = "inline-block");
        toggle_icon.classList.remove("bx-menu");
        toggle_icon.classList.add("bx-x");
    } else {
        sidebar.forEach(a => a.style.display = "none");
        toggle_icon.classList.remove("bx-x");
        toggle_icon.classList.add("bx-menu");
    }
}

/*==================== LINK ACTIVE ====================*/
const link = document.querySelectorAll(".sidebar__link, .sidebar__dropdown-item")
const dropdown = document.querySelectorAll(".sidebar__dropdown");

function activeLink(){
    link.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
    var sidebar__dropdown = this.closest('.sidebar__dropdown');
    if (sidebar__dropdown) {
        dropdown.forEach(l => l.classList.remove('active'))
        sidebar__dropdown.classList.add('active')
        var parentLink = sidebar__dropdown.children[0]
        parentLink.classList.add('active')
    }
}

link.forEach(l => l.addEventListener('click', activeLink))