const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailFld = form.elements.email;
const messageFld = form.elements.message;

// On Form start up we check the local storage key state
// If the localStorage key doesn't exist jsn =""
const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
if (jsn) {
    // When the localStorage key exists
    const savedData = JSON.parse(jsn);
    emailFld.value = savedData.email;
    messageFld.value = savedData.message;
};
//Eliminating the spaces
form.addEventListener("change", () =>
    messageFld.value = messageFld.value.trim());
form.addEventListener("input", formInputHandler);
form.addEventListener("submit", formSubmitHandler);

function formInputHandler() {
    emailFld.value = emailFld.value.trim();
    const email = emailFld.value;
    const message = messageFld.value.trim();
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data);
}

function formSubmitHandler(event) {
    event.preventDefault();
    // Reading user info
    const email = emailFld.value;
    const message = messageFld.value;
    // Verification weather there are not empty fields 
    if (email && message) {
        // Create a new user object and output it to the console window
        console.log({ email, message });
        // Reset the form and remove the key from local storage
        form.reset();
        localStorage.removeItem(STORAGE_KEY)
    }
    else { alert("You have to complete the form. All fields are mandatory.") };
};

