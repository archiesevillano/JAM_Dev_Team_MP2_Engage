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

      if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || "confirmPassword.trim()" === '' || dropdownValue === '') {
        console.log('Error: All fields are required');
        return false;
      }

      if (!emailRegex.test(email)) {
        console.log('Error: Invalid email format');
        return false;
      }

      if (!specialChars.test(password) || !uppercaseChars.test(password) || !lowercaseChars.test(password) || password.length < 8 || /\s/.test(password)) {
        console.log('Error: Password must contain at least one special character, one uppercase letter, one lowercase letter, no whitespace and be at least 8 characters long');
        return false;
      }

      if (!agreementChecked) {
        console.log('Error: You must agree to the terms and conditions');
        return false;
      }

      if (password !== confirmPassword) {
        console.log('Error: Passwords do not match');
        return false;
      }

      if (dropdownValue === '') {
        console.log('Error: Please select a value from the dropdown');
        return false;
      }

      console.log('Success: Form validated!');
      return true;
    };

    // Example usage:
    validateForm('John', 'Doe', 'Passw0rd!', 'Passw0rd!', true, 'New York');
  }
  )
};

load();


const generateID = () => {
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const randomChars = Array.from({ length: 5 }, () =>
    Math.random().toString(36).charAt(2)).join('').toUpperCase();
  const id = `${year} ${month} ${day} ${hour} ${minute} ${seconds} ${randomChars}`;
  console.log(id);
  return id;
};