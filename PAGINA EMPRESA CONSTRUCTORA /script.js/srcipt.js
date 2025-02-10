// Código JavaScript para Constructora XYZ
<script>
    // Menú móvil: Toggle del menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
    
    // Funcionalidad del acordeón en la sección de servicios
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        // Cerrar otros acordeones (opcional)
        accordionHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            otherHeader.parentElement.classList.remove('active');
          }
        });
      });
      // Permitir interacción con teclado
      header.addEventListener('keydown', (e) => {
        if(e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          header.click();
        }
      });
    });
    
    // Reveal Animation: Aparecer al hacer scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    reveals.forEach(el => {
      observer.observe(el);
    });
  </script>
</body>
</html>


// 1. Animación de desplazamiento suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del objetivo
        const targetElement = document.getElementById(targetId); // Selecciona el elemento objetivo

        if (targetElement) {
            // Desplazamiento suave
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Efecto de aparición en las secciones al hacer scroll
const sections = document.querySelectorAll('section'); // Selecciona todas las secciones

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Activa la animación cuando el 20% de la sección es visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añade la clase 'visible'
            observer.unobserve(entry.target); // Deja de observar después de la primera vez
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-in'); // Añade la clase inicial para la animación
    observer.observe(section); // Observa cada sección
});

// 3. Carga dinámica de la galería de proyectos (simulación de carga desde una API)
const galleryGrid = document.querySelector('.gallery-grid');

const projects = [
    { id: 1, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 1' },
    { id: 2, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 2' },
    { id: 3, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 3' },
    { id: 4, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 4' },
    { id: 5, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 5' },
    { id: 6, image: 'https://via.placeholder.com/300x200', alt: 'Proyecto 6' }
];

const loadGallery = () => {
    galleryGrid.innerHTML = ''; // Limpia la galería antes de cargar
    projects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="${project.image}" alt="${project.alt}">`;
        galleryGrid.appendChild(galleryItem);
    });
};

// Simula una carga asíncrona
setTimeout(loadGallery, 1000); // Carga la galería después de 1 segundo

// 4. Validación de formulario (si se agrega un formulario de contacto)
const contactForm = document.getElementById('contact-form'); // Asegúrate de agregar un formulario con este ID en el HTML

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Simula el envío del formulario
        console.log('Formulario enviado:', { name, email, message });
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset(); // Limpia el formulario
    });
}

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// 5. Cambio dinámico del video en la sección de video
const videoSection = document.querySelector('.video-section iframe');
const videoUrls = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ', // Video 1
    'https://www.youtube.com/embed/9bZkp7q19f0', // Video 2
    'https://www.youtube.com/embed/JGwWNGJdvx8'  // Video 3
];

let currentVideoIndex = 0;

const changeVideo = () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length; // Cambia al siguiente video
    videoSection.setAttribute('src', videoUrls[currentVideoIndex]);
};

// Cambia el video cada 10 segundos (simulación)
setInterval(changeVideo, 10000);

// 6. Efecto de paralaje en la sección Hero
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Efecto de paralaje
});

// 7. Botón de "Volver arriba"
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Estilos adicionales para el botón de "Volver arriba"
const style = document.createElement('style');
style.innerHTML = `
    .scroll-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #333;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        display: none;
        transition: background 0.3s ease;
    }
    .scroll-to-top:hover {
        background: #555;
    }
`;
document.head.appendChild(style);

