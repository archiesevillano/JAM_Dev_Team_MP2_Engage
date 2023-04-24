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

        //Verify if the there are empty fields
        //Verify if the email is valid not just random characters
        //verify if the password is at least have 1 special char, uppercase, lowercase and at least 8 characters long without whitespaces
        //check if the user has checked the agreement checkbox
        //check if the password and confirm password has the same value
        //check if the user has already picked a value in the dropdown selection e.g (City, Month, Day, Year)
        //Middle name is optional
    }
}

load();