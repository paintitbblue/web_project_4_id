import { Popup } from "../modules/utils.js";

export class Card {
    constructor (caption, image, onDelete) {
        this._caption = caption;
        this._image = image;
        this._onDelete = onDelete;
        console.log(onDelete)
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
        console.log("card generated", this._caption)
        this._element.querySelector(".element__image").src = this._image;
        this._element.querySelector(".element__caption").textContent = this._caption;
        this._setEventListeners();
        // new Popup(this._image, this._caption, this._element)
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector(".element__delete").addEventListener("click", this._deleteCard);
        this._element.querySelector(".element__like").addEventListener("click", this._likeCard);
    }

    _deleteCard(idx) {
        console.log(this._onDelete)
        this._onDelete(idx)

    }

    // _likeCard
}

export class CardItems {
    constructor(cardList) {
        this._cardList = cardList
        console.log("cardlist construct")
        this._renderCard()
        this._deleteCard.bind(this)
    }

    addCard() {
        this._cardList.push({
            name : titleInput.value,
            link : linkInput.value
        })

        this._renderCard()
    }
    
    _deleteCard(idx) {
        this._cardList.splice(idx, 1)
        this._renderCard()
    }

    _renderCard() {
        var cards = []
        console.log("render card")
        this._cardList.forEach((item) => {
            const card = new Card(item.name, item.link, this._deleteCard);
            const cardElement = card.generateCard()
            cards.push(cardElement)
            document.querySelector(".elements").append(cardElement)
        })
        
    }
}