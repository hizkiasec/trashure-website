// ============================================
// TRASHURE - INTERACTIVE SCRIPTS
// Enhanced with smooth animations
// ============================================

// INTRO SCREEN
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0";
    
    setTimeout(() => {
      intro.style.display = "none";
      document.querySelector(".hero").classList.add("show");
    }, 800);
  }, 3200);
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.onclick = () => {
    nav.classList.toggle("show");
  };
}

// SMOOTH SCROLL
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// DOWNLOAD ALERT
function downloadApp() {
  // Create custom alert
  const alertBox = document.createElement("div");
  alertBox.innerHTML = "Aplikasi Trashure akan segera tersedia! \ud83c\udf89";
  alertBox.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    background: white;
    padding: 32px 44px;
    border-radius: 20px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.2);
    z-index: 10000;
    font-weight: 600;
    font-size: 16px;
    color: #0f172a;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  document.body.appendChild(alertBox);
  
  setTimeout(() => {
    alertBox.style.opacity = "1";
    alertBox.style.transform = "translate(-50%, -50%) scale(1)";
  }, 10);
  
  setTimeout(() => {
    alertBox.style.opacity = "0";
    alertBox.style.transform = "translate(-50%, -50%) scale(0.9)";
    setTimeout(() => alertBox.remove(), 300);
  }, 2500);
}

// NAVBAR SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
const speed = 200;
let counterStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/,/g, "");
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc).toLocaleString();
        setTimeout(animate, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    animate();
  });
}

// REWARD SYSTEM
let saldo = 0;

function earnMoney() {
  let reward = Math.floor(Math.random() * 5000) + 1000;
  saldo += reward;
  
  document.getElementById("money").innerText = "Rp " + saldo.toLocaleString();
  showRewardAnimation(reward);
}

// REWARD POPUP ANIMATION
function showRewardAnimation(amount) {
  const popup = document.createElement("div");
  popup.innerText = "+ Rp " + amount.toLocaleString();
  popup.style.cssText = `
    position: fixed;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 16px 40px rgba(16, 185, 129, 0.4);
    z-index: 9999;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  `;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.bottom = "140px";
  }, 50);

  setTimeout(() => {
    popup.style.opacity = "0";
    popup.style.bottom = "180px";
  }, 2000);

  setTimeout(() => {
    popup.remove();
  }, 2500);
}

// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("active");
      
      // Start counter animation when impact section is revealed
      if (el.classList.contains("impact") && !counterStarted) {
        counterStarted = true;
        animateCounters();
      }
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// PARALLAX HERO EFFECT (SUBTLE)
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    let offset = window.scrollY * 0.2;
    hero.style.transform = `translateY(${offset}px)`;
  }
});

// SMOOTH BUTTON HOVER EFFECT
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  });
});

// FEATURE CARDS STAGGER ANIMATION
const features = document.querySelectorAll(".feature");
features.forEach((card, i) => {
  card.style.animationDelay = `${i * 0.1}s`;
});

// STATS CARDS STAGGER ANIMATION
const stats = document.querySelectorAll(".stat");
stats.forEach((card, i) => {
  card.style.animationDelay = `${i * 0.15}s`;
});

// PREVENT DEFAULT ON MENU CLOSE WHEN CLICKING OUTSIDE
document.addEventListener("click", (e) => {
  if (nav && menuBtn) {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove("show");
    }
  }
});

// SMOOTH PAGE TRANSITIONS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// PERFORMANCE: Debounce scroll events
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(() => {
    // Scroll-based updates here are already handled above
  });
}, { passive: true });

