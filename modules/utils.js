export class Popup {
    constructor() {
        this.popup = document.querySelector(".popup");
        this.popupOverlay = document.querySelector(".popup-overlay");
        this.popupCloseBtn = document.querySelector(".popup-close-btn");

        this.popupCloseBtn.addEventListener("click", this.closePopupImage.bind(this));
    }

    popupImage(index) {
        const link = initialCards[index].link;
        const title = initialCards[index].name;

        document.querySelector(".popup-image").src = link;
        document.querySelector(".popup-title").textContent = title;
        this.popupOverlay.classList.add("popup-overlay_active");
        document.addEventListener("keyup", this.closeAllPopup.bind(this));
        this.popupOverlay.addEventListener("click", (e) => {
            this.closeAnywhere(e);
        });
    }

    closePopupImage() {
        this.popupOverlay.classList.remove("popup-overlay_active");
        document.removeEventListener("keyup", this.closeAllPopup.bind(this));
    }
}



// export class Popup {
//     constructor(image, caption, element) {
//         this._image = image;
//         this._caption = caption;
//         this._element = element;
//         this.setEventListeners();
//     }

//     setEventListeners() {
//         this._element.querySelector(".element__image").addEventListener("click", this.popupOpen.bind(this._element));
//         document.querySelector(".popup-close-btn").addEventListener("click", this.popupClose);
//         document.querySelector(".popup__overlay").addEventListener("click", this.popupClose);
//     }

//     popupOpen() {
//         const link = this.parentElement.querySelector(".element__image").src;
//         const title = this.parentElement.querySelector(".element__caption").textContent;

//         document.querySelector(".popup-image").src = link;
//         document.querySelector(".popup-title").textContent = title;
//         document.querySelector(".popup").style.display = "block";
//     }

//     popupClose() {
//         document.querySelector(".popup").style.display = "none";
//     }
// }