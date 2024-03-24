const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
form.addEventListener("input", formInputHandler)
form.addEventListener("submit", formSubmitHandler)

function formInputHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data)
}

function formSubmitHandler(event) {
    event.preventDefault();

    // Reading user info
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
   
    // Verification weather there are not empty fields 
    if (email.length > 0 && message.length > 0) {
        const data = { email, message };
        console.log(data)
        localStorage.removeItem(STORAGE_KEY)
        form.reset();
        return
    }
    else { alert("You have to complete the form. All fields are mandatory.") };
};
// If the localStorage key doesn't exist jsn =""
const jsn = localStorage.getItem(STORAGE_KEY) ?? "";

if (jsn) {
    // When the localStorage key exists
    const savedData = JSON.parse(jsn);
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
}
else {
     // When the localStorage key doesn't exist
    form.elements.email.value = "";
    form.elements.message.value = "";
};
