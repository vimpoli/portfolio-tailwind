const navbar = document.getElementById("navbar");
const toggleBar = document.getElementById("toggleBar");

const toggleNavbar = () => {
    const classes = ["hidden", "md:block"];
    classes.forEach(cls => {
        navbar.classList.toggle(cls);
    });
}

toggleBar.addEventListener("click", toggleNavbar);

document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !toggleBar.contains(e.target)) {
        navbar.classList.add("hidden");
    }
});