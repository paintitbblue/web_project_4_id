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
const formValidator = new FormValidator(form);
formValidator.enableValidation();

// export class FormValidator {
//     constructor(formElement, selectors) {
//         this.formElement = formElement;
//         this.selectors = selectors;
//         this.inputFields = Array.from(formElement.querySelectorAll("input"));
//         this.errorFields = Array.from(formElement.querySelectorAll(".input-error"));
//         this.submitButton = formElement.querySelector(".submit");

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);

//         this.formElement.addEventlistener("submit", this.handleSubmit);
//         this.inputFields.forEach((inputField) => {
//             inputField.addEventlistener("input", this.handleInput);
//         });

//         this.enableValidation();
//     }

//     enableValidation() {
//         this.formElement.addEventlistener("submit", (e) => {
//             e.preventDefault();
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.clearForm();
//         this.setSubmitButtonState(false);
//     }

//     handleInput(e) {
//         const inputField = e.target;
//         const errorField = this.getErrorField(inputField);
//         const isValid = this.setErrorDisplay(inputField, errorField);

//         this.setSubmitButtonState(this.isFormValid());
//     }

//     setErrorDisplay(inputField, errorField) {
//         let message =  []
//         const isValid =  inputField.value.length > 2;
//         if (!isValid) {
//             errorField.style.display = "block";
//             message.push("must be at least 2 characters")
//             errorField.innerHTML = message
//         }
//         if (inputField.value.length >= 40) {
//             errorField.style.display = "block";
//             message.push("can not be over 40 characters")
//         }
//         if (isValid) {
//             errorField.style.display = "none";
//         }

//         return isValid;
//     }

//     isFormValid() {
//         return this.inputFields.every((inputField) => inputField.validity.valid);
//     }

//     setSubmitButtonState(isValid) {
//         this.submitButton.disabled = !isValid;
//         this.submitButton.classList.toggle(this.selectors.disabledButton);
//     }

//     clearForm() {
//         this.inputFields.forEach((inputField) => (inputField.value = ""));
//         this.errorFields.forEach((errorField) => (errorField.style.display = "none"));
//     }

//     getErrorField(inputField) {
//         const parent = inputField.parentElement;
//         return parent.querySelector(".input-error");
//     }
// }