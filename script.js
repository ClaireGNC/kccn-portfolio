document.addEventListener("DOMContentLoaded", function() {
    // Load navbar
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar file not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the navbar:', error);
        });

    // Load contact section into placeholder
    fetch('contact.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Contact file not found");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contact-placeholder').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the contact:', error);
        });

    // Load footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer file not found");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
});

// Handle anchor navigation
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
