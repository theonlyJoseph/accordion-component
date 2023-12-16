const content = document.querySelectorAll(".card__content");
const icon = document.querySelectorAll("#reveal-icon");

content.forEach((item, index) => {
  const header = item.querySelector(".card__question");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    const answer = item.querySelector(".card__answer");
    const icon = header.querySelector("#reveal-icon");
    if (item.classList.contains("open")) {
      answer.style.height = `${answer.scrollHeight}px`;

      icon.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      answer.style.height = `0px`;
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }

    closeContent(index);
  });
});

const closeContent = (index1) => {
  content.forEach((newItem, newIndex) => {
    if (index1 !== newIndex) {
      newItem.classList.remove("open");

      const answer = newItem.querySelector(".card__answer");
      const icon = newItem.querySelector("#reveal-icon");
      answer.style.height = `0px`;
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
};
