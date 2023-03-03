const popupButton = document.querySelector(".profile__edit-btn");
const closeButton = document.querySelector(".form_close-toggle");
const popupForm = document.querySelector(".form__popup");
const formSubmit = document.querySelector(".form");
const profileName = document.querySelector(".profile__info_name");
const profileJob = document.querySelector(".profile__info_bio");

popupButton.addEventListener("click", openForm);

closeButton.addEventListener("click", closeForm);

formSubmit.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
  let inputName = formSubmit.querySelector(".form__name");
  let inputJob = formSubmit.querySelector(".form__bio");
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}

function openForm() {
  popupForm.classList.toggle("form__popup_active")
}

function closeForm() {
  closeButton.classList.toggle("form_close-toggle")
}