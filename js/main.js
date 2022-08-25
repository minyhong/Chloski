const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth/3;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth/3;
    })
})

console.log(connected)

function classToggle() {
    const navs = ducument.querySelectorAll('navbar-items')

    navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
}

document.querySelector('navcar-link-toggle').addEventListener('click', classToggle)