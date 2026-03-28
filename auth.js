// ============================================
// TRASHURE - AUTHENTICATION SCRIPTS
// ============================================

// LOGIN FORM HANDLER
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simple validation
    if (email && password) {
      showSuccessMessage("Login berhasil! \ud83c\udf89");
      
      // Redirect to home after 1.5 seconds
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      showErrorMessage("Email dan password harus diisi!");
    }
  });
}

// REGISTER FORM HANDLER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simple validation
    if (name && email && password) {
      if (password.length < 6) {
        showErrorMessage("Password minimal 6 karakter!");
        return;
      }
      
      showSuccessMessage("Registrasi berhasil! \ud83c\udf89");
      
      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } else {
      showErrorMessage("Semua field harus diisi!");
    }
  });
}

// SUCCESS MESSAGE
function showSuccessMessage(message) {
  const msgBox = document.createElement("div");
  msgBox.innerHTML = message;
  msgBox.style.cssText = `
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 18px 32px;
    border-radius: 16px;
    box-shadow: 0 16px 40px rgba(16, 185, 129, 0.3);
    z-index: 10000;
    font-weight: 600;
    font-size: 15px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  document.body.appendChild(msgBox);
  
  setTimeout(() => {
    msgBox.style.opacity = "1";
    msgBox.style.transform = "translateX(-50%) translateY(0)";
  }, 10);
  
  setTimeout(() => {
    msgBox.style.opacity = "0";
    msgBox.style.transform = "translateX(-50%) translateY(-20px)";
    setTimeout(() => msgBox.remove(), 400);
  }, 3000);
}

// ERROR MESSAGE
function showErrorMessage(message) {
  const msgBox = document.createElement("div");
  msgBox.innerHTML = message;
  msgBox.style.cssText = `
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 18px 32px;
    border-radius: 16px;
    box-shadow: 0 16px 40px rgba(239, 68, 68, 0.3);
    z-index: 10000;
    font-weight: 600;
    font-size: 15px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  
  document.body.appendChild(msgBox);
  
  setTimeout(() => {
    msgBox.style.opacity = "1";
    msgBox.style.transform = "translateX(-50%) translateY(0)";
  }, 10);
  
  setTimeout(() => {
    msgBox.style.opacity = "0";
    msgBox.style.transform = "translateX(-50%) translateY(-20px)";
    setTimeout(() => msgBox.remove(), 400);
  }, 3000);
}

// INPUT FOCUS ANIMATION
const inputs = document.querySelectorAll("input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.parentElement.classList.add("focused");
  });
  
  input.addEventListener("blur", () => {
    if (!input.value) {
      input.parentElement.classList.remove("focused");
    }
  });
});

// ENTER KEY SUBMIT
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (loginForm) loginForm.dispatchEvent(new Event("submit"));
    if (registerForm) registerForm.dispatchEvent(new Event("submit"));
  }
});
