const navbtn = document.querySelector('.mobile .nav-menu .menu-button');
const navbtnText = document.querySelector('.menu-button-text');
const mobileNav = document.querySelector('.mobile-nav');
const remainder = document.querySelector('.remainder-menu');
let open = false;

const openMenu = () => {
    if(open){
        mobileNav.classList.add('d-none');
        navbtn.style.borderRight = '1px solid white';
        open = false;
        navbtnText.innerHTML = '<i class="fas fa-bars"></i> MENU'
    } else {
        mobileNav.classList.remove('d-none');
        navbtn.style.borderRight = '0';
        open = true;
        navbtnText.innerHTML = '<i class="fas fa-times"></i> MENU'
    }
}

navbtn.addEventListener('click', () => {
    openMenu();
});
remainder.addEventListener('click', () => {
    openMenu();
});


