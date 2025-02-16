// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Controle do botão "Voltar ao Topo"
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('topoBtn');
    btn.style.display = window.scrollY > 500 ? 'block' : 'none';
  });
  
  document.getElementById('topoBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Atualiza automaticamente o ano no rodapé
  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Camylla Oliveira. Todos os direitos reservados.`;
  
  // Animação de revelação ao scroll para cards de ferramentas e projetos
  window.addEventListener('scroll', revealOnScroll);
  function revealOnScroll() {
    document.querySelectorAll('.ferramenta-card, .projeto-card').forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  // Inicializa a animação ao carregar a página
  revealOnScroll();
  
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('ativo');
  });