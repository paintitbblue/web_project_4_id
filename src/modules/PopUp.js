export class Popup {
    constructor(element) {
        this._element = element;
        this.setEventListeners();
        this.popupOpen = this.popupOpen.bind(this);
        this.popupClose = this.popupClose.bind(this);
        this.closeAllPopup = this.closeAllPopup.bind(this);
    }

    setEventListeners() {
        this._element.querySelector(".element__image").addEventListener("click", this.popupOpen);
        document.querySelector(".popup-close-btn").addEventListener("click", this.popupClose);
        document.querySelector(".popup-overlay").addEventListener("click", this.popupClose);
        document.addEventListener("keyup", this.closeAllPopup)
    }

    popupOpen() {
        const link = this.parentElement.querySelector(".element__image").src;
        const title = this.parentElement.querySelector(".element__caption").textContent;

        document.querySelector(".popup-image").src = link;
        document.querySelector(".popup-title").textContent = title;
        document.querySelector(".popup-overlay").classList.add("popup-overlay_active");
        document.addEventListener("keyup", this.closeAllPopup);
    }

    popupClose() {
        document.querySelector(".popup-overlay").classList.remove("popup-overlay_active");
        document.removeEventListener("keyup", this.closeAllPopup);
    }

    closeAllPopup = (e) => {
        if (e.key === "Escape") {
          if (document.querySelector(".popup-overlay").classList.contains("popup-overlay_active")) {
            this.popupClose();
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