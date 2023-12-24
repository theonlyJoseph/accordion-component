const header = document.querySelectorAll("[data-accordion-header]");

header.forEach((item) => {
  let answer = item.parentElement.nextElementSibling;
  item.addEventListener("click", (e) => {
    let expanded = item.getAttribute("aria-expanded") === "true" || false;
    let icon = item.parentElement.querySelector("#reveal-icon");
    icon.setAttribute("src", "./assets/images/icon-minus.svg");
    answer.hidden = expanded;
    item.setAttribute("aria-expanded", !expanded);
    if (expanded) {
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});

// const closeContent = (index1) => {
//   content.forEach((newItem, newIndex) => {
//     if (index1 !== newIndex) {
//       newItem.classList.remove("open");

//       const answer = newItem.querySelector(".card__answer");
//       const icon = newItem.querySelector("#reveal-icon");
//       answer.style.height = `0px`;
//       icon.setAttribute("src", "./assets/images/icon-plus.svg");
//     }
//   });
// };
