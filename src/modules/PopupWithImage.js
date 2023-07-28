import { Popup } from "./PopUp.js"

export default class PopupWithImage extends Popup {
    constructor(data, popup) {
        super(popup);
        this._image = data.src;
        this._text = data.alt;
    }

    open() {
        super.open();

        this._element.querySelector(".popup-image").src = this._image;
        this._element.querySelector(".popup-image").alt = this._text;
        this._element.querySelector(".popup-title").textContent = this._text;

        return this._element;
    }
}