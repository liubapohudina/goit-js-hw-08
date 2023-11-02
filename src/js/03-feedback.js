import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form")
//console.dir(form)
const {email, message} = form.elements;
//console.log({email, message})
const FORM_KEY = 'feedback-form-state';
const dataUser = JSON.parse(localStorage.getItem(FORM_KEY)) 
reloadPage()
//console.log(dataUser)
form.addEventListener("input", throttle(saveData, 500))
form.addEventListener("submit", handleSubmit)
function saveData(event) {
    const dataForm = {email :email.value, message: message.value};
    //console.log(dataForm)
    localStorage.setItem(FORM_KEY,  JSON.stringify(dataForm))
}
function reloadPage() {
    if (dataUser) {
        email.value = dataUser.email 
        message.value = dataUser.message 
    }
}
function handleSubmit(event) {
    event.preventDefault()
    if (email.value === '' || message.value === '') {
       return alert('Please fill all field')
    }
    console.log({ email: email.value, message: message.value })
    form.reset()
    localStorage.clear()
}


