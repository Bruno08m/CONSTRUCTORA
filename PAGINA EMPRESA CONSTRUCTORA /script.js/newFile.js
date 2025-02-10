<script>
  // Menú móvil: Toggle de la navegación
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  
  hamburger.addEventListener('click', () => {navUl.classList.toggle('show')};
  });

  // Cerrar menú al hacer clic en un enlace (en dispositivos móviles)
  document.querySelectorAll('nav ul li a').forEach(link => {link.addEventListener('click', () => {
    if (navUl.classList.contains('show')) {
      navUl.classList.remove('show');
    }
  })};
  });

  // Funcionalidad del acordeón en la sección Servicios
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => { }
  const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => { }
  const openItem = document.querySelector('.accordion-item.active');
  toggleAccordion(item);
  if (openItem && openItem !== item) {toggleAccordion(openItem)};
      }
    });
    // Permitir activación con teclado (Enter o Espacio)
    header.addEventListener('keydown', (e) => { }
  if(e.key === 'Enter' || e.key === ' '){e.preventDefault()};
  header.click();
      }
    });
  });

  function toggleAccordion(item) { }
  const content = item.querySelector('.accordion-content');
  if(item.classList.contains('active')) {item.classList.remove('active')};
  item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
  content.style.maxHeight = null;
    } else {item.classList.add('active')};
  item.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
  content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  // Intersection Observer para animaciones "reveal" al hacer scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  })};
  }, {threshold}: 0.2 });
  
  reveals.forEach(r => revealObserver.observe(r));
</script>;
