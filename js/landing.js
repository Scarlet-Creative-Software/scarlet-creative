// hero.js

// Fade-in hero once loaded
window.addEventListener("load", () => {
    const bg = document.querySelector(".scarlet-hero__bg");
    if (bg) {
      bg.classList.add("scarlet-hero__bg--ready");
    }
  });
  
  // Smooth scroll to portfolio
  document
    .querySelector(".scarlet-hero__scroll")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("portfolio");
      if (!target) return;
  
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
  
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  
  // Ripple effect on click / tap
  const lake = document.getElementById("lake");
  
  if (lake) {
    lake.addEventListener("pointerdown", (e) => {
      // ignore right-clicks etc.
      if (e.button !== 0) return;
  
      // position relative to lake
      const rect = lake.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      createRipple(x, y);
    });
  
    // optional: gentle idle ripple now and then
    let idleTimer;
    const scheduleIdleRipple = () => {
      const delay = 4000 + Math.random() * 5000;
      idleTimer = setTimeout(() => {
        const rect = lake.getBoundingClientRect();
        const x = rect.width * (0.4 + Math.random() * 0.2);
        const y = rect.height * (0.55 + Math.random() * 0.15);
        createRipple(x, y);
        scheduleIdleRipple();
      }, delay);
    };
    scheduleIdleRipple();
  
    window.addEventListener("beforeunload", () => clearTimeout(idleTimer));
  }
  
  function createRipple(x, y) {
    const ripple = document.createElement("span");
    ripple.className = "scarlet-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
  
    lake.appendChild(ripple);
  
    ripple.addEventListener(
      "animationend",
      () => {
        ripple.remove();
      },
      { once: true }
    );
  }
  