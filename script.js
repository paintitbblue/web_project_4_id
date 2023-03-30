// Edit Form Element
const openEditFormBtn = document.querySelector(".profile__edit-btn");
const closeEditFormBtn = document.querySelector(".profile__edit-close-btn");
const editForm = document.querySelector(".profile__edit-form");
const editFormOverlay = document.querySelector(".profile__edit-form-overlay");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-job");
const inputName = editForm.querySelector('input[name="name"]');
const inputJob = editForm.querySelector('input[name="job"]');
// Add Card Element
const addCardBtn = document.querySelector(".profile__add-btn-rect");
const addFormOverlay = document.querySelector(".form-overlay");
const addForm = document.querySelector(".form");
const closeCardBtn = document.querySelector(".form__close-btn");
const submitCardBtn = document.querySelector(".form__submit-btn");
const inputTitle = document.querySelector("input[name='title']");
const inputUrl = document.querySelector("input[name='url']");
// Popup Image
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const popupCloseBtn = document.querySelector(".popup-close-btn");

let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Louise Lake",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Bald Mountain",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// addEventListener
openEditFormBtn.addEventListener("click", openEditForm);
closeEditFormBtn.addEventListener("click", closeEditForm);
editForm.addEventListener("submit", submitEditForm);
addCardBtn.addEventListener("click", addCardForm);
closeCardBtn.addEventListener("click", closeCardForm);
addForm.addEventListener("submit", addNewCard);
popupCloseBtn.addEventListener("click", closePopupImage);
// function openEditForm() {
//   // openEditFormBtn.classList.add("profile__edit-form-overlay_active");
//   overlay.classList.add("overlay-active");
//   openEditFormBtn.classList.add("form-active");
//   inputName.value = profileName.textContent;
//   inputJob.value = profileJob.textContent;
// }
function openEditForm() {
  editFormOverlay.classList.add("profile__edit-form-overlay_active");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function closeEditForm() {
  editFormOverlay.classList.remove("profile__edit-form-overlay_active");
}

function submitEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeEditForm();
}

function addCardForm() {
  addFormOverlay.classList.add("form-overlay_active");
}

function closeCardForm() {
  addFormOverlay.classList.remove("form-overlay_active");
}


function cardItems(link, name, index) {
  return `
    <div class="element">
      <img class="element__image" src="${link}" onclick="popupImage(${index})">
      <p class="element__text">${name}</p>
      <img src="./images/heart.svg" class="element__heart">
      <img src="./images/Trash.png" class="element__delete" onclick="deleteCard(${index})">
    </div>
  `
}

function initCard() {
  let template = "";
  initialCards.forEach ((item, index) => {
    template += cardItems(item.link, item.name, index)
  })
  document.querySelector(".elements").innerHTML = template;
}

initCard();
reQueryElements();

function popupImage(index) {
  const link = initialCards[index].link;
  const title = initialCards[index].name;

  document.querySelector(".popup-image").src = link
  document.querySelector(".popup-title").textContent = title
  popupOverlay.classList.add("popup-overlay_active");
}

function closePopupImage() {
  popupOverlay.classList.remove("popup-overlay_active");
}

function addNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTitle.value,
    link: inputUrl.value
  }
  initialCards.unshift(newCard)

  initCard();
  reQueryElements();
  closeCardForm();
}

function deleteCard(index) {
  initialCards.splice(index, 1)
  initCard();
}

function reQueryElements() {
  let likeButtons = document.querySelectorAll(".element__heart");
  let deleteButtons = document.querySelectorAll(".element__delete");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteCard);
  });

  likeButtons.forEach((c) => {
    c.addEventListener("click", function () {
      c.classList.toggle("element__heart-active");
    });
  });
}


// function buildCardElement({ name, link }) {
//   const cardElement = document.createElement("div");
//   cardElement.classList.add("element");
//   const cardImage = document.createElement("img");
//   cardImage.classList.add("element__image");
//   cardImage.src = link;
//   cardElement.appendChild(cardImage);
//   const cardText = document.createElement("p");
//   cardText.classList.add("element__text");
//   cardText.textContent = name;
//   cardElement.appendChild(cardText);
//   const cardHeart = document.createElement("img");
//   cardHeart.classList.add("element__heart");
//   cardHeart.src = "./images/heart.svg";
//   cardElement.appendChild(cardHeart);
//   const cardDelete = document.createElement("img");
//   cardDelete.classList.add("element__delete");
//   cardDelete.src = "./images/trash.png";
//   cardElement.appendChild(cardDelete);
//   return cardElement;
// }

// function handlePlaceFormSubmit(evt) {
//   evt.preventDefault();
//   const newCardElement = buildCardElement({
//     name: inputTitle.value,
//     link: inputUrl.value,
//   });
//   cardElements.prepend(newCardElement);
//   reQueryElements();
//   closePlaceForm();
// }

// function openPlaceForm() {
//   addImageForm.classList.add("form__add_image_active");
//   inputTitle.value = placeTitle.textContent;
//   inputUrl.value = placeUrl.textContent;
// }

// function closePlaceForm() {
//   addImageForm.classList.remove("form__add_image_active");
// }

// image.forEach((image_element) => {
//   image_element.addEventListener("click", function () {
//     const selectedImage = image_element.src;
//     const popup = document.querySelector(".image__popup");
//     const popupImage = document.querySelector(".image__popup .images");

//     popupImage.src = selectedImage;
//     popup.classList.add("image__popup_active");
//   });
// });

// function imageClose() {
//   selectedImage.classList.remove("image__popup_active");
// }

// function handleDeleteCard(evt) {
//   const deleteButton = evt.target;
//   const cardElement = deleteButton.closest(".element");
//   cardElement.remove();
// }