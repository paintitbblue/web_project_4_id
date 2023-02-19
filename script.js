let popupButton = document.querySelector(".profile__edit-btn")
 
popupButton.addEventListener("click", function() {
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
})

let closeButton = document.querySelector(".form_close-toggle")

closeButton.addEventListener("click", function() {
  document.querySelector(".form__popup").classList.toggle("form__popup_active")
})

let heartButton = document.querySelectorAll(".element .element__heart")

heartButton.forEach((c) => {
  c.addEventListener("click", function () {
    c.classList.toggle("element__heart-active")
  })
})
