document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic Search ---
    const keywordInput = document.getElementById('topic-keyword');
    const mentorCards = document.querySelectorAll('.mentor-card');

    if (keywordInput) {
        keywordInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();

            mentorCards.forEach(card => {
                const textContent = card.innerText.toLowerCase();
                const skillTags = card.getAttribute('data-skill') || "";

                if (textContent.includes(term) || skillTags.includes(term)) {
                    card.style.display = "block"; 
                } else {
                    card.style.display = "none"; 
                }
            });
        });
    }

    // --- 2. Request Form Handling ---
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = requestForm.querySelector('input[type="text"]');
            alert(`Thanks ${nameInput.value}! Your request has been sent to the Software Engineering mentorship team.`);
            requestForm.reset();
        });
    }

    // --- 3. Become Mentor Form Handling ---
    const mentorRegForm = document.getElementById('mentor-register-form');
    if (mentorRegForm) {
        mentorRegForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Welcome to the team! We will verify your academic status and contact you shortly.");
            mentorRegForm.reset();
        });
    }

    // --- 4. Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "75px";
                navLinks.style.right = "0";
                navLinks.style.background = "#111"; 
                navLinks.style.width = "100%";
                navLinks.style.padding = "20px";
                navLinks.style.zIndex = "100";
            }
        });
    }
});

function contactMentor(mentorName) {
    const messageField = document.querySelector('#request-mentorship input[placeholder="Topic (e.g. Project Help)"]');
    if (messageField) {
        messageField.value = `Help needed from ${mentorName}`;
        document.getElementById('request-mentorship').scrollIntoView({ behavior: 'smooth' });
        messageField.style.borderColor = '#11998e';
        setTimeout(() => messageField.style.borderColor = '#ddd', 2000);
    }
}
