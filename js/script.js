document.addEventListener('DOMContentLoaded', function() {

    // --- Мобильное меню ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Закрытие меню при клике на ссылку (для одностраничников)
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Добавляем небольшую задержку, чтобы пользователь успел увидеть нажатие
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 150);
            });
        });
        // Закрытие меню при клике вне его области (опционально)
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // --- Простой Лайтбокс для сертификатов ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const certLinks = document.querySelectorAll('.cert-link');

    if (lightbox && lightboxImg && lightboxClose && certLinks.length > 0) {
        certLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = link.getAttribute('data-src');
                if (imgSrc) {
                    lightboxImg.setAttribute('src', imgSrc);
                    lightbox.classList.remove('hidden');
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightboxImg.setAttribute('src', ''); // Очищаем src при закрытии
        };

        lightboxClose.addEventListener('click', closeLightbox);

        // Закрытие по клику на фон
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Закрытие по нажатию Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }

    // --- (Опционально) Плавная прокрутка для всех якорных ссылок (если CSS не справляется везде) ---
    // Обычно `html { scroll-behavior: smooth; }` достаточно
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */

    // --- (Опционально) Код для AOS или Intersection Observer для анимации при скролле ---
    // Пример с AOS (нужно подключить библиотеку AOS)
    // AOS.init({ duration: 600, once: true });

});