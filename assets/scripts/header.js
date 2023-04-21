export const profileDropdown = () => {
    const dropDown = document.querySelector(".profile-drop-down");

    if (dropDown.style.display == "block") {
        dropDown.style.display = "none";
    }
    else {
        dropDown.style.display = "block";
    }

}

const user_profile = document.querySelector("#user-profile-button");
user_profile.addEventListener("click", profileDropdown);