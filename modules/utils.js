export class Popup {
    constructor(image, caption, element) {
        this._image = image;
        this._caption = caption;
        this._element = element;
        this.setEventListeners();
        this.popupOpen.bind(this)
    }

    setEventListeners() {
        this._element.querySelector(".element__image").addEventListener("click", this.popupOpen);
        document.querySelector(".popup-close-btn").addEventListener("click", this.popupClose);
        document.querySelector(".popup-overlay").addEventListener("click", this.popupClose);
    }

    popupOpen() {
        console.log(this)
        const link = this.parentElement.querySelector(".element__image").src;
        const title = this.parentElement.querySelector(".element__caption").textContent;

        document.querySelector(".popup-image").src = link;
        document.querySelector(".popup-title").textContent = title;
        document.querySelector(".popup-overlay").classList.add("popup-overlay_active");
    }

    popupClose() {
        document.querySelector(".popup-overlay").classList.remove("popup-overlay_active");
    }
}