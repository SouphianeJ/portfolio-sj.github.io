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
    const text = "Fais une description de moi";
    const textElement = document.getElementById("prompt-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Ajuste la vitesse ici (en millisecondes)
        }
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
