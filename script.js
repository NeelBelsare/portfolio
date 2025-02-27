// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Loading Animation
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // Initialize Particles.js for background effects
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#00f3ff", "#ff00ff", "#0073ff"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00f3ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Arrow functionality
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            // Scroll to the next section
            const currentPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const sections = document.querySelectorAll('.section');
            
            for (let section of sections) {
                const sectionTop = section.offsetTop;
                
                if (sectionTop > currentPosition + 100) {
                    window.scrollTo({
                        top: sectionTop,
                        behavior: 'smooth'
                    });
                    break;
                }
            }
        });
        
        // Hide/show scroll arrow based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                scrollArrow.style.transform = 'rotate(180deg)';
            } else {
                scrollArrow.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Animate skill bars
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };

    // Animate tech stack icons
    const animateTechIcons = () => {
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('active');
            }, 100 * index);
        });
    };

    // Project card flip animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        // Add hover effect for non-touch devices
        card.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                card.classList.add('hover');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                card.classList.remove('hover');
            }
        });
    });

    // Floating elements animation
    const animateFloatingElements = () => {
        const elements = document.querySelectorAll('.floating-element');
        elements.forEach(element => {
            // Random movement amount
            const moveX = Math.random() * 10 - 5;
            const moveY = Math.random() * 10 - 5;
            const rotation = Math.random() * 10 - 5;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`;
            
            setTimeout(() => {
                element.style.transition = 'transform 3s ease-in-out';
                element.style.transform = 'translate(0, 0) rotate(0deg)';
            }, 3000);
        });
    };

    // Set interval for floating elements animation
    setInterval(animateFloatingElements, 6000);
    
    // Glitch text effect for name
    const glitchName = document.querySelector('.glitch-name');
    if (glitchName) {
        setInterval(() => {
            glitchName.classList.add('glitching');
            setTimeout(() => {
                glitchName.classList.remove('glitching');
            }, 200);
        }, 5000);
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Basic validation
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // This would be replaced with actual form submission logic
            setTimeout(() => {
                alert('Message sent successfully!');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }, 1500);
        });
    }

    // Intersection Observer for section animations
    const observeSections = () => {
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    
                    // Trigger specific animations based on section
                    if (entry.target.id === 'about') {
                        animateSkills();
                        animateTechIcons();
                    }
                }
            });
        }, { threshold: 0.2 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    };
    
    // Initialize the section observer
    observeSections();

    // Create cyberpunk grid effect
    const createCyberpunkGrid = () => {
        const grid = document.querySelector('.cyberpunk-grid');
        if (!grid) return;
        
        // Clear existing grid
        grid.innerHTML = '';
        
        // Create grid lines
        const linesCount = 20;
        for (let i = 0; i < linesCount; i++) {
            const horizontalLine = document.createElement('div');
            horizontalLine.classList.add('grid-line', 'horizontal');
            horizontalLine.style.top = `${(i / linesCount) * 100}%`;
            
            const verticalLine = document.createElement('div');
            verticalLine.classList.add('grid-line', 'vertical');
            verticalLine.style.left = `${(i / linesCount) * 100}%`;
            
            grid.appendChild(horizontalLine);
            grid.appendChild(verticalLine);
        }
    };
    
    // Initialize the cyberpunk grid
    createCyberpunkGrid();
    
    // Handle window resize events
    window.addEventListener('resize', () => {
        // Recalculate grid on resize
        createCyberpunkGrid();
    });

    // Initialize Three.js background effect for contact section
    const initThreeJsBackground = () => {
        if (typeof THREE === 'undefined') return;
        
        const contactSection = document.querySelector('.contact-section');
        if (!contactSection) return;
        
        // Create scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        
        // Add renderer to page
        const threeContainer = document.createElement('div');
        threeContainer.classList.add('three-container');
        threeContainer.appendChild(renderer.domElement);
        contactSection.insertBefore(threeContainer, contactSection.firstChild);
        
        // Create geometry
        const geometry = new THREE.IcosahedronGeometry(5, 0);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00f3ff,
            wireframe: true
        });
        
        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);
        
        camera.position.z = 15;
        
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            icosahedron.rotation.x += 0.005;
            icosahedron.rotation.y += 0.005;
            
            renderer.render(scene, camera);
        };
        
        animate();
        
        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };
    
    // Initialize Three.js background
    initThreeJsBackground();
});