export class FormValidator {
    constructor(formElement, selectors) {
        this.formElement = formElement;
        this.selectors = selectors;
        this.inputList = Array.from(formElement.querySelectorAll("input"));
        this.buttonElement = formElement.querySelector(".form__submit-btn");
    }

    showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add("form__input_type_error");
        errorElement.textContent = errorMessage;
        errorElement.classList.add("form__input-error");
    }

    hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove("form__input_type_error");
        errorElement.classList.remove("form__input-error");
        errorElement.textContent = "";
    }

    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(inputElement);
        }
    }

    hasInvalidInput() {
        return this.inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    toggleButtonState() {
        
        if(this.hasInvalidInput()) {
            this.buttonElement.classList.add("form__submit-btn-inactive");
            this.buttonElement.disabled = true;
        } else {
            this.buttonElement.classList.remove("form__submit-btn-inactive");
            this.buttonElement.disabled = false;
        }
    }

    setEventListeners() {
        this.toggleButtonState();

        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    }

    enableValidation() {
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        
        this.setEventListeners();
    }
}

const form = document.querySelector(".form");
const addForm = document.querySelector(".add-form");
const addFormValidator = new FormValidator(addForm);
addFormValidator.enableValidation();
const formValidator = new FormValidator(form);
formValidator.enableValidation();