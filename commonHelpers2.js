import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",t=document.querySelector(".feedback-form"),a=t.elements.email,l=t.elements.message,m=localStorage.getItem(n)??"";if(m){const e=JSON.parse(m);a.value=e.email,l.value=e.message}t.addEventListener("change",()=>l.value=l.value.trim());t.addEventListener("input",r);t.addEventListener("submit",c);function r(){a.value=a.value.trim();const e=a.value,o=l.value.trim(),s=JSON.stringify({email:e,message:o});localStorage.setItem(n,s)}function c(e){e.preventDefault();const o=a.value,s=l.value;o&&s?(console.log({email:o,message:s}),t.reset(),localStorage.removeItem(n)):alert("You have to complete the form. All fields are mandatory.")}
//# sourceMappingURL=commonHelpers2.js.map