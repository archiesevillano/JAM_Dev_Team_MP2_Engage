
//Show/Hide the notification box when profile is clicked
export const profileDropdown = () => {
    const dropDown = document.querySelector(".profile-drop-down");

    if (dropDown.style.display == "block") {
        dropDown.style.display = "none";
    }
    else {
        dropDown.style.display = "block";
    }

}

export const notificationDropDown = () => {
    const notificationBox = document.querySelector(".notification-box");

    if (notificationBox.style.display == "flex") {
        notificationBox.style.display = "none";
    }
    else {
        notificationBox.style.display = "flex";
    }
}

export const messageDropDown = () => {
    const messageBox = document.querySelector(".messages-box");

    if (messageBox.style.display == "flex") {
        messageBox.style.display = "none";
    }
    else {
        messageBox.style.display = "flex";
    }
}
const user_profile = document.querySelector("#user-profile-button");
user_profile.addEventListener("click", profileDropdown);

const notificationBtn = document.querySelector(".notification-btn");
notificationBtn.addEventListener("click", notificationDropDown);


const messageBtn = document.querySelector(".message-btn");
messageBtn.addEventListener("click", messageDropDown);

const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("focus", e => {
    //not yet the final search function
    const result = document.querySelector(".search-result-box");
    if (e.target.value) result.style.display = "block";
});
searchBar.addEventListener("focusout", () => {
    document.querySelector(".search-result-box").style.display = "none";
});
searchBar.addEventListener("input", e => {
    //not yet the final search function
    const result = document.querySelector(".search-result-box");
    if (e.target.value) {
        result.style.display = "block";
    }
    else {
        result.style.display = "none";
    }
});