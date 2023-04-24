import { togglePassword } from "./form.js";

export const isLogin = () => {
    if (localStorage.getItem("account") != null || undefined) {
        return true;
    } else {
        return false;
    }
}

export const loadLogin = body => {
    const blackScreen = document.createElement("div");


    const loginFormContainer = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");
    const textContent = document.createElement("div");
    const left_image = document.createElement("img");
    const closeBtn = document.createElement("button");
    const loginForm = document.createElement("form");
    const formHeader = document.createElement("div");
    const field1 = document.createElement("div");
    const field2 = document.createElement("div");
    const textContenth1 = document.createElement("h1");
    const textContentSmall = document.createElement("small");
    const row = document.createElement("div");
    const buttonCollections = document.createElement("div");
    const headerIconContainer = document.createElement("div");
    const headerH1 = document.createElement("h1");
    const headerP = document.createElement("p");
    const loginFooter = document.createElement("div");
    const formHeaderIcon = document.createElement("i");
    const emailField = document.createElement('input');
    const emailIconContainer = document.createElement("div");
    const emailIcon = document.createElement("i");
    const passwordField = document.createElement('input');
    const passwordIconContainer = document.createElement("div");
    const passwordIcon = document.createElement("i");
    const rememberBoxContainer = document.createElement("div");
    const forgotPassLink = document.createElement("a");
    const rememberBox = document.createElement('input');
    const rememberLabel = document.createElement('label');
    const loginBtn = document.createElement('button');
    const loginFooterP = document.createElement("p");
    const signUpLink = document.createElement("a");

    blackScreen.className = "modal-overlay";
    loginFormContainer.className = "login-form";
    left.className = "left";
    right.className = "right";
    textContent.className = "text-content";
    closeBtn.className = "close-btn";
    loginForm.className = "form-content";
    formHeader.className = "form-header";
    formHeaderIcon.className = "fa-solid fa-circle-user";
    headerIconContainer.className = "icon-container";
    field1.className = "field";
    emailField.className = "email-field";
    emailIconContainer.className = "input-icon-container";
    emailIcon.className = "fa-regular fa-user";
    field2.className = "field";
    passwordField.className = "password-field";
    passwordIconContainer.className = "input-icon-container";
    passwordIcon.className = "fa-regular fa-eye";
    passwordIcon.style.cursor = "pointer";
    row.className = "row";
    rememberBoxContainer.className = "remember-box";
    rememberBox.className = "remember-me-box";
    rememberLabel.setAttribute("for", "remember-me-box");
    forgotPassLink.className = "forgot-pass";
    buttonCollections.className = "button-collections";
    loginBtn.className = "login-btn btn-secondary";
    loginFooter.className = "login-footer";


    forgotPassLink.textContent = "Forgot Password?";
    left_image.src = "assets/images/loginPic.png";
    loginForm.method = "post";
    loginForm.action = "#";
    closeBtn.type = "button";
    closeBtn.innerHTML = `&times;`;
    textContenth1.textContent = "LOG IN";
    textContentSmall.textContent = "Join our community";
    headerH1.textContent = "Hello Again!";
    headerP.innerHTML = `Find jobs that match your skills <br>let's make it happen!`;
    emailField.id = "email-field";
    emailField.placeholder = "Email";
    emailField.type = "text";
    passwordField.type = "password";
    passwordField.placeholder = "Password";
    passwordField.id = "password-field";
    rememberBox.type = "checkbox";
    rememberBox.id = "remember-me-box";
    rememberLabel.textContent = " Remember me";
    loginBtn.type = "button";
    loginBtn.style.width = "100%";
    loginBtn.textContent = "Login";
    loginFooterP.textContent = "Don't have an account yet?";
    signUpLink.textContent = "Sign Up";
    signUpLink.href = "signup.html";


    textContent.appendChild(textContenth1);
    textContent.appendChild(textContentSmall);
    left.appendChild(textContent);
    left.appendChild(left_image);

    right.appendChild(closeBtn);
    headerIconContainer.appendChild(formHeaderIcon);
    formHeader.appendChild(headerIconContainer);
    formHeader.appendChild(headerH1);
    formHeader.appendChild(headerP);
    loginForm.appendChild(formHeader);

    field1.appendChild(emailField);
    emailIconContainer.appendChild(emailIcon);
    field1.appendChild(emailIconContainer);

    field2.appendChild(passwordField);
    passwordIconContainer.appendChild(passwordIcon);
    field2.appendChild(passwordIconContainer);

    loginForm.appendChild(field1);
    loginForm.appendChild(field2);

    rememberBoxContainer.appendChild(rememberBox);
    rememberBoxContainer.appendChild(rememberLabel);
    row.appendChild(rememberBoxContainer);
    row.appendChild(forgotPassLink);
    loginForm.appendChild(row);

    buttonCollections.appendChild(loginBtn);
    loginForm.appendChild(buttonCollections);

    loginFooterP.appendChild(signUpLink);
    loginFooter.appendChild(loginFooterP);

    right.appendChild(loginForm);
    right.append(loginFooter);

    loginFormContainer.appendChild(left);
    loginFormContainer.appendChild(right);

    body.appendChild(blackScreen);
    body.appendChild(loginFormContainer);

    closeBtn.addEventListener('click', () => {
        loginForm.reset();
        blackScreen.classList.remove("active");
        loginFormContainer.classList.remove("active");
    });

    togglePassword(passwordField, passwordIcon);

}

// loadLogin(document.body);

// const btn = document.querySelector(".get-started-btn");
// btn.addEventListener('click', () => {
//     const blackScreen = document.querySelector(".modal-overlay");
//     const loginForm = document.querySelector(".login-form ");

//     blackScreen.classList.add('active');
//     loginForm.classList.add('active');
// });