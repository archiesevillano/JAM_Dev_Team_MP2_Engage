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
  
const getAge = (month, day, year) => {
  const today = new Date();
  const birthdate = new Date(year, month -1, day);
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())){
    age--;
  }
  return age;
};

const age = getAge(1, 6, 2000);
console.log(age);
