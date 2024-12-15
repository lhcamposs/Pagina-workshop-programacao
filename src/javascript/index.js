// Função para o menu hambúrguer responsivo
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Evento de clique no menu hambúrguer
  burger.addEventListener("click", () => {
    // Alterna a classe para ativar/desativar o menu
    nav.classList.toggle("nav-active");

    // Animação dos links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Animação do ícone do menu
    burger.classList.toggle("toggle");
  });

  // Fechar o menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
      navLinks.forEach((item) => (item.style.animation = "")); // Remove animação residual
    });
  });
}

// Função para rolagem suave
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Inicialização
function init() {
  navSlide();
  smoothScroll();
}

// Executa a inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", init);
