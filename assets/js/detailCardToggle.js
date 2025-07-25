const detailCard = document.getElementById("detailModal");
const detailToggleBtn = document.getElementById("detailToggleBtn");
const closeBtn = document.querySelector(".close-btn");
const closeBtnBtm = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

toggleDetail = () => {
    const cardClasses = ["hidden"];
    cardClasses.forEach(cls => {
        detailCard.classList.toggle(cls);
        overlay.classList.toggle(cls);
    })
}

detailToggleBtn.addEventListener("click", toggleDetail);
closeBtn.addEventListener("click", toggleDetail);
closeBtnBtm.addEventListener("click", toggleDetail);

document.addEventListener("click", (e) => {
    const target = e.target;
    if (!detailCard.contains(target) && !detailToggleBtn.contains(target)) {
        detailCard.classList.add("hidden");
    }
    if (!detailCard.contains(target) && !detailToggleBtn.contains(target) && overlay.contains(target)) {
        overlay.classList.add("hidden");
    }
});