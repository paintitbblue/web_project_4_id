// Edit Form Element
const openEditFormBtn = document.querySelector(".profile__edit-btn");
const closeEditFormBtn = document.querySelector(".profile__edit-close-btn");
const submitEditFormBtn = document.querySelector(".profile__edit-submit-btn");
const editForm = document.querySelector(".profile__edit-form");
const editFormOverlay = document.querySelector(".profile__edit-form-overlay");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-job");
const inputName = editForm.querySelector('input[name="name"]');
const inputJob = editForm.querySelector('input[name="job"]');
// Add Card Element
const addCardBtn = document.querySelector(".profile__add-btn-rect");
const addFormOverlay = document.querySelector(".form-overlay");
const addForm = document.querySelector(".add-form");
const closeCardBtn = document.querySelector(".form__close-btn");
const submitCardBtn = document.querySelector(".form__submit-btn");
const inputTitle = document.querySelector("input[name='title']");
const inputUrl = document.querySelector("input[name='url']");
// Popup Image
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const popupCloseBtn = document.querySelector(".popup-close-btn");

const initialCards = [
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
submitEditFormBtn.addEventListener("submit", submitEditForm);

function openEditForm() {
  editFormOverlay.classList.add("profile__edit-form-overlay_active");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  editForm.addEventListener("keyup", function(e) {
    if (e.key === "Escape") {
      closeEditForm();
    }
  })
}

function closeEditForm() {
  editFormOverlay.classList.remove("profile__edit-form-overlay_active");
}

function submitEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closeEditForm();
  editForm.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      submitEditForm();
    }
  })
}

function addCardForm() {
  addFormOverlay.classList.add("form-overlay_active");
  addForm.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      addCardForm();
    }
  });
  addForm.addEventListener("keyup", function(e) {
    if (e.key === "Escape") {
      closeCardForm();
    }
  })
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
  popup.addEventListener("keyup", function(e) {
    if (e.key === "Escape") {
      closePopupImage();
    }
  })
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
  reQueryElements();
}

function reQueryElements() {
  const likeButtons = document.querySelectorAll(".element__heart");
  const deleteButtons = document.querySelectorAll(".element__delete");

  likeButtons.forEach((c) => {
    c.addEventListener("click", function () {
      c.classList.toggle("element__heart-active");
    });
  });
}