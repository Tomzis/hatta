const contact = () => {
  const clear = () => {
    const titles = document.querySelectorAll(".form__title li a");
    titles.forEach((title) => title.classList.remove("active"));
  };

  const setTitle = (e) => {
    clear();
    e.currentTarget.classList.add("active");
  };

  const titles = document.querySelectorAll(".form__title li a");
  titles.forEach((title) => title.addEventListener("click", setTitle));
};

export default contact;
