/* ==========================================================================
   JAPANESE MINIMAL INTERACTIVE EFFECTS - 和風ミニマル効果
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Subtle fade-in animation for content
    function addGentleFadeIn() {
        const elements = document.querySelectorAll('.archive__item, .page__content, .sidebar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
    
    // Gentle typing effect for site title (more subtle than retro)
    function addSubtleTypingEffect() {
        const title = document.querySelector('.site-title');
        if (title && title.textContent.length > 0) {
            const originalText = title.textContent;
            title.textContent = '';
            title.style.borderRight = '2px solid var(--accent-coral)';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                title.textContent += originalText.charAt(i);
                i++;
                
                if (i >= originalText.length) {
                    clearInterval(typeInterval);
                    // Remove cursor after typing
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
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
    
    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .gentle-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gentle-hover:hover {
            transform: translateY(-2px);
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Start the Japanese experience
    initJapaneseEffects();
    
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