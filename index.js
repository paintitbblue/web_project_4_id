import { CardItems } from "./modules/Card.js";
import { FormValidator } from "./modules/FormValidator.js";

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

new CardItems(initialCards);

class Profile {
  constructor() {
    this.openEditFormBtn = document.querySelector(".profile__edit-btn");
    this.closeEditFormBtn = document.querySelector(".profile__edit-close-btn");
    this.submitEditFormBtn = document.querySelector(".profile__edit-submit-btn");
    this.editForm = document.querySelector(".profile__edit-form");
    this.editFormOverlay = document.querySelector(".profile__edit-form-overlay");
    this.profileName = document.querySelector(".profile__into-name");
    this.profileJob = document.querySelector(".profile__info-job");
    this.inputName = this.editForm.querySelector('input[name="name"]');
    this.inputJob = this.editForm.querySelector('input[name="job"]');

    this.openEditForm = this.openEditForm.bind(this);
    this.closeEditForm = this.closeEditForm.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
    this.closeAnywhere = this.closeAnywhere.bind(this);

    this.openEditFormBtn.addEventListener("click", this.openEditForm);
    this.closeEditFormBtn.addEventListener("click", this.closeEditForm);
    this.submitEditFormBtn.addEventListener("submit", this.submitEditForm);
    
  }

  openEditForm() {
    this.editFormOverlay.classList.add(".profile__edit-form-overlay_active");
    this.inputName.value = this.profileName.textContent;
    this.inputJob.value = this.profileJob.textContent;
    document.addEventListener("keyup", this.closeAllPopup.bind(this));
    this.editFormOverlay.addEventListener("click", (e) => {
      this.closeAnywhere(e);
    });
  }

  closeEditForm() {
    this.editFormOverlay.classList.remove("profile__edit-form-overlay_active");
    document.removeEventListener("keyup", this.closeAllPopup.bind(this));
  }

  submitEditForm(evt) {
    evt.preventDefault();
    this.profileName.textContent = this.inputName.value;
    this.profileJob.textContent = this.inputJob.value;
    this.closeEditForm();
    this.editForm.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.submitEditForm();
      }
    });
  }

  closeAllPopup(e) {
    if (e.key === "Escape") {
      if (this.editFormOverlay.classList.contains("profile__edit-form-overlay_active")) {
        this.closeEditForm();
      }
      if (this.addFormOverlay.classList.contains("form-overlay_active")) {
        this.closeAddCardForm();
      }
      if (this.popupOverlay.classList.contains("popup-overlay_active")) {
        this.closePopupImage();
      }
    }
  }

  closeAnywhere(e) {
    if (e.target === this.editFormOverlay) {
      this.closeEditForm();
    }
    if (e.target === this.addFormOverlay) {
      this.closeAddCardForm();
    }
    if (e.target === this.popupOverlay) {
      this.closePopupImage();
    }
  }
}

class CardManager {
  constructor() {
    this.cardTemplate = document.getElementById("#card-template");
    this.elementsContainer = document.querySelector(".elements");

    this.initCard();
    this.reQueryElements();
  }

  initCard() {
    let template = "";
    initialCards.forEach((item, index) => {
      const cardElement = this.cardTemplate.content.cloneNode(true).querySelector(".element");
      const imageElement = cardElement.querySelector(".element__image");
      imageElement.setAttribute("src", item.link);
      imageElement.onclick = () => this.popup.popupImage(index);

      cardElement.querySelector(".element__caption").textContent = item.name;

      template += cardElement.outerHTML;
    });

    this.elementsContainer.innerHTML = template;
  }

  deleteCard(index) {
    initialCards.splice(index, 1);
    this.initCard();
    this.reQueryElements();
  }

  reQueryElements() {
    const likeButtons = document.querySelectorAll(".element__like");
    const deleteButtons = document.querySelectorAll(".element__delete");
    const imageElements = document.querySelectorAll(".element__image");

    likeButtons.forEach((c) => {
      c.addEventListener("click", function () {
        c.classList.toggle("element__like-active");
      });
    });

    deleteButtons.forEach((val, idx) => {
      val.addEventListener("click", () => {
        this.deleteCard(idx);
      });
    });

    imageElements.forEach((val, idx) => {
      val.addEventListener("click", () => {
        this.popup.popupImage(idx);
      });
    });
  }
}

const profile = new Profile();
const editForm = document.querySelector(".profile__edit-form");
