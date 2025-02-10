document.addEventListener('DOMContentLoaded', () => {
  // Registra ScrollTrigger per GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Animazione in ingresso per la sezione hero
  gsap.from(".hero-content", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out"
  });

  // Animazione delle card al scroll
  gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top center+=100"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Interazione hover dinamica sulle card per aggiornare variabili CSS personalizzate
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Animazione continua della Terra (immagine di sfondo in .earth)
  const earth = document.querySelector('.earth');
  if (earth) {
    gsap.to(earth, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "none"
    });
  }

  // (Opzionale) Animazione per aggiornare le barre dei grafici se si modificano dinamicamente
  gsap.utils.toArray('.bar').forEach(bar => {
    gsap.fromTo(bar, { width: 0 }, { width: bar.style.width, duration: 1.5, ease: "power2.out" });
  });
});