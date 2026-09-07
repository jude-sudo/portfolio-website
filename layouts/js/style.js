document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".section-label, .section-title, .about-text, .skill-box, .project-item, .contact-box"
    );

    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity .8s ease, transform .8s cubic-bezier(.22,1,.36,1)";
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => observer.observe(element));

});