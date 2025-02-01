const STORAGE_KEY = "feedback-form-state";

const formData = { 
    email: "", 
    message: "", 
}

const refs = {
    form: document.querySelector('.feedback-form'),
}

// ------------------------------------------------------------///////////////

refs.form.addEventListener('input', (e) => {
   formData.email = e.currentTarget.elements.email.value;
   formData.message = e.currentTarget.elements.message.value;
   saveToLS(STORAGE_KEY, formData);
    
});

function initPage(){
    const dataForm = loadFromLS(STORAGE_KEY);
    refs.form.elements.email.value = dataForm?.email || "";
    refs.form.elements.message.value = dataForm?.message || "";
}
initPage();

// ----------------------//////////////////////////////////////////////////////

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
      }
    formData.email = e.currentTarget.elements.email.value;
    formData.message = e.currentTarget.elements.message.value;
    console.log(formData);
     e.target.reset();
     localStorage.removeItem(STORAGE_KEY);
 });

// /----------------------------------------------------------------/////////////

function saveToLS(key, value){
const jsonData = JSON.stringify(value);
localStorage.setItem(key, jsonData);
}

function loadFromLS(key){
const body = localStorage.getItem(key);
try {
    const data = JSON.parse(body);
    return data;
} catch {
    return body;
}
}

