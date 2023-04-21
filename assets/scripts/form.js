import { loadOnlineSource } from "./resources.js";

export const populateCities = async () => {
    const ISLAND_GROUP_CODES = ["luzon", "visayas", "mindanao"];
    const cities = document.querySelector(".city-selection");

    ISLAND_GROUP_CODES.forEach(async island => {
        const list = await loadOnlineSource(`https://psgc.gitlab.io/api/island-groups/${island}/cities.json`);

        for (let city of list) {
            const opt = document.createElement("option");
            opt.textContent = city.name;
            cities.appendChild(opt);
        }

    });
}

export const populateProvince = async () => {
    const ISLAND_GROUP_CODES = ["luzon", "visayas", "mindanao"];
    const provinces = document.querySelector(".province-selection");

    ISLAND_GROUP_CODES.forEach(async island => {
        const list = await loadOnlineSource(`https://psgc.gitlab.io/api/island-groups/${island}/regions.json`);

        for (let region of list) {
            const opt = document.createElement("option");
            opt.textContent = region.name;
            provinces.appendChild(opt);
        }

    });
}

// export const togglePassword = (textbox, buttonToggle) => {
//     buttonToggle.addEventListener('mouseDown', textbox.type = "text");
//     buttonToggle.addEventListener('mouseUp', textbox.type = "password");
// }

// const btn = document.querySelector(".show-password-btn");
// const field = document.querySelector(".password");

// console.log(btn);
// togglePassword(field, btn);

//ADD TOGGLE PASSWORD FUNCTION
// Variables
const passwordInput = document.querySelector('#password');
const showPassword = document.querySelector('#show-password');
const confirmPasswordInput = document.querySelector("#confirm-password")
const confirmShowPassword = document.querySelector("#confirm-show-password");

// Function
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


// GET AGE FUNC
const getAge = (month, day, year) => {
    // Declare Variable to get present date
    const today = new Date();
    // Declare variable for formula of present date -1 because january is presented as 0
    const birthdate = new Date(year, month - 1, day);
    // Declare age with today and your birthdate
    let age = today.getFullYear() - birthdate.getFullYear();
    // Declare monthDiff to get difference between today and birthdate
    const monthDiff = today.getMonth() - birthdate.getMonth()
    // if with lofical operators to check if value is true or false
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())){
      age--;
    }
    // return age after function
    return age;
  };
  
  const age = getAge(3, 7, 1999);
  console.log(age);
  