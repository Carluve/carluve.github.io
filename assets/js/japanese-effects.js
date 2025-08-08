/* ==========================================================================
   JAPANESE MINIMAL INTERACTIVE EFFECTS - 和風ミニマル効果
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced fade-in animation with staggered timing
    function addGentleFadeIn() {
        const elements = document.querySelectorAll('.archive__item, .page__content, .sidebar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.classList.add('fade-in-complete');
                    }, index * 100); // Staggered animation
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger earlier
        });
        
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            observer.observe(el);
        });
    }
    
    // Subtle hover effects for interactive elements
    function addHoverEffects() {
        const buttons = document.querySelectorAll('.btn, .author__urls a');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Enhanced typing effect with breathing animation
    function addSubtleTypingEffect() {
        const title = document.querySelector('.site-title');
        if (title && title.textContent.length > 0) {
            const originalText = title.textContent;
            title.textContent = '';
            
            // Add breathing cursor
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.color = 'var(--accent-coral)';
            cursor.style.animation = 'breathe 1.5s ease-in-out infinite';
            title.appendChild(cursor);
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    title.insertBefore(document.createTextNode(originalText.charAt(i)), cursor);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    // Fade out cursor
                    setTimeout(() => {
                        cursor.style.opacity = '0';
                        cursor.style.transition = 'opacity 1s ease';
                        setTimeout(() => cursor.remove(), 1000);
                    }, 2000);
                }
            }, 80);
        }
    }
    
    // Smooth scroll behavior for Japanese aesthetics
    function addSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Add subtle parallax effect to background elements
    function addSubtleParallax() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.02;
                sidebar.style.transform = `translateY(${rate}px)`;
            });
        }
    }
    
    // Japanese-inspired seasonal color changes (subtle)
    function addSeasonalColors() {
        const now = new Date();
        const month = now.getMonth();
        const root = document.documentElement;
        
        // Spring (March-May): Cherry blossom emphasis
        if (month >= 2 && month <= 4) {
            root.style.setProperty('--accent-primary', '#ffcdd2');
        }
        // Summer (June-August): Fresh green emphasis
        else if (month >= 5 && month <= 7) {
            root.style.setProperty('--accent-primary', '#c8e6c9');
        }
        // Autumn (September-November): Warm colors
        else if (month >= 8 && month <= 10) {
            root.style.setProperty('--accent-primary', '#ffe0b2');
        }
        // Winter (December-February): Cool blues
        else {
            root.style.setProperty('--accent-primary', '#e1f5fe');
        }
    }
    
    // Add gentle loading animation for images
    function addImageLoadingEffect() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (!img.complete) {
                img.style.opacity = '0';
                img.style.filter = 'blur(5px)';
                img.style.transition = 'opacity 0.6s ease, filter 0.6s ease';
                
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                    this.style.filter = 'blur(0)';
                });
            }
        });
    }
    
    // Add subtle focus indicators for accessibility
    function addAccessibilityEnhancements() {
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--accent-coral)';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
    
    // Initialize all Japanese effects
    function initJapaneseEffects() {
        addGentleFadeIn();
        addHoverEffects();
        addSubtleTypingEffect();
        addSmoothScrolling();
        addImageLoadingEffect();
        addAccessibilityEnhancements();
        
        // Only add parallax on desktop
        if (window.innerWidth > 768) {
            addSubtleParallax();
        }
        
        // Add seasonal colors
        addSeasonalColors();
    }
    
    // Enhanced CSS with advanced Japanese animations and dark mode fixes
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                       background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                       border-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        @keyframes breathe {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.95); }
        }
        
        @keyframes gentle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
        }
        
        @keyframes zen-glow {
            0%, 100% { box-shadow: 0 2px 8px rgba(129, 199, 132, 0.3); }
            50% { box-shadow: 0 4px 16px rgba(129, 199, 132, 0.5); }
        }
        
        .fade-in-complete {
            animation: gentle-float 8s ease-in-out infinite;
        }
        
        .author__avatar img:hover {
            animation: zen-glow 2s ease-in-out;
        }
        
        /* Enhanced reading progress indicator */
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-coral), var(--accent-sage));
            z-index: 1000;
            transition: width 0.3s ease;
            box-shadow: 0 0 10px rgba(255, 138, 101, 0.3);
        }
        
        /* Dark mode specific fixes */
        [data-theme="dark"] .reading-progress {
            box-shadow: 0 0 10px rgba(255, 112, 67, 0.5);
        }
        
        /* Enhanced focus indicators */
        *:focus {
            outline: 2px solid var(--accent-coral) !important;
            outline-offset: 2px !important;
            border-radius: 4px !important;
        }
        
        /* Smooth theme transition */
        html {
            transition: background-color 0.5s ease, color 0.5s ease;
        }
        
        /* Japanese-style selection */
        ::selection {
            background: var(--accent-coral);
            color: white;
        }
        
        ::-moz-selection {
            background: var(--accent-coral);
            color: white;
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Enhanced reading progress indicator
    function addReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = Math.min((winScroll / height) * 100, 100);
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Add theme transition effects
    function addThemeTransitions() {
        const themeToggle = document.querySelector('[data-theme-toggle]');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 500);
            });
        }
    }
    
    // Add Japanese-style notifications
    function createNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-card);
            border: var(--border-medium);
            border-left: 4px solid var(--accent-${type === 'success' ? 'sage' : 'coral'});
            border-radius: 8px;
            padding: 1rem 1.5rem;
            box-shadow: var(--shadow-medium);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-family: 'Noto Sans JP', sans-serif;
            color: var(--text-primary);
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Start the enhanced Japanese experience
    initJapaneseEffects();
    addReadingProgress();
    addThemeTransitions();
    
    // Welcome notification
    setTimeout(() => {
        createNotification('Welcome to the Japanese minimal experience! 🌸', 'success');
    }, 1000);
    
    // Add a subtle Japanese startup message
    console.log(`
    ┌─────────────────────────────────────┐
    │        和風ミニマル - Japanese Minimal        │
    │                                     │
    │     Welcome to serene simplicity    │
    │            静寂なシンプルさへようこそ            │
    └─────────────────────────────────────┘
    `);
});