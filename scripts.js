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
    const promptText = "Fais une description de moi, s'il te plaît";
    const responseText = "Ingénieur pédagogique avec plus de 5 ans d’expérience, j’ai pu construire mon expertise pluridisciplinaire autour de la transformation numérique, la pédagogie et l'accompagnement au changement. J'analyse le travail des équipes pédagogiques pour optimiser leurs pratiques, en prenant en compte aussi bien les processus que les outils. Mon objectif est d’intégrer des solutions efficaces, pédagogiques ou techniques, pour faciliter toute la chaîne.";
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
            setTimeout(showLoadingDots, 1500);
        } else {
            // Show the loading dots for 1.5 seconds after prompt text is fully written
            //setTimeout(showLoadingDots, 1500);
        }
    }

    function showLoadingDots() {
        responseBox.style.display = "block";
        loadingDots.style.display = "inline-block"; // Show loading dots

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
