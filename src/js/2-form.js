const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
form.addEventListener("input", formInputHandler)
form.addEventListener("submit", formSubmitHandler)

function formInputHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const data = JSON.stringify({ email, message });
    localStorage.setItem(STORAGE_KEY, data)
}

function formSubmitHandler(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const data = { email, message };
    console.log(data)
    localStorage.removeItem(STORAGE_KEY)
    form.reset();
}




    const jsn = localStorage.getItem(STORAGE_KEY) ?? "";

try {
    const savedData = JSON.parse(jsn);
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
}
catch { 
    console.log("No saved info")
}