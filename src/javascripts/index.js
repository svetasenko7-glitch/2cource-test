burgerMenu ()
splitText ()
headerScroll()

// анимация бургерного меню
function burgerMenu() {
    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.menu');
    let header = document.querySelector('.header');
    let links = document.querySelectorAll('.menu__link');  // ← переименовал в links

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--open');
        menu.classList.toggle('menu--open');
        header.classList.toggle('header--menu');
        document.body.classList.toggle('page--locked');
    });

    links.forEach((link) => {  // ← теперь совпадает
        link.addEventListener('click', () => {
            burger.classList.remove('burger--open');  
            menu.classList.remove('menu--open');
            header.classList.remove('header--menu');
            document.body.classList.remove('page--locked');
        });
    });
}

// анимация букв у текста hero
function splitText() {
    let elements = document.querySelectorAll('.split');

    elements.forEach((el) => {
        let words = el.textContent.trim().split(/\s+/);  
        let html = '';
        let index = 0;
        let delay = 0;

        if (el.classList.contains('split--delay')) {
            delay = 10;
        }

        words.forEach((word) => {
            html += '<span class="split__word">';

            if (el.classList.contains('split--delay')) {
                for (let i = 0; i < word.length; i++) {
                    html += `<span class="split__item" style="transition-delay: ${delay + index * 45}ms">${word[i]}</span>`;
                    index++;
                }
            } else {
                html += `<span class="split__item" style="transition-delay: ${delay + index * 45}ms">${word}</span>`;
                index++;
            }

            html += '</span>';
        });

        el.innerHTML = html;
    });
}

// анимация состояний верхнего меню, возникновение и исчезание
function headerScroll() {
    let header = document.querySelector('.header')
    let lastScroll = 0

    window.addEventListener('scroll', () =>{
        let scroll = window.scrollY

        if (scroll > 20) {
            header.classList.add('header--scrolled')
        }
        else{
            header.classList.remove('header--scrolled')
        }

        if (scroll > 160 && scroll > lastScroll) {
            header.classList.add('header--hidden')
        }
        else{
            header.classList.remove('header--hidden')
        }
        lastScroll = scroll
    })
}