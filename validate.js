const form = document.querySelector(".form");
const formInput = form.querySelector(".form__input");
// const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error");
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error");
    errorElement.textContent = ""
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("form__submit-btn-inactive");
    } else {
        buttonElement.classList.remove("form__submit-btn-inactive");
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll("input"));
    const buttonElement = formElement.querySelector(".form__submit-btn");
    console.log("here", formElement)
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = (formElement) => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
        // formElement.addEventListener("submit", (evt) => {
        //     evt.preventDefault();
        // });
        console.log(formElement)
        setEventListeners(formElement);
    });
}

enableValidation();