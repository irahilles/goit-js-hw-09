import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r="feedback-form-state",t={email:"",message:""},s={form:document.querySelector(".feedback-form")};s.form.addEventListener("input",e=>{t.email=e.currentTarget.elements.email.value,t.message=e.currentTarget.elements.message.value,m(r,t)});function n(){const e=o(r);s.form.elements.email.value=(e==null?void 0:e.email)||"",s.form.elements.message.value=(e==null?void 0:e.message)||""}n();s.form.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}t.email=e.currentTarget.elements.email.value,t.message=e.currentTarget.elements.message.value,console.log(t),e.target.reset(),localStorage.removeItem(r)});function m(e,a){const l=JSON.stringify(a);localStorage.setItem(e,l)}function o(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}
//# sourceMappingURL=2-form.js.map
