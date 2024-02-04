"use strict";

const data = [
  {
    id: 1,
    project_name: "Event Booking App",
    client_vision:
      "The client's objective for the Event Booking App was to develop a visually appealing and user-friendly platform, integrating both frontend and backend components. This comprehensive solution aimed to simplify event discovery, ticket booking, and attendance management. The goal was to provide users with an intuitive and engaging interface for a seamless event experience, blending a well-designed frontend with robust backend functionality.",
    my_contribution:
      "I crafted an efficient and enjoyable Event Booking App, specializing in responsive UI design. As the frontend developer, my focus was on creating a seamless experience, optimizing the app for different devices. Users could effortlessly discover and book events, thanks to the responsive design.My frontend expertise enhanced the app's user-friendliness, ensuring smooth event discovery and ticket booking. The backend, built with Node.js, added robust functionality, facilitating effective event management.This project highlights my dual proficiency in frontend and backend development, delivering a compelling and accessible app for diverse users.",
    skills: [
      "Flutter",
      "Dart",
      "API",
      "SocketIO",
      "Stripe",
      "NodeJs",
      "MongoDB",
      "User Authentication",
    ],
    sample: ["LightMode_EventHub", "DarkMode_EventHub"],
  },
  {
    id: 2,
    project_name: "Calculator Lock App",
    client_vision: "The client's goal for the calculator lock: gallery value application is to develop a secure and user-friendly mobile application that serves as a calculator, while also providing a lock feature for the gallery. The client aims to offer users a convenient tool for performing calculations, while ensuring the privacy and protection of their personal photos , videos , audio etc.. stored in the device's gallery.",
    my_contribution: "As the developer working on this project, my contribution involves designing and developing the calculator lock: gallery value application from scratch. I will leverage my expertise in mobile app development, focusing on creating a robust and intuitive calculator feature that seamlessly integrates with the device's gallery lock functionality. This will involve implementing a secure lock mechanism for the gallery, ensuring that only authorized users can access the protected content. Additionally, I will prioritize user experience by designing an elegant and user-friendly interface that enhances the overall usability of the application.",
    skills: ["Android","JAVA","AES-128","Storage","Security"],
    sample: ["Calculator Lock _ Gallery Vault"],
  },
  {
    id: 3,
    project_name: "Flip Coin App",
    client_vision: "The client's goal for the Flip Coin application using Flutter was to create an engaging and interactive mobile app that simulated the flipping of a coin. The client wanted to offer users a fun and convenient way to make decisions or play games involving coin tosses, while providing a visually appealing and intuitive user interface.",
    my_contribution: "As the developer assigned to this project, my contribution involved the complete development of the Flip Coin application using Flutter. I utilized my expertise in Flutter and create an engaging user experience & the core functionality of the app, which included simulating the flipping of a coin and displaying the result. Additionally, I focused on creating a visually appealing interface with smooth animations that replicated the flipping motion. I ensured that the application was responsive across different screen sizes and optimized its performance for a seamless user experience.",
    skills: ["Flutter","Animation","Dart"],
    sample: ["FlipCoin"],
  },
  {
    id: 4,
    project_name: "Food Delivery App",
    client_vision: `Frontend:\nCreate a beautiful, user-friendly interface for the Food Delivery App, ensuring effortless food discovery and ordering across devices.\nBackend Vision:\nDevelop a robust backend system for the Food Delivery App, focusing on reliability and speed for smooth user interactions. Integrate seamlessly with the frontend, supporting real-time updates and ensuring a secure foundation. Efficiently manage data for enhanced user experience and future scalability.`,
    my_contribution:
      "The Food Delivery App is designed to be a delightful experience, allowing users to explore and enjoy diverse culinary delights easily. My role as a frontend developer focuses on creating a responsive and harmonious user interface, ensuring a smooth experience on smartphones, tablets, and desktops.\nUsing React Native for the frontend and Node.js with MongoDB for the backend, the app promises a seamless integration. My expertise lies in crafting a visually appealing and highly responsive frontend UI, making food selection, ordering, and delivery tracking elegant and enjoyable for users across various devices.",
    skills: [
      "React Native",
      "Redux",
      "Socket",
      "REST API",
      "SocketIO",
      "GoogleMap",
      "JavaScript",
      "NodeJs",
      "MongoDB",
      "Native Fluency",
    ],
    sample: [
      "LightMode_FoodDelivery",
      "DarkMode_FoodDelivery",      
      "Food_Delivery_1",
      "Food_Delivery_2",
      "Food_Delivery_3",
    ],
  },
  {
    id: 5,
    project_name: "Drink Water App",
    client_vision: "The client's goal for this project is to create a mobile application that can help users track their daily water intake, set reminders to drink water, and store data about their water consumption over time. The application should be easy to use, visually appealing, and provide helpful information and tips about staying hydrated.",
    my_contribution: "As a developer working on this project, my contribution would be to create the user interface and user experience design for the application, develop the functionality for tracking water intake and setting reminders, and integrate a database to store user data.",
    skills: ["Android","JAVE","Alarm","UI-UX","Animation","Theming"],
    sample: ["DrinkWater"],
  },
];

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  console.log(selectedValue, filterItems);

  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Copyright (c) 2022 Ivan Teplov

const $ = document.querySelector.bind(document);

const openSheetButton = $("#open-sheet");
const sheet = $("#sheet");
const sheetContents = sheet.querySelector(".contents");
const draggableArea = sheet.querySelector(".draggable-area");

let sheetHeight; // in vh

const setSheetHeight = (value) => {
  sheetHeight = Math.max(0, Math.min(100, value));
  sheetContents.style.height = `${sheetHeight}vh`;

  if (sheetHeight === 100) {
    sheetContents.classList.add("fullscreen");
  } else {
    sheetContents.classList.remove("fullscreen");
  }
};
// Disable scroll for body
function disableScroll() {
  document.body.style.overflow = "hidden";
}

// Enable scroll for body
function enableBodyScroll() {
  document.body.style.overflow = "";
}

const setIsSheetShown = (isShown) => {
  sheet.setAttribute("aria-hidden", String(!isShown));
};

// Open the sheet when clicking the 'open sheet' button
function showProjectModal() {
  setSheetHeight(Math.min(50, (720 / window.innerHeight) * 100));
  setIsSheetShown(true);
  disableScroll();
}

// Hide the sheet when clicking the 'close' button
sheet.querySelector(".close-sheet").addEventListener("click", () => {
  setIsSheetShown(false);
  enableBodyScroll();
});

// Hide the sheet when clicking the background
sheet.querySelector(".overlay").addEventListener("click", () => {
  setIsSheetShown(false);
  enableBodyScroll();
});

const isFocused = (element) => document.activeElement === element;

// Hide the sheet when pressing Escape if the target element
// is not an input field
window.addEventListener("keyup", (event) => {
  const isSheetElementFocused =
    sheet.contains(event.target) && isFocused(event.target);

  if (event.key === "Escape" && !isSheetElementFocused) {
    setIsSheetShown(false);
    enableBodyScroll();
  }
});

const touchPosition = (event) => (event.touches ? event.touches[0] : event);

let dragPosition;

const onDragStart = (event) => {
  dragPosition = touchPosition(event).pageY;
  sheetContents.classList.add("not-selectable");
  draggableArea.style.cursor = document.body.style.cursor = "grabbing";
};

const onDragMove = (event) => {
  if (dragPosition === undefined) return;

  const y = touchPosition(event).pageY;
  const deltaY = dragPosition - y;
  const deltaHeight = (deltaY / window.innerHeight) * 100;

  setSheetHeight(sheetHeight + deltaHeight);
  dragPosition = y;
};

const onDragEnd = () => {
  dragPosition = undefined;
  sheetContents.classList.remove("not-selectable");
  draggableArea.style.cursor = document.body.style.cursor = "";

  if (sheetHeight < 25) {
    setIsSheetShown(false);
    enableBodyScroll();
  } else if (sheetHeight > 75) {
    setSheetHeight(100);
  } else {
    setSheetHeight(50);
  }
};

draggableArea.addEventListener("mousedown", onDragStart);
draggableArea.addEventListener("touchstart", onDragStart);

window.addEventListener("mousemove", onDragMove);
window.addEventListener("touchmove", onDragMove);

window.addEventListener("mouseup", onDragEnd);
window.addEventListener("touchend", onDragEnd);

function openProjectDetailModal(id) {
  showProjectModal();
  const modal_project_title = document.getElementById("modal-project-title");
  const modal_client_vision = document.getElementById("modal-client-vision");
  const modal_my_contribution = document.getElementById(
    "modal-my-contribution"
  );
  const modal_skills_deliverables = document.getElementById(
    "modal-skills-deliverables"
  );
  const modal_project_sample_work = document.getElementById(
    "modal-project-sample-work"
  );

  const selected_project = data[id - 1];

  console.log(selected_project);
  console.log(modal_project_title);

  modal_project_title.textContent = selected_project.project_name;
  modal_client_vision.textContent = selected_project.client_vision;
  modal_my_contribution.textContent = selected_project.my_contribution;

  // Clear existing content
  modal_skills_deliverables.innerHTML = "";
  modal_project_sample_work.innerHTML = "";

  // Loop through the skills array and create elements dynamically
  selected_project.skills.forEach((skill) => {
    const infoContent = document.createElement("div");
    infoContent.classList.add("info-content");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = skill;

    infoContent.appendChild(title);
    modal_skills_deliverables.appendChild(infoContent);
  });

  selected_project.sample.forEach((sampleWorkItem) => {
    // Create the sample work item dynamically
    const projectItem = document.createElement("li");
    projectItem.classList.add("project-item", "active");
    projectItem.setAttribute("data-filter-item", "");
    projectItem.setAttribute("data-category", "application");

    const link = document.createElement("a");
    
    const figure = document.createElement("figure");
    figure.classList.add("project-img");
    
    const iconBox = document.createElement("div");
    iconBox.classList.add("project-item-icon-box");
    
    const ionIcon = document.createElement("ion-icon");
    ionIcon.setAttribute("name", "eye-outline");
    
    const img = document.createElement("img");
    img.src = `./assets/images/${sampleWorkItem}.png`; // Assuming images follow a pattern
    img.alt = sampleWorkItem;
    img.setAttribute("loading", "lazy");
    
    link.href = img.src;
    link.target = '_blank'
    // Build the hierarchy
    iconBox.appendChild(ionIcon);
    figure.appendChild(iconBox);
    figure.appendChild(img);
    link.appendChild(figure);
    projectItem.appendChild(link);

    // Append the sample work item to the modalProjectSampleWork element
    modal_project_sample_work.appendChild(projectItem);
  });
}

