const popupButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".form__close-btn");
const popupForm = document.querySelector(".form__popup");
const formElement = document.querySelector(".form");
const profileName = document.querySelector(".profile__info_name");
const profileJob = document.querySelector(".profile__info_bio");
const inputName = formElement.querySelector(".form__name");
const inputJob = formElement.querySelector(".form__bio");

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