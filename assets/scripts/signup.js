// Variables
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector("#confirm-password")
const showPassword = document.querySelector('#show-password');
const confirmShowPassword = document.querySelector("#confirm-show-password");

// function
showPassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") 
  === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

confirmShowPassword.addEventListener("click", () => {
    const type = confirmPasswordInput.getAttribute("type") 
    === "password" ? "text" : "password";
    confirmPasswordInput.setAttribute("type", type);
});
  
