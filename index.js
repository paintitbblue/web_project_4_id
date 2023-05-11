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

function closeAllPopup(e) {
  if (e.key === "Escape") {
    if (editFormOverlay.classList.contains("profile__edit-form-overlay_active")) {
      closeEditForm();
    }
    if (addFormOverlay.classList.contains("form-overlay_active")) {
      closeCardForm();
    }
    if (popupOverlay.classList.contains("popup-overlay_active")) {
      closePopupImage();
    }
  }
}

function openEditForm() {
  editFormOverlay.classList.add("profile__edit-form-overlay_active");
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  document.addEventListener("keyup", closeAllPopup);
}

function closeEditForm() {
  editFormOverlay.classList.remove("profile__edit-form-overlay_active");
  document.removeEventListener("keyup", closeAllPopup)
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
  document.addEventListener("keyup", closeAllPopup);
}

function closeCardForm() {
  addFormOverlay.classList.remove("form-overlay_active");
  document.removeEventListener("keyup", closeAllPopup)
}

function initCard() {
  const cardTemplate = document.getElementById("card-template");
  let template = "";
  initialCards.forEach((item, index) => {
  
    const cardElement = cardTemplate.content.cloneNode(true).querySelector(".element");

    const imageElement = cardElement.querySelector(".element__image");
    imageElement.setAttribute("src", item.link);
    imageElement.onclick = () => popupImage(index);

    cardElement.querySelector(".element__text").textContent = item.name;

    cardElement.querySelector(".element__delete").onclick = () => deleteCard(index);

    template += cardElement.outerHTML;
  });

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
  document.addEventListener("keyup", closeAllPopup);
}

function closePopupImage() {
  popupOverlay.classList.remove("popup-overlay_active");
  document.removeEventListener("keyup", closeAllPopup);
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