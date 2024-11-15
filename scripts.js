// Animation for the timeline items
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    // Observe each timeline item and add the animation when it's in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
//chat gpt style prompt
document.addEventListener("DOMContentLoaded", function() {
    const promptText = "Fais une description de moi !";
    const responseText = "Ingénieur pédagogique avec plus de 5 ans d’expérience, j’ai pu construire mon expertise pluridisciplinaire autour de la transformation numérique, la pédagogie et l'accompagnement au changement.\n J'analyse le travail des équipes pédagogiques pour optimiser leurs pratiques, en prenant en compte aussi bien les processus que les outils. Mon objectif est d’intégrer des solutions efficaces, pédagogiques ou techniques, pour faciliter toute la chaîne.";
    const promptElement = document.getElementById("prompt-text");
    const responseElement = document.getElementById("response-text");
    const responseBox = document.getElementById("response-box");
    const loadingDots = document.getElementById("loading-dots");
    let index = 0;

    function typeWriter() {
        if (index < promptText.length) {
            promptElement.innerHTML += promptText.charAt(index);
            index++;
            setTimeout(typeWriter, 125);
            setTimeout(showLoadingDots, 125);
        } else {
            // Show the response
            setTimeout(showResponseElement, 1000);
        }
    }

    function showLoadingDots() {
        responseBox.style.display = "block";
        loadingDots.style.display = "inline-block"; // Show loading dots
            
    }

    function showResponseElement() {

        // Hide the loading dots after 1.5 seconds and show the response
        setTimeout(function() {
            loadingDots.style.display = "none"; // Hide loading dots
            responseElement.style.display = "inline-block"; // Show the response text
            responseElement.textContent = responseText;
        }, 1500);
    }

    typeWriter();
});



// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Popup Modal
function openModal(modalId) {
    $('#' + modalId).modal('show');
}

// Obtenir les couleurs à partir des variables CSS
const rootStyles = getComputedStyle(document.documentElement);
const backgroundColorDefault = rootStyles.getPropertyValue("--secondary-light").trim();
const textColorDefault = rootStyles.getPropertyValue("--primary").trim();
const backgroundColorDark = rootStyles.getPropertyValue("--primary").trim();
const textColorLight = rootStyles.getPropertyValue("--secondary-light").trim();
const cardColorDefault = rootStyles.getPropertyValue("--light-green").trim();
const cardColorDark = rootStyles.getPropertyValue("--dark-corail").trim();


// Variables pour le contexte du canvas et les particules
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
const particles = [];
let animationFrame;

// Redimensionne le canvas pour remplir toute la section
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Fonction pour créer une particule
function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: (Math.random() - 0.5) * 2,
    speedY: Math.random() * -2 - 1,
    size: Math.random() * 2 + 1,
    opacity: Math.random()
  };
}

// Ajoute des particules au tableau
function addParticles() {
  for (let i = 0; i < 10; i++) {
    particles.push(createParticle());
  }
}

// Dessine les particules sur le canvas
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
    ctx.fill();

    // Mise à jour de la position de la particule
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Réinitialise la particule si elle dépasse les limites
    if (particle.y < 0 || particle.x < 0 || particle.x > canvas.width) {
      particles[index] = createParticle();
    }
  });
}

// Fonction d'animation pour les particules
function animateParticles() {
  drawParticles();
  animationFrame = requestAnimationFrame(animateParticles);
}


// Gère le scroll pour appliquer les effets de changement de couleur et d'activation des particules
window.onscroll = function () {
  const specialSection = document.getElementById("special-section");

  if (specialSection) {
    const rect = specialSection.getBoundingClientRect();

    // Point de déclenchement basé sur la hauteur de la fenêtre
    const triggerOffset = window.innerHeight / 6; // 1/3 de la hauteur de l'écran

    // Vérifie si la section spéciale est proche du centre ou du tiers de l'écran
    if (
      rect.top <= window.innerHeight / 2 + triggerOffset &&
      rect.bottom >= window.innerHeight / 2 //- triggerOffset
    ) {
      let sectionHeight = specialSection.offsetHeight - 2 * triggerOffset;
      let scrollPositionInSection = window.scrollY - specialSection.offsetTop - triggerOffset;
      let scrollPercent = Math.min(Math.max(scrollPositionInSection / sectionHeight, 0),1);

      // Applique l'effet de fond sombre et texte clair au body
      document.body.style.backgroundColor = `rgba(${hexToRgb(backgroundColorDark)})`;
      document.body.style.color = `rgb(${hexToRgb(textColorLight)})`;
      //et aux cards
      document.querySelectorAll("#projects .card").forEach((card) => {
        card.style.backgroundColor = cardColorDark;
      });

      // Démarre l'animation des particules si elle n'est pas déjà en cours
      if (!animationFrame) {
        animateParticles();
      }
    } else {
      // Réinitialise le style en dehors de la section spéciale
      resetStyles();
    }
  } else {
    // Réinitialise le style si la section spéciale n'existe pas
    resetStyles();
  }
};
// Fonction de conversion HEX en RGB pour utiliser rgba avec les couleurs CSS
function hexToRgb(hex) {
  let bigint = parseInt(hex.replace("#", ""), 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

// Fonction pour réinitialiser les styles
function resetStyles() {
  //reset body color
  document.body.style.backgroundColor = backgroundColorDefault;
  document.body.style.color = textColorDefault;
  //et reset cards
  document.querySelectorAll("#projects .card").forEach((card) => {
    card.style.backgroundColor = cardColorDefault;
  });
  cancelAnimationFrame(animationFrame);
  animationFrame = null;
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface les particules
}
// Initialiser quelques particules au démarrage
addParticles();

// Gère le scroll pour appliquer les effets de changement de couleur et d'activation des particules

