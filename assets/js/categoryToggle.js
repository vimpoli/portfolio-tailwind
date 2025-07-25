const categoryToggle = document.getElementById("categoryToggle");
const categoryCard = document.getElementById("categoryCard");

const toggleCategory = () => {
    categoryCard.classList.toggle("hidden");
}

categoryToggle.addEventListener("click", toggleCategory);


document.addEventListener("click", (e) => {
    if (!categoryCard.contains(e.target) && !categoryToggle.contains(e.target)) {
        categoryCard.classList.add("hidden");
    }
})