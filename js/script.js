var mixer = mixitup('.product__box', {
    load: {
        filter: ".plants"
    }
});

new Swiper('.reviews-comment',{
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
});

// ===========BURGER=============

const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

const body = document.body; 

if (menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })  
}
// ===================================