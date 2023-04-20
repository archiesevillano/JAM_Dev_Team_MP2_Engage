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

export const togglePassword = (textbox, buttonToggle) => {
    buttonToggle.addEventListener('mouseDown', textbox.type = "text");
    buttonToggle.addEventListener('mouseUp', textbox.type = "password");
}

const btn = document.querySelector(".show-password-btn");
const field = document.querySelector(".password");

console.log(btn);
togglePassword(field, btn);

//ADD TOGGLE PASSWORD FUNCTION