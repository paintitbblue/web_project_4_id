let popupButton = document.querySelector(".profile__edit-btn")
 
popupButton.addEventListener("click", function() {
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
})

let closeButton = document.querySelector(".form_close-toggle")

closeButton.addEventListener("click", function() {
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
})

let popUpForm = document.querySelector(".form");
let profile__name = document.querySelector(".profile__info_name");
let profile__job = document.querySelector(".profile__info_bio");


popUpForm.addEventListener("submit", function (evt) {
  console.log("========")
  handleProfileFormSubmit(evt);
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let inputName = popUpForm.querySelector(".form__name");
  let inputJob = popUpForm.querySelector(".form__bio");
  profile__name.textContent = inputName.value;
  profile__job.textContent = inputJob.value;
}