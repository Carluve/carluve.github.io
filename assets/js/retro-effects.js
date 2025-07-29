/* ==========================================================================
   RETRO 90s INTERACTIVE EFFECTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Add retro cursor trail effect
    function createCursorTrail() {
        const trail = [];
        const trailLength = 8;
        
        document.addEventListener('mousemove', function(e) {
            trail.push({x: e.clientX, y: e.clientY});
            
            if (trail.length > trailLength) {
                trail.shift();
            }
            
            // Remove existing trail elements
            document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
            
            // Create new trail elements
            trail.forEach((point, index) => {
                const trailElement = document.createElement('div');
                trailElement.className = 'cursor-trail';
                trailElement.style.cssText = `
                    position: fixed;
                    left: ${point.x}px;
                    top: ${point.y}px;
                    width: ${8 - index}px;
                    height: ${8 - index}px;
                    background: radial-gradient(circle, #3B82F6, transparent);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    opacity: ${(trailLength - index) / trailLength};
                    transform: translate(-50%, -50%);
                `;
                document.body.appendChild(trailElement);
                
                // Remove after animation
                setTimeout(() => {
                    if (trailElement.parentNode) {
                        trailElement.remove();
                    }
                }, 100);
            });
        });
    }
    
    // Add typing effect to main title
    function addTypingEffect() {
        const title = document.querySelector('.site-title');
        if (title) {
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                title.textContent += originalText.charAt(i);
                i++;
                
                if (i >= originalText.length) {
                    clearInterval(typeInterval);
                    // Add blinking cursor
                    const cursor = document.createElement('span');
                    cursor.textContent = '_';
                    cursor.style.animation = 'blink 1s infinite';
                    cursor.style.color = '#3B82F6';
                    title.appendChild(cursor);
                }
            }, 150);
        }
    }
    
    // Add glitch effect to random elements
    function addRandomGlitch() {
        const elements = document.querySelectorAll('h2, h3, .archive__item-title');
        
        setInterval(() => {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            if (randomElement && Math.random() < 0.1) { // 10% chance
                randomElement.style.animation = 'glitch 0.3s';
                setTimeout(() => {
                    randomElement.style.animation = '';
                }, 300);
            }
        }, 3000);
    }
    
    // Add retro loading bars to images
    function addImageLoadingEffect() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (!img.complete) {
                const loader = document.createElement('div');
                loader.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 60px;
                    height: 4px;
                    background: #1F2937;
                    border: 1px solid #22D3EE;
                    border-radius: 2px;
                    overflow: hidden;
                `;
                
                const progress = document.createElement('div');
                progress.style.cssText = `
                    height: 100%;
                    width: 0%;
                    background: linear-gradient(90deg, #22D3EE, #3B82F6);
                    animation: retroLoad 2s ease-in-out infinite;
                `;
                
                loader.appendChild(progress);
                img.parentNode.style.position = 'relative';
                img.parentNode.appendChild(loader);
                
                img.addEventListener('load', () => {
                    loader.remove();
                });
            }
        });
    }
    
    // Add matrix rain effect to background (subtle)
    function addMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.05;
        `;
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#3B82F6';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 100);
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Add retro sound effects (optional - commented out by default)
    function addSoundEffects() {
        // Uncomment to enable sound effects
        /*
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        function playBeep(frequency = 800, duration = 100) {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'square';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration / 1000);
        }
        
        // Add click sounds to buttons
        document.querySelectorAll('a, button, .btn').forEach(element => {
            element.addEventListener('click', () => playBeep(1200, 50));
        });
        
        // Add hover sounds to navigation
        document.querySelectorAll('.site-nav a').forEach(element => {
            element.addEventListener('mouseenter', () => playBeep(600, 30));
        });
        */
    }
    
    // Initialize all effects
    function initRetroEffects() {
        // Only add cursor trail on desktop
        if (window.innerWidth > 768) {
            createCursorTrail();
            addMatrixRain();
        }
        
        addTypingEffect();
        addRandomGlitch();
        addImageLoadingEffect();
        // addSoundEffects(); // Uncomment to enable sounds
    }
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        @keyframes retroLoad {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
        }
        
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Start the retro experience
    initRetroEffects();
    
    // Add a subtle retro startup message
    console.log(`
    ╔══════════════════════════════════════╗
    ║        RETRO 90s MODE ACTIVATED      ║
    ║                                      ║
    ║  Welcome to the future of the past!  ║
    ║         Enjoy the nostalgia          ║
    ╚══════════════════════════════════════╝
    `);
});