const mobile_menu_btn = document.querySelector('.mobile_menu_btn');
const mobile_menu = document.querySelector('.mobile_menu');
const mobile_menu_nav = document.querySelector('.mobile_menu_nav');
const close_menu = document.getElementById('close_menu');
const nav_elements = document.querySelectorAll('.nav_el');

mobile_menu_btn.addEventListener('click', () => {
    mobile_menu.classList.remove('hidden')
    mobile_menu_nav.classList.remove('-left-full')
    mobile_menu_nav.classList.add('left-0')
})

close_menu.addEventListener('click', () => {
    mobile_menu.classList.add('hidden')
    mobile_menu_nav.classList.add('-left-full')
    mobile_menu_nav.classList.remove('left-0')
})

nav_elements.forEach(el => {
    el.addEventListener('click', () => {
        mobile_menu.classList.add('hidden')
        mobile_menu_nav.classList.add('-left-full')
        mobile_menu_nav.classList.remove('left-0')
    })
})