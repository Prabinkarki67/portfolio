// Select the toggle button, body, nav, and all <a> elements
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const nav = document.querySelector("nav");
const links = document.querySelectorAll("a"); // Get all <a> tags

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    if (body.style.backgroundColor === "white") {
        // Switch to dark theme
        body.style.backgroundColor = "black";
        body.style.color = "white";

        nav.style.backgroundColor = "black";
        nav.style.color = "white";

        // Apply styles to each <a> tag
        links.forEach(link => {
            link.style.backgroundColor = "black";
            link.style.color = "white";
        });

        toggleButton.style.color = "white";
        toggleButton.style.borderColor = "white";
    } else {
        // Switch to light theme
        body.style.backgroundColor = "white";
        body.style.color = "black";

        nav.style.backgroundColor = "white";
        nav.style.color = "black";

        // Apply styles to each <a> tag
        links.forEach(link => {
            link.style.backgroundColor = "white";
            link.style.color = "black";
        });

        toggleButton.style.color = "black";
        toggleButton.style.borderColor = "black";
    }
});
