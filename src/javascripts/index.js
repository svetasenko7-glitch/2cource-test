burgerMenu ()
splitText ()

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