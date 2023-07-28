import "./styles/index.css";
import { CardItems, Card } from "./modules/Card.js";
import { FormValidator } from "./modules/FormValidator.js";
import Section from "./modules/Section.js"

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

// const cardItems = new CardItems(initialCards);

function renderSection(element, items) {
  var cards = []
        
        element.innerHTML = ""
        items.forEach((item, idx) => {
            const card = new Card(item.name, item.link, idx, this._deleteCard);
            const cardElement = card.generateCard()
            cards.push(cardElement)
            element.append(cardElement);
        })
}
const section = new Section( {items: initialCards, renderer: renderSection}, ".elements" );
section.renderItems()

class Profile {
  constructor() {
    this.openEditFormBtn = document.querySelector(".profile__edit-btn");
    this.closeEditFormBtn = document.querySelector(".profile__edit-close-btn");
    this.submitEditFormBtn = document.querySelector(".profile__edit-form");
    this.editForm = document.querySelector(".profile__edit-form");
    this.editFormOverlay = document.querySelector(".profile__edit-form-overlay");
    this.profileName = document.querySelector(".profile__info-name");
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
    this.editFormOverlay.classList.add("profile__edit-form-overlay_active");
    this.inputName.value = this.profileName.textContent;
    this.inputJob.value = this.profileJob.textContent;
    document.addEventListener("keyup", this.closeAllPopup.bind(this));
    this.editFormOverlay.addEventListener("click", (e) => {
      this.closeAnywhere(e);
    });
  }

  closeEditForm() {
    this.editFormOverlay.classList.remove("profile__edit-form-overlay_active");
    document.removeEventListener("keyup", this.closeAllPopup);
  }

  submitEditForm(evt) {
    console.log(this)
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

class AddCard {
  constructor() {
    this.addCardBtn = document.querySelector(".profile__add-btn-rect");
    this.addFormOverlay = document.querySelector(".form-overlay");
    this.addForm = document.querySelector(".add-form");
    this.closeCardBtn = document.querySelector(".form__close-btn");
    this.submitCardBtn = document.querySelector(".add-form");
    this.inputTitle = document.querySelector("input[name='title']");
    this.inputUrl = document.querySelector("input[name='url']");

    this.openAddCardForm = this.openAddCardForm.bind(this);
    this.closeAddCardForm = this.closeAddCardForm.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.closeAnywhere = this.closeAnywhere.bind(this);
    this.closeAllPopup = this.closeAllPopup.bind(this);

    this.addCardBtn.addEventListener("click", this.openAddCardForm);
    this.closeCardBtn.addEventListener("click", this.closeAddCardForm);
    this.submitCardBtn.addEventListener("submit", this.addNewCard);
  }

  openAddCardForm() {
    this.addFormOverlay.classList.add("form-overlay_active");
    document.addEventListener("keyup", this.closeAllPopup);
    this.addFormOverlay.addEventListener("click", (e) => {
      this.closeAnywhere(e);
    });
  }

  closeAddCardForm() {
    this.addFormOverlay.classList.remove("form-overlay_active");
    document.removeEventListener("keyup", this.closeAllPopup);
  }

  addNewCard(evt) {
    evt.preventDefault();
    const newCard = {
      name: this.inputTitle.value,
      link: this.inputUrl.value,
    };
    console.log("newCard", newCard);
    cardItems.addCard(newCard)
    
    this.closeAddCardForm();
  }

  closeAllPopup(e) {
    if (e.key === "Escape") {
      if (this.addFormOverlay.classList.contains("form-overlay_active")) {
        this.closeAddCardForm();
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

const profile = new Profile();
const addCard = new AddCard();
