import { loadLogin } from "./login.js";
import { ModalBox } from "./modal.js";

const init = () => {
    loadLogin(document.body);//add loginform in this html document

    const loginBtn = document.querySelector('#index-login-btn');
    loginBtn.addEventListener('click', () => {
        const blackScreen = document.querySelector(".modal-overlay");
        const loginForm = document.querySelector(".login-form ");

        blackScreen.classList.add('active');
        loginForm.classList.add('active');
    });

    const signUpBtn = document.querySelector("#index-signup-btn");
    signUpBtn.addEventListener('click', () => {
        location.href = "signup.html";
    });
}

init();


