import { loadLocalSource, loadOnlineSource } from "./resources.js";
import { generateLoad } from "./form.js";


document.addEventListener('readystatechange', e => {
    if (e.target.readyState === "loading") {
        generateLoad();
        console.log("Load");
    } else if (e.target.readyState === "complete") {
        document.querySelector('.content').style.display = "block";
        console.log("Loaded");
    }
    else {
        console.log("Header");
    }
});

export const fetchUser = () => {

};

// Create Card Function 
export const createCard = () => {
    // Card Creation
    // Create Element
    const cards = document.createElement('div');
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const recNameTime = document.createElement("div");
    const recName = document.createElement('p');
    const timePost = document.createElement('p');
    const recOps = document.createElement('div');
    const recOpsBtn = document.createElement('button');
    const engCardsContent = document.createElement('div');
    const jobTitle = document.createElement('div');
    const jobTitleCntnt = document.createElement('p');
    const jobDescript = document.createElement('div');
    const jobSumName = document.createElement('p');
    const jobSummary = document.createElement('p');
    const hireCompany = document.createElement('div');
    const hiringComp = document.createElement('img');
    const engInfo = document.createElement('div');
    const engInfoNum = document.createElement('p');
    const engBot = document.createElement('div');
    const engBotBtn = document.createElement('button');
    const engBotBtn2 = document.createElement('button');

    // Class Adding

    cards.className = ".engagement-cards";
    card.className = ".engagement-cards-name";
    imgContainer.className = ".recruiter-image";
    recNameTime.className = ".recruiter-name-timeposted";
    recName.className = ".recruiter-name";
    timePost.className = ".time-posted";
    recOps.className = ".recruiter-options";
    recOpsBtn.className = ".fa-solid fa-ellipsis fa-xs";
    engCardsContent.className = ".engagement-cards-content";
    jobTitle.className = ".job-title";
    jobDescript.className = ".job-description";
    hireCompany.className = ".hiring-company";
    engInfo.className = ".engagement-info";
    engBot.className = ".engagement-bottom";


    cards.appendChild(card);
    card.appendChild(imgContainer, recNameTime, recOps, engCardsContent, engInfo, engBot);
    imgContainer.appendChild(img);
    recNameTime.appendChild(recName, timePost);
    recOps.appendChild(recOpsBtn);
    engCardsContent.appendChild(jobTitle, jobDescript, hireCompany);
    engInfo.appendChild(engInfoNum);
    engBot.appendChild(engBotBtn, engBotBtn2);


};

const jobInfo = () => {
    const jobBox = document.querySelector(".job-information");
    const jobPosition = document.querySelector(".job-position");
    const qualifications = document.querySelector(".qualification-list");
    const applyBtn = document.querySelector(".apply-btn");
    const savePost = document.querySelector(".save-btn");
    const more = document.querySelector(".more-job-details");
    const clsBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".modal-overlay");

    savePost.addEventListener('click', () => {
        if (savePost.classList.contains('btn-secondary')) {
          savePost.innerHTML = 'Save Post';
          savePost.classList.remove('btn-secondary');
          savePost.classList.add('btn-plain');
        } else {
          savePost.innerHTML = 'Saved';
          savePost.classList.remove('btn-plain');
          savePost.classList.add('btn-secondary');
        }
      });

      applyBtn.addEventListener('click', () => {
        if (applyBtn.classList.contains('btn-secondary')) {
          applyBtn.innerHTML = 'Apply Now';
          applyBtn.classList.remove('btn-secondary');
          applyBtn.classList.add('btn-primary');
        } else {
          applyBtn.innerHTML = 'Cancel';
          applyBtn.classList.remove('btn-primary');
          applyBtn.classList.add('btn-secondary');
        }
      });

    jobBox.classList.add("active");
    overlay.classList.add("active");
    clsBtn.addEventListener('click', () => {
        jobBox.classList.remove('active');
        overlay.classList.remove('active');
    })
}

const createJobPost = async (userImage, name, time, sourceContent) => {
    console.log(sourceContent);

    const wrapper = document.querySelector(".cards-container");

    // Create the main div element
    let engagementCardDiv = document.createElement("div");
    engagementCardDiv.className = "engagement-card";

    // Create the header div element and its children
    let headerDiv = document.createElement("div");
    headerDiv.className = "header";
    headerDiv.style.width = "100%";
    headerDiv.style.display = "flex";
    headerDiv.style.flexDirection = "row";
    headerDiv.style.justifyContent = "space-between";

    let userProfileDiv = document.createElement("div");
    userProfileDiv.className = "user_profile";

    let userImg = document.createElement("img");
    userImg.src = await userImage;
    userProfileDiv.appendChild(userImg);

    let postHeaderDiv = document.createElement("div");
    postHeaderDiv.className = "post-header";

    let postHeaderH3 = document.createElement("h3");
    postHeaderH3.innerHTML = name;
    postHeaderDiv.appendChild(postHeaderH3);

    let postHeaderP = document.createElement("p");
    postHeaderP.innerHTML = time;
    postHeaderDiv.appendChild(postHeaderP);

    let dotsButton = document.createElement("button");
    dotsButton.className = "dots";

    let dotsIcon = document.createElement("i");
    dotsIcon.className = "fa-solid fa-ellipsis";
    dotsButton.appendChild(dotsIcon);

    headerDiv.appendChild(userProfileDiv);
    headerDiv.appendChild(postHeaderDiv);
    headerDiv.appendChild(dotsButton);

    // Create the body div element and its child
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    let bodyImg = document.createElement("img");
    bodyImg.src = await sourceContent;
    bodyImg.style.width = "100%";
    bodyImg.style.marginTop = "20px";
    bodyDiv.appendChild(bodyImg);

    // Create the Apply now button element
    let applyNowButton = document.createElement("button");
    applyNowButton.className = "apply-now-btn btn-primary";
    applyNowButton.innerHTML = "Apply now";
    applyNowButton.addEventListener('click', () => {
        if (applyNowButton.innerHTML === 'Application sent') {
          applyNowButton.innerHTML = 'Apply Now';
          applyNowButton.classList.remove('btn-secondary');
          applyNowButton.classList.add('btn-primary');
        } else {
          applyNowButton.innerHTML = 'Application sent';
          applyNowButton.classList.remove('btn-primary');
          applyNowButton.classList.add('btn-secondary');
          applyNowButton.setAttribute('disabled', 'true');
          applyNowButton.style.pointerEvents = "none";
        }
      });

    // Create the Details button element
    let detailsButton = document.createElement("button");
    detailsButton.className = "details-btn btn-plain";
    detailsButton.innerHTML = "Details";
    detailsButton.addEventListener('click', () => {
        jobInfo();
    })

    // Append all elements to the main engagement card div
    engagementCardDiv.appendChild(headerDiv);
    engagementCardDiv.appendChild(bodyDiv);
    engagementCardDiv.appendChild(applyNowButton);
    engagementCardDiv.appendChild(detailsButton);

    wrapper.appendChild(engagementCardDiv);
}

const createTrainingPost = async (name, time, contentImage, userImage) => {

    const wrapper = document.querySelector(".cards-container");

    // Create the main div element
    let engagementCardDiv = document.createElement("div");
    engagementCardDiv.className = "engagement-card";

    // Create the header div element and its children
    let headerDiv = document.createElement("div");
    headerDiv.className = "header";
    headerDiv.style.width = "100%";
    headerDiv.style.display = "flex";
    headerDiv.style.flexDirection = "row";
    headerDiv.style.justifyContent = "space-between";

    let userProfileDiv = document.createElement("div");
    userProfileDiv.className = "user_profile";

    let userImg = document.createElement("img");
    userImg.src = await userImage;
    userProfileDiv.appendChild(userImg);

    let postHeaderDiv = document.createElement("div");
    postHeaderDiv.className = "post-header";

    let postHeaderH3 = document.createElement("h3");
    postHeaderH3.innerHTML = name;
    postHeaderDiv.appendChild(postHeaderH3);

    let postHeaderP = document.createElement("p");
    postHeaderP.innerHTML = time;
    postHeaderDiv.appendChild(postHeaderP);

    let dotsButton = document.createElement("button");
    dotsButton.className = "dots";

    let dotsIcon = document.createElement("i");
    dotsIcon.className = "fa-solid fa-ellipsis";
    dotsButton.appendChild(dotsIcon);

    headerDiv.appendChild(userProfileDiv);
    headerDiv.appendChild(postHeaderDiv);
    headerDiv.appendChild(dotsButton);

    // Create the body div element and its child
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    let bodyImg = document.createElement("img");
    bodyImg.src = await contentImage;
    bodyImg.style.width = "100%";
    bodyImg.style.marginTop = "20px";
    bodyDiv.appendChild(bodyImg);

    // Create the Enroll now button element
    let enrollNowButton = document.createElement("button");
    enrollNowButton.className = "enroll-now-btn btn-primary";
    enrollNowButton.innerHTML = "Enroll now";

    // Create the Save Post button element
    let savePostButton = document.createElement("button");
    savePostButton.className = "save-post-btn btn-plain";
    savePostButton.innerHTML = "Save Post";
    

    // Append all elements to the main engagement card div
    engagementCardDiv.appendChild(headerDiv);
    engagementCardDiv.appendChild(bodyDiv);
    engagementCardDiv.appendChild(enrollNowButton);
    engagementCardDiv.appendChild(savePostButton);

    wrapper.appendChild(engagementCardDiv);
}

const createInterview = async (src, _title, allow) => {

    const wrapper = document.querySelector(".cards-container");

    // create the engagement card div element
    const engagementCard = document.createElement('div');
    engagementCard.classList.add('engagement-card');

    // create the header div element
    const header = document.createElement('div');
    header.classList.add('header');
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.flexDirection = 'row';
    header.style.justifyContent = 'space-between';

    // create the user profile div element and add the logo image
    const userProfile = document.createElement('div');
    userProfile.classList.add('user_profile');
    const logoImg = document.createElement('img');
    logoImg.src = await 'assets/images/logo.png';
    userProfile.appendChild(logoImg);

    // create the post header div element and add the title and date
    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');
    const title = document.createElement('h3');
    title.textContent = 'Interview Tips and Tricks';
    const date = document.createElement('p');
    date.textContent = 'Posted 15 minutes ago';
    postHeader.appendChild(title);
    postHeader.appendChild(date);

    // create the dots button
    const dotsBtn = document.createElement('button');
    dotsBtn.classList.add('dots');
    const dotsIcon = document.createElement('i');
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis');
    dotsBtn.appendChild(dotsIcon);

    // append the user profile, post header, and dots button to the header div
    header.appendChild(userProfile);
    header.appendChild(postHeader);
    header.appendChild(dotsBtn);

    // create the body div element and add the youtube iframe
    const body = document.createElement('div');
    body.classList.add('body');
    const youtubeIframe = document.createElement('iframe');
    youtubeIframe.width = '100%';
    youtubeIframe.height = '270px';
    youtubeIframe.src = await src;
    youtubeIframe.title = _title;
    youtubeIframe.frameBorder = 0;
    youtubeIframe.allow = allow;
    youtubeIframe.allowFullscreen = true;
    body.appendChild(youtubeIframe);

    // create the watch now and save post buttons
    const watchNowBtn = document.createElement('button');
    watchNowBtn.classList.add('enroll-now-btn', 'btn-primary');
    watchNowBtn.textContent = 'Watch now';
    const savePostBtn = document.createElement('button');
    savePostBtn.classList.add('save-post-btn', 'btn-plain');
    savePostBtn.textContent = 'Save Post';

    // append all the elements to the engagement card div element
    engagementCard.appendChild(header);
    engagementCard.appendChild(body);
    engagementCard.appendChild(watchNowBtn);
    engagementCard.appendChild(savePostBtn);

    // append the engagement card to the document body or another desired parent element
    wrapper.appendChild(engagementCard);
}

const clearPosts = async () => {
    const wrapper = document.querySelector(".cards-container");

    while (wrapper.childElementCount != 0) {
        wrapper.removeChild(wrapper.lastElementChild);
        console.log("heloo");
    }
}

const loadPost = async () => {
    const sideNav = document.querySelector(".side-post-nav");
    const buttonList = [...sideNav.children];

    buttonList.forEach(async button => {

        button.addEventListener('click', () => {
            buttonList.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            handleBtnClick(button);
        });

    });
}

const handleBtnClick = async (button) => {
    clearPosts();
    let dataList = null;
    if (button.classList.contains('active')) {
        switch (button.getAttribute('data-select-type')) {
            case "job":
                dataList = await loadLocalSource("json", "dummyUsers.json");
                dataList.forEach((content, index) => {
                    // userImage, name, time, sourceContent
                    createJobPost("assets/images/user-pic.png", content.name, `Posted ${Math.floor((Math.random() * 60))} minutes ago`, `assets/images/Job images/${(index + 1) < 33 ? index + 1 : index - 31}.png`);
                });
                break;
            case "savedPost":
                break;
            case "training":
                dataList = await loadLocalSource("json", "dummyUsers.json");
                dataList.forEach((content, index) => {
                    // userImage, name, time, sourceContent
                    createTrainingPost(content.name, `Posted ${Math.floor((Math.random() * 60))} minutes ago`, `assets/images/training program Images/${(index + 1) < 23 ? index + 1 : index - 21}.png`, "assets/images/user-pic.png");
                });
            case "interviewTips":
                dataList = await loadLocalSource("json", "InterviewVideos.json");
                dataList.forEach(content => {
                    createInterview(content.src, content.title, content.allow);
                });
                break;
        }
    }
}

loadPost();

const portField = document.getElementById('portFolio');
const addButton = document.querySelector('.add-btn');
const editButton = document.querySelector('.edit-btn');
const removeButton = document.querySelector('.rem-btn');
const saveButton = document.querySelector('.saved-btn');

const toggleButtons = (addBtn, editBtn, remBtn, savedBtn) => {
  addButton.style.display = addBtn ? 'inline-block' : 'none';
  editButton.style.display = editBtn ? 'inline-block' : 'none';
  removeButton.style.display = remBtn ? 'inline-block' : 'none';
  saveButton.style.display = savedBtn ? 'inline-block' : 'none';
};

const addEditRemoveSave = () => {
  toggleButtons(true, false, false, false); // show only the add button initially

  addButton.addEventListener('click', () => {
    portField.disabled = false;
    portField.focus();
    toggleButtons(false, false, true, true); // hide other buttons and show save button
  });

  saveButton.addEventListener('click', () => {
    const newItem = portField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      toggleButtons(false, true, true, false); // show edit and remove buttons
    } else {
      toggleButtons(false, true, true, false); // show only the add button if input is empty
    }
    portField.disabled = true;
  });

  editButton.addEventListener('click', () => {
    portField.disabled = false;
    portField.focus();
    toggleButtons(false, false, true, true); // hide other buttons and show save button
  });

  removeButton.addEventListener('click', () => {
    // remove the item from the list or database
    portField.value = '';
    toggleButtons(true, false, false, false); // show only the add button
    portField.disabled = true;
  });
};

// Call the function immediately when the page loads
addEditRemoveSave();

const workField = document.getElementById('workExpe');
const addExButton = document.querySelector('.addExBtn');
const editExButton = document.querySelector('.edtExBtn');
const remExButton = document.querySelector('.remExBtn');
const saveExButton = document.querySelector('.savedExBtn');

const toggleExButtons = (addBtn, editBtn, remBtn, saveBtn) => {
  addExButton.style.display = addBtn ? 'inline-block' : 'none';
  editExButton.style.display = editBtn ? 'inline-block' : 'none';
  remExButton.style.display = remBtn ? 'inline-block' : 'none';
  saveExButton.style.display = saveBtn ? 'inline-block' : 'none';
};

const exAddEditRemoveSave = () => {
  toggleExButtons(true, false, false, false); // show only the add button initially

  addExButton.addEventListener('click', () => {
    workField.disabled = false;
    workField.focus();
    toggleExButtons(false, false, true, true); // hide other buttons and show save button
  });

  saveExButton.addEventListener('click', () => {
    const newItem = workField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      toggleExButtons(false, true, true, false); // show edit and remove buttons
    } else {
      toggleExButtons(false, true, true, false); // show only the add button if input is empty
    }
    workField.disabled = true;
  });

  editExButton.addEventListener('click', () => {
    workField.disabled = false;
    workField.focus();
    toggleExButtons(false, false, true, true); // hide other buttons and show save button
  });

  remExButton.addEventListener('click', () => {
    // remove the item from the list or database
    workField.value = '';
    toggleExButtons(true, false, false, false); // show only the add button
    workField.disabled = true;
  });
};

// Call the function immediately when the page loads
exAddEditRemoveSave();

const educField = document.getElementById('educ');
const educAddButton = document.querySelector('.educAddBtn');
const educEditButton = document.querySelector('.educEdBtn');
const educRemButton = document.querySelector('.educRemBtn');
const educSaveButton = document.querySelector('.educSaveBtn');

const toggleEducButtons = (addBtn, editBtn, remBtn, saveBtn) => {
  educAddButton.style.display = addBtn ? 'inline-block' : 'none';
  educEditButton.style.display = editBtn ? 'inline-block' : 'none';
  educRemButton.style.display = remBtn ? 'inline-block' : 'none';
  educSaveButton.style.display = saveBtn ? 'inline-block' : 'none';
};

const educAddEditRemoveSave = () => {
  toggleEducButtons(true, false, false, false); // show only the add button initially

  educAddButton.addEventListener('click', () => {
    educField.disabled = false;
    educField.focus();
    toggleEducButtons(false, false, true, true); // hide other buttons and show save button
  });

  educSaveButton.addEventListener('click', () => {
    const newItem = educField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      // show edit and remove buttons
      toggleEducButtons(false, true, true, false); 
    } else {
         // show only the add button if input is empty
      toggleEducButtons(false, true, true, false);
    }
    educField.disabled = true;
  });

// hide other buttons and show save button
  educEditButton.addEventListener('click', () => {
    educField.disabled = false;
    educField.focus();
    toggleEducButtons(false, false, true, true); 
  });

  educRemButton.addEventListener('click', () => {
    // remove the item from the list or database
    educField.value = '';
     // show only the add button
    toggleEducButtons(true, false, false, false);
    educField.disabled = true;
  });
};

// Call the function immediately when the page loads
educAddEditRemoveSave();