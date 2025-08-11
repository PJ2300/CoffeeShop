// Filter Funktion
document.querySelectorAll(".filter-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".post").forEach(post => {
            post.style.display = (filter === "all" || post.classList.contains(filter)) ? "block" : "none";
        });
    });
});

// Sternebewertung
document.querySelectorAll(".rating").forEach(ratingDiv => {
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.innerHTML = "★";
        star.addEventListener("click", () => {
            ratingDiv.setAttribute("data-rating", i);
            updateStars(ratingDiv);
        });
        ratingDiv.appendChild(star);
    }
});
function updateStars(ratingDiv) {
    const rating = ratingDiv.getAttribute("data-rating");
    ratingDiv.querySelectorAll("span").forEach((star, index) => {
        star.style.opacity = index < rating ? "1" : "0.3";
    });
}

// Scroll Story Animation
const storySteps = document.querySelectorAll(".story-step");
window.addEventListener("scroll", () => {
    storySteps.forEach(step => {
        const rect = step.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            step.classList.add("visible");
        }
    });

    // Back to top button anzeigen
    document.getElementById("backToTop").style.display = window.scrollY > 200 ? "block" : "none";
});

// Back to Top
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
