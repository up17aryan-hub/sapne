document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".hero-content, .card, .rule, .quote"
    );

    elements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";

        setTimeout(() => {
            element.style.transition = "all 0.6s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 80);
    });

});