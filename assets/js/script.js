// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu on link click
const navLinksAll = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                const itemCategory = item.getAttribute('data-category');
                if (itemCategory === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Set initial portfolio item styles
portfolioItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous validation
        contactForm.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
        
        let isValid = true;
        
        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim().length < 2) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.add('is-valid');
        }
        
        // Validate Mobile
        const mobile = document.getElementById('mobile');
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile.value.trim())) {
            mobile.classList.add('is-invalid');
            isValid = false;
        } else {
            mobile.classList.add('is-valid');
        }
        
        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.add('is-valid');
        }
        
        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim().length < 10) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.add('is-valid');
        }
        
        // If form is valid, show success message
        if (isValid) {
            // Simulate form submission
            showMessage('success', 'Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
            contactForm.querySelectorAll('.form-control').forEach(input => {
                input.classList.remove('is-valid');
            });
            
            // In a real application, you would send the form data to a server here
            // Example: 
            // fetch('/api/contact', {
            //     method: 'POST',
            //     body: new FormData(contactForm)
            // })
        }
    });
}

// Enquiry Modal Form Validation
const enquiryForm = document.getElementById('enquiryForm');
const modalFormMessage = document.getElementById('modalFormMessage');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous validation
        enquiryForm.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
        
        let isValid = true;
        
        // Validate Modal Name
        const modalName = document.getElementById('modalName');
        if (modalName.value.trim().length < 2) {
            modalName.classList.add('is-invalid');
            isValid = false;
        } else {
            modalName.classList.add('is-valid');
        }
        
        // Validate Modal Mobile
        const modalMobile = document.getElementById('modalMobile');
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(modalMobile.value.trim())) {
            modalMobile.classList.add('is-invalid');
            isValid = false;
        } else {
            modalMobile.classList.add('is-valid');
        }
        
        // Validate Modal Email
        const modalEmail = document.getElementById('modalEmail');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(modalEmail.value.trim())) {
            modalEmail.classList.add('is-invalid');
            isValid = false;
        } else {
            modalEmail.classList.add('is-valid');
        }
        
        // Validate Modal Message
        const modalMessage = document.getElementById('modalMessage');
        if (modalMessage.value.trim().length < 10) {
            modalMessage.classList.add('is-invalid');
            isValid = false;
        } else {
            modalMessage.classList.add('is-valid');
        }
        
        // If form is valid, show success message
        if (isValid) {
            // Simulate form submission
            showModalMessage('success', 'Thank you! We have received your enquiry and will contact you shortly.');
            enquiryForm.reset();
            enquiryForm.querySelectorAll('.form-control').forEach(input => {
                input.classList.remove('is-valid');
            });
            
            // Close modal after 2 seconds
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('enquiryModal'));
                if (modal) {
                    modal.hide();
                }
                modalFormMessage.style.display = 'none';
            }, 2000);
        }
    });
}

// Show message function for contact form
function showMessage(type, text) {
    formMessage.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
    formMessage.textContent = text;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Show message function for modal form
function showModalMessage(type, text) {
    modalFormMessage.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
    modalFormMessage.textContent = text;
    modalFormMessage.style.display = 'block';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#enquiryModal') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Testimonial carousel auto-rotation
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        wrap: true,
        touch: true
    });
}

// Add glowing effect to buttons on mouse move
const glowButtons = document.querySelectorAll('.pulse-btn');
glowButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Number counter animation for stats (if you add stats section)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Lazy loading for images (when you add real images)
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console message
console.log('%cSocial Siragugal', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cWebsite designed and developed with ❤️', 'color: #7c3aed; font-size: 14px;');
console.log('%cFor inquiries: info@socialsiragugal.com', 'color: #a0aec0; font-size: 12px;');

// Easter egg - Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize tooltips if Bootstrap tooltips are used
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Add glow effect on scroll for service cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const glowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .glass-card, .portfolio-card, .blog-card').forEach(card => {
    glowObserver.observe(card);
});

// Preload critical fonts
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.as = 'font';
fontPreload.crossOrigin = 'anonymous';
document.head.appendChild(fontPreload);

// Performance optimization - debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ---------- PARTICLES ---------- */
const particles = [];
const totalParticles = 90;

class Particle{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*2 + 1;
        this.vx = (Math.random()-0.5)*0.4;
        this.vy = (Math.random()-0.5)*0.4;
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0) this.x = canvas.width;
        if(this.x > canvas.width) this.x = 0;
        if(this.y < 0) this.y = canvas.height;
        if(this.y > canvas.height) this.y = 0;
    }

    draw(){
        ctx.fillStyle = "rgba(61, 3, 3, 0.5)"; /* dark animation */
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

/* create particles */
for(let i=0;i<totalParticles;i++){
    particles.push(new Particle());
}

/* connect lines */
function connect(){
    for(let a=0;a<particles.length;a++){
        for(let b=a;b<particles.length;b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let dist = dx*dx + dy*dy;

            if(dist < 11000){
                ctx.strokeStyle="rgba(216, 16, 16, 0.15)";
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x,particles[a].y);
                ctx.lineTo(particles[b].x,particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.move();
        p.draw();
    });

    connect();
    requestAnimationFrame(animate);
}

animate();


const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X in card
    const y = e.clientY - rect.top;  // mouse Y in card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10; // max 10deg

    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});

let audioCtx;
  let clickBuffer;

  async function initAudio() {
    if (audioCtx) return;

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const response = await fetch("assets/sounds/tap.wav");
    const arrayBuffer = await response.arrayBuffer();
    clickBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  }

  function playClickSound() {
    if (!audioCtx || !clickBuffer) return;

    const source = audioCtx.createBufferSource();
    source.buffer = clickBuffer;
    source.connect(audioCtx.destination);
    source.start(0);
  }

  // Unlock audio on FIRST touch/click
  document.addEventListener("pointerdown", async () => {
    await initAudio();
  }, { once: true });

  // Play sound on actual clicks
  document.addEventListener("click", (e) => {
    const clickable = e.target.closest(
      "a, button, .btn, .nav-link, .dropdown-item"
    );
    if (clickable) {
      playClickSound();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".mobile-bottom-nav a");
  const sections = document.querySelectorAll("section[id]");

  function setActive(link) {
    navLinks.forEach(a => a.classList.remove("active"));
    link.classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      setActive(link);
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});

const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.3 });

fadeSections.forEach(section => observer.observe(section));

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});

(function () {
  const track = document.getElementById('logoTrack');
  const prevBtn = document.getElementById('logoPrev');
  const nextBtn = document.getElementById('logoNext');
  const dotsWrap = document.getElementById('logoDots');
  const perView = 3;
  const totalSlides = track.children.length;
  const maxIndex = totalSlides - perView;
  let current = 0;

  // Build dots
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('button');
    dot.className = 'logo-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, maxIndex));
    const cardWidth = track.children[0].offsetWidth + 16; // 16 = gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === maxIndex;
    dotsWrap.querySelectorAll('.logo-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  goTo(0);
})();

function goTo(idx) {
  const perView = window.innerWidth <= 768 ? 2 : 3; // ← 2 on mobile, 3 on desktop
  const maxIdx = totalSlides - perView;
  current = Math.max(0, Math.min(idx, maxIdx));
  const gap = window.innerWidth <= 768 ? 8 : 15;
  const cardWidth = track.children[0].offsetWidth + gap;
  track.style.transform = `translateX(-${current * cardWidth}px)`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === maxIdx;
  dotsWrap.querySelectorAll('.logo-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}