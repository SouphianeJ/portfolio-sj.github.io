document.addEventListener('DOMContentLoaded', () => {
    const gateways = document.querySelectorAll('.gateway');
    const terminal = document.getElementById('terminal');
    
    // Gestion des thèmes
    gateways.forEach(btn => {
        btn.addEventListener('click', () => {
            document.documentElement.style.setProperty('--clip-path', 'circle(0% at 50% 50%)');
            setTimeout(() => {
                window.location.href = `/${btn.dataset.theme}.html`;
            }, 1000);
        });
        
        btn.addEventListener('mousemove', (e) => {
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });
    
    // Simulation terminal
    const commands = [
        '> souphiane --skills --format=json',
        '{\n "compétences": ["Python", "VBA", "DevOps"],\n "disponibilité": "🟢 En mission"\n}',
        '> portfolio --version',
        'v2.3.1 - Brutalist Edition'
    ];
    
    let index = 0;
    setInterval(() => {
        terminal.querySelector('.line').textContent = commands[index];
        index = (index + 1) % commands.length;
    }, 3000);
    
    // Effet glitch aléatoire
    setInterval(() => {
        if(Math.random() > 0.8) {
            document.documentElement.style.setProperty('--glitch-offset', `${Math.random() * 10}px`);
        }
    }, 100);
});


     /* setInterval(() => {
        if(Math.random() > 0.8) {
          document.documentElement.style.setProperty('--glitch-offset', `${Math.random() * 10}px`);
        }
      }, 100);*/