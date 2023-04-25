import { populateCities, populateDays, populateMonths, populateProvince, populateYears, togglePassword } from "./form.js";

const load = () => {
    const cancelBtn = document.querySelector(".sign-up-cancel-btn");
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.back();
        console.log("sefsef");
    });

    const togglePs = document.querySelector(".new-password-toggle-btn");
    const toggleConfirmPs = document.querySelector(".confirm-password-toggle-btn");
    const passwordField = document.querySelector(".password");
    const confirmPasswordField = document.querySelector(".confirm-password");

    togglePassword(passwordField, togglePs);
    togglePassword(confirmPasswordField, toggleConfirmPs);

    populateCities();
    populateProvince();
    populateMonths();
    populateYears();
    populateDays();

    const signIn = document.querySelector(".sign-up-btn");
    signIn.addEventListener('click', e => {
        e.preventDefault();

        const validateForm = (firstName, lastName, email, password, confirmPassword, agreementChecked, dropdownValue, middleName = '') => {
          const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          const uppercaseChars = /[A-Z]/;
          const lowercaseChars = /[a-z]/;
          const emailRegex = /^[A-Za-z0-9]+[\w.-]*[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
          
          function validateForm() {
            if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '' || dropdownValue === '') {
              console.log('Error: All fields are required');
              return false;
            }
            else if (!emailRegex.test(email.value)) {
              console.log('Error: Invalid email format');
              return false;
            }
            else if (!specialChars.test(password.value) || !uppercaseChars.test(password.value) || !lowercaseChars.test(password.value) || password.value.length < 8 || /\s/.test(password.value)) {
              console.log('Error: Password must contain at least one special character, one uppercase letter, one lowercase letter, no whitespace and be at least 8 characters long');
              return false;
            }
            else if (!agreementChecked) {
              console.log('Error: You must agree to the terms and conditions');
              return false;
            }
            else if (password.value !== confirmPassword.value) {
              console.log('Error: Passwords do not match');
              return false;
            }
            else if (dropdownValue === '') {
              console.log('Error: Please select a value from the dropdown');
              return false;
            }
            console.log('Success: Form validated!');
            return true;
          };
          
          
          // Example usage:
         
    }
    
});

load();


const generateID = () => {

  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const randomChars = Array.from({length: 5}, () => 
  Math.random().toString(36).charAt(2)).join('').toUpperCase();
  const id = `${year} ${month} ${day} ${hour} ${minute} ${seconds} ${randomChars}`;
  console.log(id);
  return id;
}};