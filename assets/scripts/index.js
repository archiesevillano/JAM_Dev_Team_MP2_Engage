import { loadLogin } from "./login.js";

const init = () => {
    loadLogin(document.body);//add loginform in this html document

    const loginBtn = document.querySelector('#index-login-btn');
    loginBtn.addEventListener('click', () => {
        const blackScreen = document.querySelector(".modal-overlay");
        const loginForm = document.querySelector(".login-form ");

        blackScreen.classList.add('active');
        loginForm.classList.add('active');
    });
}

init();