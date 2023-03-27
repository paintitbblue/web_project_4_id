const popupButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".form__close-btn");
const popupForm = document.querySelector(".form__popup");
const formElement = document.querySelector(".form");
const profileName = document.querySelector(".profile__info_name");
const profileJob = document.querySelector(".profile__info_bio");
const inputName = formElement.querySelector(".form__name");
const inputJob = formElement.querySelector(".form__bio");
const addButton = document.querySelector(".profile__add-btn");
let likeButton = document.querySelectorAll(".element .element__heart");

const addImageForm = document.querySelector(".form__add_image");
const placeForm = document.querySelector(".form__place");
const placeTitle = document.querySelector(".form__title");
const placeUrl = document.querySelector(".form__url");
const closePlaceButton = document.querySelector(".form__place_close-btn");

const imageElement = document.querySelector(".element__image");
const inputTitle = addImageForm.querySelector(".form__title");
const inputUrl = addImageForm.querySelector(".form__url");
const cardElements = document.querySelector(".elements");
let selectedImage = document.querySelector(".image__popup");
const imageCloseButton = document.querySelector(".image__popup_close-btn");
const initialCards = [
  {
    name: "Lembah Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Danau Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Pegunungan Gundul",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Gunung Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Taman Nasional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
const likeButtons = document.querySelectorAll(".element__heart");
let deleteButtons = document.querySelectorAll(".element__delete");

// function renderCards() {
//   let cards = "";
//   initialCards.forEach((card) => {
//     const cardElement = `
//       <div class="element">
//         <img src=${card.link} class="element__image" alt="Image of Yosemite Valley">
//         <p class="element__text">${card.name}</p>
//         <img src="./images/heart.svg" class="element__heart" alt="heart icon">
//         <img src="./images/Trash.png" class="element__delete" alt="trash icon">
//       </div>
//     `;
//     cards += cardElement;
//   });
//   cardElements.innerHTML = cards;
// }
 
  


  function handleDeleteCard(evt) {
    const deleteButton = evt.target;
    const cardElement = deleteButton.closest(".element");
    cardElement.remove();
  }

  function requeryElements() {
    deleteButtons = document.querySelectorAll(".element__delete");
    likeButton = document.querySelectorAll(".element__heart");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", handleDeleteCard);
    });

    likeButton.forEach((c) => {
      c.addEventListener("click", function () {
        c.classList.toggle("element__heart-active");
      });
    });
  }

requeryElements();

popupButton.addEventListener("click", openForm);

closeButton.addEventListener("click", closeForm);

formElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeForm();
}

function openForm() {
  popupForm.classList.add("form__popup_active");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function closeForm() {
  popupForm.classList.remove("form__popup_active");
}

addButton.addEventListener("click", openPlaceForm);

closePlaceButton.addEventListener("click", closePlaceForm);

placeForm.addEventListener("submit", handlePlaceFormSubmit);

function buildCardElement({ name, link }) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("element");
  const cardImage = document.createElement("img");
  cardImage.classList.add("element__image");
  cardImage.src = link;
  cardElement.appendChild(cardImage);
  const cardText = document.createElement("p");
  cardText.classList.add("element__text");
  cardText.textContent = name;
  cardElement.appendChild(cardText);
  const cardHeart = document.createElement("img");
  cardHeart.classList.add("element__heart");
  cardHeart.src = "./images/heart.svg";
  cardElement.appendChild(cardHeart);
  const cardDelete = document.createElement("img");
  cardDelete.classList.add("element__delete");
  cardDelete.src = "./images/trash.png";
  cardElement.appendChild(cardDelete);
  return cardElement;
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCardElement = buildCardElement({
    name: inputTitle.value,
    link: inputUrl.value,
  });
  cardElements.prepend(newCardElement);
  requeryElements();
  closePlaceForm();
}

function openPlaceForm() {
  addImageForm.classList.add("form__add_image_active");
  inputTitle.value = placeTitle.textContent;
  inputUrl.value = placeUrl.textContent;
}

function closePlaceForm() {
  addImageForm.classList.remove("form__add_image_active");
}

const images = document.querySelectorAll(".image__fullscreen");
const image = document.querySelectorAll(".element__image");

selectedImage.addEventListener("click", imageClose);

image.forEach((image_element) => {
  image_element.addEventListener("click", function () {
    const selectedImage = image_element.src;
    const popup = document.querySelector(".image__popup");
    const popupImage = document.querySelector(".image__popup .image");

    popupImage.src = selectedImage;
    popup.classList.add("image__popup_active");
  });
});


// images.forEach((image_element) => {
//   image_element.addEventListener("click", function () {
//     selectedImage = image_element.src;
//     document
//       .querySelector(".image__popup")
//       .classList.add("image__popup_active");
//     document.querySelector(".image__popup .image__fullscreen").src = selectedImage;
//   });
// });

function imageClose() {
  selectedImage.classList.remove("image__popup_active");
}
