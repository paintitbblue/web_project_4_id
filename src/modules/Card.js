import { Popup } from "./PopUp.js";

export class Card {
    constructor (caption, image, idx, onDelete) {
        this._caption = caption;
        this._image = image;
        this._idx = idx;
        this._onDelete = onDelete;
        this._deleteCard = this._deleteCard.bind(this);
    }

    _getTemplate() {
        const cardElement = document
        .querySelector("#element")
        .content
        .querySelector(".element")
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector(".element__image").src = this._image;
        this._element.querySelector(".element__caption").textContent = this._caption;
        this._setEventListeners();
        new Popup(this._element)
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".element__delete").addEventListener("click", this._deleteCard);
        this._element.querySelector(".element__like").addEventListener("click", this._likeCard);
    }

    _deleteCard(idx) {
        this._onDelete(this._idx)
    }

    _likeCard(e) {
        this.classList.toggle("element__like-active")
    }
}
