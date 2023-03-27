const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

const hamburger = () => {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    nav.classList.toggle("active");
  });
};

export default hamburger;
