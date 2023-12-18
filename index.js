const content = document.querySelectorAll(".card__content");
const icon = document.querySelectorAll("#reveal-icon");

const openContent = (item, header) => {
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
};

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

content.forEach((item, index) => {
  const header = item.querySelector(".card__question");
  header.addEventListener("click", (e) => {
    // set event target to header
    const curentItem = e.target.closest(".card__question");

    openContent(item, header, curentItem);
    closeContent(index);
    // Expand and close focused element on 'Enter' key press
    window.addEventListener("keypress", (e) => {
      let eventKey = e.key;

      if (eventKey === "Enter") {
        openContent(item, curentItem);
        closeContent(index);
      }
    });
  });
});
