console.log("hello");

function modalContent() {
  //add random array to modal in html
  document.querySelector(".box").innerHTML = result;
}

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

//random facts
const array = [
  "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade. Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
  "There are many ways to enjoy Boston Harbor Islands and many ways to get there. For more information on how to get to the park by ferry, car, or private boat, please visit www.bostonharborislands.org.",
  "Three of the 10 highest waterfalls in the world are located in Yosemite National Park in California.",
  "The Grand Canyon, in Grand Canyon National Park in Arizona, is known as one of the Seven Natural Wonders of the World.",
  "National parks are home to life on a big scale: Sequoia trees are some of the world's largest living things, and Alaskan brown bears are some of the world's largest carnivores.",
  "National parks are home to life on a big scale: Sequoia trees are some of the world's largest living things, and Alaskan brown bears are some of the world's largest carnivores.",
  "Everglades National Park protects more than 25% of Florida's original everglades (subtropical wetlands).",
  "Trail Ridge Road in Rocky Mountain National Park, which connects Grand Lake and Estes Park, is the highest continuously paved road in the U.S., and it includes breathtaking views and vistas along its entire 48 miles.",
  "At 1,932 feet deep, Crater Lake National Park in Oregon is the deepest lake in the U.S.",
  "Only one state in the country is not lucky enough to currently have either a national park or national monument. It is actually the country’s first state, Delaware... Lame. Don't go to Delaware.",
  "White Sands National Monument spans more than 176,000 acres of New Mexico desert and contains the largest gypsum dune fields in the world.",
];

const result = getRandomItem(array);
console.log(result);

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});
