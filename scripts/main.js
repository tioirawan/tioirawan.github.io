window.onload = () => {
  const particleColor = "#282828";

  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 1000 } },
      color: { value: particleColor },
      opacity: {
        value: 0.3,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: particleColor,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      onhover: { enable: false },
      onclick: { enable: false }
    },
    retina_detect: true
  });
};
