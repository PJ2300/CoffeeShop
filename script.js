document.addEventListener("DOMContentLoaded", () => {
    // Dummy Blog Posts
    const posts = [
        {
            title: "Der perfekte Espresso",
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
            content: "Feine Crema, intensiver Geschmack – so gelingt er!"
        },
        {
            title: "Latte Art für Anfänger",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            content: "Herz, Rosetta oder Tulpe – probier's aus!"
        }
    ];

    const postsContainer = document.getElementById("posts");
    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(div);
    });

    // Scroll Animation
    const fadeElems = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElems.forEach(el => observer.observe(el));

    // Login Funktion (Dummy)
    const loginForm = document.getElementById("loginForm");
    const loginMsg = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            loginMsg.textContent = `Willkommen, ${username}! 🎉`;
            loginMsg.style.color = "green";
            loginForm.reset();
        } else {
            loginMsg.textContent = "Bitte alle Felder ausfüllen!";
            loginMsg.style.color = "red";
        }
    });
});
